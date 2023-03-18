import React from 'react';

import Card from '../UI/Card'

import styles from './AddUser.module.css';



const AddUser = () => {

const addUserHandler =(event) => {

    event.preventDefault();

}


    return (  
    <Card myClasses={styles.input}>
       <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id="username" type="text" />

        <label htmlFor='age'>Age(Years)</label>
        <input id="age" type="number" />

        <button type="button">Add user</button>

        </form>
    </Card>
    );
}
 
export default AddUser;