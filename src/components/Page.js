import React from 'react';

export default function Page ({ title, children }) {
    return <div className="page">
        <h2>{title}</h2>
        {children}
    </div>
}