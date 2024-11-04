import React from 'react';
import './usericon.css';

function UserIcon({ name, available }: { name: string; available: boolean }) {
    return (
        <div className='usericon-container'>
            <img 
                src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" 
                alt={`${name}'s avatar`} 
                className='usericon-image' 
            />
            <div className={`user-status ${available ? 'available' : ''}`}></div>
        </div>
    );
}

export default UserIcon;
