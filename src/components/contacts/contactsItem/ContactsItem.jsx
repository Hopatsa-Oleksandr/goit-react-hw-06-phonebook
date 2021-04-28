import React from 'react';
import styles from './ContactsItem.module.css';
import PropTypes from 'prop-types';

const ContactsItem = ({ id, name, number, onRemove }) => (
    <li className={styles.item}>
        <span className={styles.span}>√</span>
        <p className={styles.text}>{name}</p>
        <p className={styles.text}>{number}</p>

        <button
            id={id}
            type="button"
            className={styles.button}
            onClick={onRemove}
        ></button>
    </li>
);

export default ContactsItem;

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};
