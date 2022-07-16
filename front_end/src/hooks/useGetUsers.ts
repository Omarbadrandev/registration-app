import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { User } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';
// https://blog.openreplay.com/integrating-axios-with-react-hooks

export const useGetUsers = async (): Promise<{
    users: User[] | undefined;
    error: string;
    loaded: boolean;
}> => {
    const [users, setUsers] = useState<User[]>();
    const [error, setError] = useState('');
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const url = '/users';
        const getUsers = async () => {
            try {
                const response = await axios.get(url, {
                    signal: controller.signal
                });
                isMounted && setUsers(response.data);
            } catch (error) {
                const err = error as AxiosError;
                setError(err.message);
                // navigate('/login', { state: { from: location }, replace: true });
            } finally {
                setLoaded(true);
            }
        };

        getUsers();

        // clean up function of use effect
        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    return { users, error, loaded };
};
