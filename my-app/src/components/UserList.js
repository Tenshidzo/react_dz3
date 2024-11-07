import React from "react";
function UserList({ users }) {
    return (
        <ul>
            {users.length > 0 ? (
                users.map((user, index) => (
                    <li key={index}>
                        <strong>{user.name}</strong> - {user.age} years old - {user.email}
                    </li>
                ))
            ) : (
                <p>No users found.</p>
            )}
        </ul>
    );
}

export default UserList;