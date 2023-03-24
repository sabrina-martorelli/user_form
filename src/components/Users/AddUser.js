import React, { useState } from 'react';

import Card from '../UI/Card'
import Button from '../UI/Button'

import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';



const AddUser = (props) => {

    const [enterUsername, setEnterUsername] = useState('');
    const [enterAge, setEnterAge] = useState('');
    const [error, setError] = useState('');




    const addUserHandler = (event) => {
        event.preventDefault();
        if(enterUsername.trim().length ===0 || enterAge.trim().length ===0) {
            
            setError({
                title: 'Invalid input',
                message:'Please enter a valid name and age (non-empty values).'
            });
            
            return;
        }
        if(+enterAge < 1) {
            setError({
                title: 'Invalid age',
                message:'Please enter a valid age (>0).'
            });
            return;
        }
        props.onAddUser(enterUsername,enterAge);
        setEnterUsername('');
        setEnterAge('');
     
    };

    const usernameChangeHandler = (event) => {

        setEnterUsername(event.target.value);

    };

    const ageChangeHandler = (event) => {
        setEnterAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
       {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input
                    id="username"
                    type="text"
                    onChange={usernameChangeHandler}
                    value={enterUsername} />

                <label htmlFor='age'>Age(Years)</label>
                <input
                    id="age"
                    type="number"
                    onChange={ageChangeHandler}
                    value={enterAge} />

                <Button type="submit">Add user</Button>

            </form>
        </Card>
        </>
    );
}

export default AddUser;