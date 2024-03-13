import React from 'react';

export default function Header({ filters, filter, onFilterChange }) {
    return (
        <header>
            <ul>
               {
                filters.map((item, i)=> (
                    <li key={ i }>
                        <button onClick={()=>{
                            onFilterChange(item);
                        }}>{ item }</button>
                    </li>
                ))
               }
            </ul>
        </header>
    );
}