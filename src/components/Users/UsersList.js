import React from 'react';

import Card from '../UI/Card';
import Styles from './UsersList.module.css';

const UserLists = (props) => {
    return ( 
        <Card className={StyleSheet.user}>
        <ul>
        {props.users.map((user) => (
        <li>
            {user.name}
            ({user.age} years old)
        </li>
        ))}
        </ul>
        </Card>
     );
};
 
export default UserLists;