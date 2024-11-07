import { useState, useEffect } from 'react';

function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Симулюємо затримку завантаження
        setTimeout(() => {
            setUsers([
                { name: 'Alice', age: 25, email: 'alice@example.com' },
                { name: 'Bob', age: 30, email: 'bob@example.com' },
                { name: 'Charlie', age: 35, email: 'charlie@example.com' },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    return { users, loading };
}
export default useUsers;