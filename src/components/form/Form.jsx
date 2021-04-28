import React, { Component } from 'react';
import styles from './Form.module.css';
import { connect } from 'react-redux';
import {
    addNewContact,
    getAllContacts,
    setAlert,
} from '../../redux/actions/contactsActions';

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    componentDidMount() {
        if (localStorage.getItem('contacts')) {
            this.props.getAllContacts(
                JSON.parse(localStorage.getItem('contacts')),
            );
        }
    }

    componentDidUpdate() {
        if (this.props.showUsedAlert || this.props.showEmptyAlert) {
            setTimeout(() => this.props.setAlert(), 2500);
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onAddContact({
            name: this.state.name,
            number: this.state.number,
        });
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Введите имя"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        onChange={this.handleInputChange}
                    />
                </label>

                <label>
                    Номер
                    <input
                        type="text"
                        name="number"
                        className={styles.input}
                        placeholder="Введите номер"
                        value={this.state.number}
                        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                        onChange={this.handleInputChange}
                    />
                </label>

                <button className={styles.button} type="submit">
                    Добавить
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    showUsedAlert: state.reducerContacts.showUsedAlert,
    showEmptyAlert: state.reducerContacts.showEmptyAlert,
});
const mapDispatchToProps = {
    onAddContact: addNewContact,
    setAlert,
    getAllContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
