import React from 'react';
import styles from './Find.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../../redux/actions/contactsActions';

const FindContact = ({ filter, setFilter }) => {
    const onHandleChange = e => {
        const { value } = e.target;
        setFilter(value);
    };
    return (
        <>
            <input
                type="text"
                className={styles.input}
                placeholder="Поиск контактов по имени"
                value={filter}
                onChange={onHandleChange}
            />
        </>
    );
};
const mapStateToProps = state => {
    return {
        filter: state.reducerContacts.filter,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setFilter: id => {
            dispatch(setFilter(id));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FindContact);

FindContact.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};
