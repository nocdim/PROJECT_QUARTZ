import data from '../../../../../../OFD_data/data.mjs';
const { 
    link_log, 
    login, 
    login2,
    password, 
    link_shifts, 
    link_receipts, 
    link_obtain_receipt_guid,
    link_get_tagged_receipt,
} = data;

const secret_link_log = link_log;
const secret_login = login;
const secret_login2 = login2;
const secret_password = password;
const secret_link_shifts = link_shifts;
const secret_link_receipts = link_receipts;
const secret_link_obtain_receipt_guid = link_obtain_receipt_guid;
const secret_link_get_tagged_receipt = link_get_tagged_receipt;

export default {
    secret_link_log,
    secret_login,
    secret_login2,
    secret_password,
    secret_link_shifts,
    secret_link_receipts,
    secret_link_obtain_receipt_guid,
    secret_link_get_tagged_receipt,
}