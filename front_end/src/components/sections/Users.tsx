import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useGetUsers } from '../../hooks/useGetUsers';
import { User } from '../../types';
import useRefreshToken from '../../hooks/useRefreshToken';

const UsersQueryInitialValue = {
    users: undefined,
    error: '',
    loaded: false
};

const Users = () => {
    // TODO: refactor query
    const [queryResult, setQueryResult] = useState<{
        users: User[] | undefined;
        error: string;
        loaded: boolean;
    }>(UsersQueryInitialValue);

    useGetUsers().then((result) => setQueryResult(result));

    const { users, error, loaded } = queryResult;

    // console.log(error, loaded);

    const refresh = useRefreshToken();

    return (
        <article>
            <h2>Users List</h2>
            {users?.length ? (
                <ul>
                    {users.map((user) => (
                        <li key={uuidv4()}>{user.username}</li>
                    ))}
                </ul>
            ) : (
                <p>No Users to display</p>
            )}
            {/* <button onClick={() => refresh()}>Refresh</button> */}
            <br />
        </article>
    );
};

export default Users;
