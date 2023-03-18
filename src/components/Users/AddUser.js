import React from 'react';

const AddUser = () => {
    return (  

        <form>
        <label htmlFor='username'>Username</label>
        <input id="username" type="text" />

        <label htmlFor='age'>Age(Years)</label>
        <input id="age" type="number" />

        <button type="button"></button>


        </form>


    );
}
 
export default AddUser;