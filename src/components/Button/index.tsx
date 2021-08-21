import React, { Component } from 'react';
import styles from './Button.module.scss';

const Button = () => {
    return (
        <button className={styles.success} type='button'>
            Button
        </button>
    );
};

export default Button;
