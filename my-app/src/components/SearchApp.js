import React, { useState, useRef, useMemo, useCallback } from 'react';
import useUsers from '../hooks/useUsers'
import UserList from './UserList';

function SearchApp() {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);
    const { users, loading } = useUsers();

    React.useEffect(() => {
        inputRef.current.focus();
    }, []);

    const filterUsers = useCallback(
        (users) => users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm]
    );

    const filteredUsers = useMemo(() => filterUsers(users), [users, filterUsers]);

    return (
        <div>
            <h1>User Search</h1>
            <input
                type="text"
                placeholder="Пошук за ім'ям"
                ref={inputRef}  
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <UserList users={filteredUsers} />
            )}
        </div>
    );
}
export default SearchApp;
