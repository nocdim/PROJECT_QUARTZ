import { waitBeforeProcessing, read1CInfo, selectCorrectData, fetchAndWriteDataFromWeb } from '../JS/methods.js';

setTimeout(() => waitBeforeProcessing().then(read1CInfo().then((res) => {
    if (res === undefined) {
        throw new Error("Couldn't read the temporary JSON file...");
    } else {
        selectCorrectData(res).then((correctData) => {
            fetchAndWriteDataFromWeb(correctData);
        })
    }
})), 2500);