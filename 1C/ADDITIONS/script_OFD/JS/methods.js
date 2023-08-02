import axios from "axios";
import pkg from './assets/consts.js';
import data1C from 'file:///C:/Users/nochevkin/Desktop/app/PROJECT_QUARTZ/1C/ADDITIONS/script_OFD/temporaryData.json' assert { type: "json"};
import fs from 'fs';
const {
    secret_link_log,
    secret_login,
    secret_password,
    secret_link_shifts,
    secret_link_receipts,
    secret_link_obtain_receipt_guid,
    secret_link_get_tagged_receipt,
} = pkg;

const waitBeforeProcessing = async () => {
    console.log("\n" + "Starting process...");
    console.log("-------------------------------------------" + '\n');
}

async function read1CInfo() {
    if (data1C) {
        //console.log(data1C);
        return data1C;
    } else {
        //console.log("ERROR - Couldn't find the temporary data from 1C...");
        throw new Error("ERROR - Couldn't find the temporary data from 1C...");
    }
}

async function selectCorrectData(data1C) {
    // testing...
    let cabinetID;
    let cashBoxKKM;
    cabinetID = await getCabinetID(data1C.Organization);
    cashBoxKKM = await getCashBoxKKM(data1C.CashBoxKKM);
    // testing
    //console.log(cabinetID, cashBoxKKM)
    let dataObj = {
        dateFrom_key: data1C.DateFrom,
        dateTo_key: data1C.DateTo,
        documentType_key: data1C.DocumentType,
        cabinetID_key: cabinetID,
        cashBoxKKM_key: cashBoxKKM,
    }
    return dataObj;
}

async function fetchAndWriteDataFromWeb(selectedData) {
    // with all the right data fetched from selectCorrectData function
    // it's supposed to make a GET query to the right link...
    axios.get(secret_link_log).then((res) => {
        let csrf_token = res.data.csrf;
        axios.post(secret_link_log, {
            login: secret_login,
            password: secret_password,
            externalSystem: null,
        }, {
            headers: {
                "Csrf": csrf_token
            }
        }).then((res) => {
            if (res.status == 200 && res.data.data.userId !== null) {
                axios.post(secret_link_log, {
                    login: secret_login,
                    password: secret_password,
                    externalSystem: null,
                    cabinetID: selectedData.cabinetID_key
                }, {
                    headers: {
                        "Csrf": csrf_token
                    }
                }).then((res) => {
                    let requiredCookies = res.headers['set-cookie'];
                    let constructedLink = constructLink(selectedData, undefined);
                    axios.get(constructedLink, {
                        headers: {
                            // FUCKEN COOKIEEEEEEEEEEEEE
                            Cookie: requiredCookies,
                        }
                    }).then(async (res) => {
                        pushDataInArray(res, selectedData, constructedLink, requiredCookies);
                    })
                })
            }

        })
    })
}

const createJSONFile = async (dataArr) => {
    let JSONpath = '../temporaryData.json';
    let JSONdata = JSON.stringify(dataArr, null, 2);
    fs.writeFileSync(JSONpath, JSONdata);
    console.log("Data has been written in JSON file at --> " + JSONpath);
}

const pushDataInArray = async (res, selectedData, constructedLink, requiredCookies) => {
    //console.log(res.data.data);
    // P.S. This website paging works like SHIT
    // so i have to make a lot of unnecessary get queries
    // to get the right amount of pages.. BRUH
    // ADDITION - this is the best idea that came to my mind
    let pageAmount = await countAmountOfPages(res.data.data, selectedData, constructedLink, requiredCookies);
    let dataArr = [];
    let promises = [];
    for (let pageNum = 1; pageNum <= pageAmount; pageNum++) {
        constructedLink = constructLink(selectedData, pageNum);
        promises.push(
            axios.get(constructedLink, {
                headers: {
                    Cookie: requiredCookies,
                }
            }).then((res) => {
                for (let i = 0; i < res.data.data.collection.length - 1; i++) {
                    if (res.data.data.collection[i].type === 3) {
                        dataArr.push(res.data.data.collection[i]);
                        console.log("||| Object successfully added ||| --> Data: SUM = "
                            + res.data.data.collection[i].sum + " on page " + pageNum);
                        console.log("------- " + i + " -------");
                    }
                }
            })
        )
    }
    Promise.all(promises).then(async () => {
        console.log("Collecting receitps - COMPLETED!");
        // idk how to properly send the data to the function so i will juust call it here
        // P.S. At this point i thought i was done with collecting data from the website
        // but i was wrong..
        // i have to collect the data about individual item (good) in the receipt..
        // for some reason it's not included in the page that i connect to... BRUH MOMENTO
        let correctedArray = await addItemsToReceipts(dataArr, requiredCookies);
        createJSONFile(correctedArray).then(() => {
            console.log("SUCCESS! PROGRAM WILL BE CLOSED IN 5 SECONDS...");
        });
    })
};

const addItemsToReceipts = async (array, requiredCookies, element, /*retrying = false*/) => {
    // this is where i should get receiptID and collect receipt data
    // fortunately i have all the data needed to find what i search for :)
    if (element === undefined) {
        element = 0;
    }
    for (element; element <= array.length - 1; element++) {
        console.log("\n" + element + " out of " + (array.length - 1) + "\n");
        // obtaining receipt guid
        array[element].documentType_key = "Receipt";
        let constructedLink = constructLink(array[element], null, "obtainReceiptGUID");
        //console.log(constructedLink);
        let res = await axios.get(constructedLink, {
            headers: {
                Cookie: requiredCookies,
            }
        }).catch((err) => {
            tryAgain(err, array, requiredCookies, element);
        });
        // obtaining needed receipt info
        let receiptGUID = res.data.data.documentId;
        console.log("Document num - " + array[element].documentNumber + '\n'
            + "Obtained receiptGUID... " + receiptGUID);
        array[element].receiptGUID = receiptGUID;
        constructedLink = constructLink(array[element], null, "getTaggedReceipt");
        //console.log(constructedLink);
        let res2 = await axios.get(constructedLink, {
            headers: {
                Cookie: requiredCookies,
            }
        }).catch((err) => {
            // i suggest that because of a large number of get queries
            // connection gets dropped...
            // so i try to continue where the program stopped
            tryAgain(err, array, requiredCookies, element);
        });
        let neededItemData = await collectNeededData(res2);
        console.log(neededItemData);
        if (array[element].itemData === undefined) {
            array[element].itemData = neededItemData;
        }
    }
    return array;

}

const tryAgain = async (err, array, cookies, elementNum) => {
    console.log(err + "\n" + "Unexpected error occured..." + "\n"
        + "Retrying to get information from where program collapsed..." + "\n"
        + "Data before collapse --> "+ "\n" + err + "\n" + elementNum + "\n");
        //let retrying = true;
    await addItemsToReceipts(array, cookies, elementNum/*, retrying*/);
}

const collectNeededData = async (res) => {
    let neededItems = [];
    for (let itemInfo of res.data.data.Document.Value) {
        if (itemInfo.Tag == "1059") {
            let neededItemData = {};
            // 1059 --> 1030 && 1079 && 1023
            for (let itemInfoA of itemInfo.Value) {
                if (itemInfoA.Tag == "1030") {
                    neededItemData.itemName = itemInfoA.Value;
                } else if (itemInfoA.Tag == "1079") {
                    neededItemData.itemPrice = itemInfoA.Value;
                } else if (itemInfoA.Tag == "1023") {
                    neededItemData.itemQuantity = itemInfoA.Value;
                }
            }
            neededItems.push(neededItemData);
        }
    }
    return neededItems;
}

// SOMEHOW this thing works...
const countAmountOfPages = async (data, selectedData, constructedLink, requiredCookies) => {
    let pageCount = 1;
    let collectionLength = data.collection.length;
    for (pageCount; collectionLength !== 0;) {
        console.log("Counting pages... Currently on page " + pageCount);
        constructedLink = constructLink(selectedData, pageCount);
        let res = await axios.get(constructedLink, {
            headers: {
                Cookie: requiredCookies,
            }
        })
        collectionLength = res.data.data.collection.length;
        if (collectionLength !== 100) {
            break;
        }
        pageCount++;
    }
    return pageCount;
}

const constructLink = (selectedData, pageNumber, linkType) => {
    switch (selectedData.documentType_key) {
        case "Shift":
            return;
        case "Receipt":
            if (linkType === undefined) {
                // unfortunately the amount of receipts is limited to 100 docs
                // so i have to list through the pages somehow... 
                if (pageNumber === undefined) {
                    let linkString = (secret_link_receipts + selectedData.cashBoxKKM_key + "?sort[columnName]=date"
                        + "&sort[direct]=asc" + "&filters[documentTypeID]=-1" + "&filters[operationTypeID]=-1"
                        + "&filters[shiftID]=-1" + "&filters[searchAttr]=1" + "&filters[fromDate]=" + selectedData.dateFrom_key
                        + "&filters[toDate]=" + selectedData.dateTo_key + "&filters[withErrorsOnly]=false"
                        + "&filters[paymentMethod]=" + "&paging[page]=1" + "&paging[count]=100");
                    let linkString_firtsReplacement = linkString.replaceAll('[', '%5B');
                    let linkString_secondReplacement = linkString_firtsReplacement.replaceAll(']', '%5D');
                    return linkString_secondReplacement;
                } else {
                    let linkString = (secret_link_receipts + selectedData.cashBoxKKM_key + "?sort[columnName]=date"
                        + "&sort[direct]=asc" + "&filters[documentTypeID]=-1" + "&filters[operationTypeID]=-1"
                        + "&filters[shiftID]=-1" + "&filters[searchAttr]=1" + "&filters[fromDate]=" + selectedData.dateFrom_key
                        + "&filters[toDate]=" + selectedData.dateTo_key + "&filters[withErrorsOnly]=false"
                        + "&filters[paymentMethod]=" + "&paging[page]=" + pageNumber + "&paging[count]=100");
                    let linkString_firtsReplacement = linkString.replaceAll('[', '%5B');
                    let linkString_secondReplacement = linkString_firtsReplacement.replaceAll(']', '%5D');
                    return linkString_secondReplacement;
                }
            } else if (linkType === "obtainReceiptGUID") {
                let linkString = (secret_link_obtain_receipt_guid + "?kktId=" + selectedData.kktId + "&fp="
                    + selectedData.fiscalSign + "&documentNumber=" + selectedData.documentNumber);
                return linkString;
            } else if (linkType === "getTaggedReceipt") {
                let linkString = (secret_link_get_tagged_receipt + "?receiptGuid=" + selectedData.receiptGUID);
                return linkString;
            } else {
                throw new Error("Something went wrong while constructing a link...")
            }

    }
}

async function getCabinetID(organization) {
    switch (organization) {
        case 'СПБ Ритейл ':
            return 301907;
        case 'Гранд-Трейд ООО':
            return 337550;
        case 'Гранд-Трейд':
            return 337550;
        case 'МОКИТО':
            return 329194;
        default:
            //console.log("ERROR - ORGANIZATION " + organization + " IS NOT SUPPORTED!");
            throw new Error("ERROR - ORGANIZATION " + organization + " IS NOT SUPPORTED!");
    }
}

async function getCashBoxKKM(cashBoxKKM) {
    switch (cashBoxKKM) {
        case 'Внуково 6 ККМ1':
            return 868731;
        default:
            //console.log("ERROR - CASHBOXKKM " + cashBoxKKM + " IS NOT SUPPORTED!");
            throw new Error("ERROR - CASHBOXKKM " + cashBoxKKM + " IS NOT SUPPORTED!");
    }
}

export {
    waitBeforeProcessing,
    read1CInfo,
    selectCorrectData,
    fetchAndWriteDataFromWeb,
    createJSONFile,
}