import { v4 as uuidv4 } from 'uuid';

import {
    ADDNEWCONTACT,
    DELETECONTACT,
    SETFILTER,
    SETALERT,
    GETALLCONTACTS,
} from '../constants/contactsConstants';

export const addNewContact = contact => ({
    type: ADDNEWCONTACT,
    payload: { ...contact, id: uuidv4() },
});

export const deleteContact = id => ({
    type: DELETECONTACT,
    payload: id,
});

export const setFilter = value => ({
    type: SETFILTER,
    payload: value,
});

export const setAlert = () => ({
    type: SETALERT,
});

export const getAllContacts = contacts => ({
    type: GETALLCONTACTS,
    payload: contacts,
});
