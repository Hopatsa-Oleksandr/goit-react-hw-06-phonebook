import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Phonebook.module.css';
import { Empty, Used } from './natification/Natification';

import Form from './form/Form';
import Header from './header/Header';
import Section from './section/Section';
import ContactsList from './contacts/ContactsList';
import FindContact from './findContact/FindContact';

import { connect } from 'react-redux';

const Phonebook = ({ contacts, showUsedAlert, showEmptyAlert }) => {
    return (
        <>
            <CSSTransition
                in={true}
                appear={true}
                classNames={styles}
                timeout={500}
                unmountOnExit
            >
                <Header title="Телефонная книга" />
            </CSSTransition>

            <Section title="Добавтье Ваш контакт">
                <Form />
            </Section>

            {contacts.length > 0 && (
                <Section title="Поиск контактов">
                    <FindContact />
                </Section>
            )}

            {contacts.length > 0 && (
                <Section title="Мои контакты">
                    <ContactsList />
                </Section>
            )}

            <CSSTransition
                in={showEmptyAlert}
                timeout={250}
                classNames={styles}
                unmountOnExit
            >
                <Empty />
            </CSSTransition>

            <CSSTransition
                in={showUsedAlert}
                timeout={250}
                classNames={styles}
                unmountOnExit
            >
                <Used />
            </CSSTransition>
        </>
    );
};

const mapStateToProps = state => ({
    contacts: state.reducerContacts.contacts,
    showUsedAlert: state.reducerContacts.showUsedAlert,
    showEmptyAlert: state.reducerContacts.showEmptyAlert,
});
export default connect(mapStateToProps)(Phonebook);
