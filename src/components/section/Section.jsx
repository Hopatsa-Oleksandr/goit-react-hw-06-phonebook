import React from 'react';
import style from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
    return (
        <section className={style.container}>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
};

export default Section;

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};
