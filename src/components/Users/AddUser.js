import React, { useState } from 'react';

import Card from '../UI/Card'
import Button from '../UI/Button'

import styles from './AddUser.module.css';



const AddUser = (props) => {

    const [enterUsername, setEnterUsername] = useState('');

    const [enterAge, setEnterAge] = useState('');


    const addUserHandler = (event) => {

        event.preventDefault();

        console.log(enterUsername, enterAge);
    };

    const usernameChangeHandler = (event) => {

        setEnterUsername(event.target.value);

    };

    const ageChangeHandler = (event) => {
        setEnterAge(event.target.value);
    };


    return (
        <Card myClasses={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input
                    id="username"
                    type="text"
                    onChange={usernameChangeHandler} />

                <label htmlFor='age'>Age(Years)</label>
                <input
                    id="age"
                    type="number"
                    onChange={ageChangeHandler} />

                <Button type="submit">Add user</Button>

            </form>
        </Card>
    );
}

export default AddUser;