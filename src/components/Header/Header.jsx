import React from 'react';
import styles from './Header.module.css'

export default function Header({ filters, filter, onFilterChange }) {
    return (
        <header className={ styles.header }>
            <ul className={ styles.filters }>
               {
                filters.map((item, i)=> (
                    <li key={ i }>
                        <button 
                            className={ `${styles.filter} ${filter === item && styles.selected}` }
                            onClick={()=>{
                                onFilterChange(item);
                            }} 
                        >{ item }</button>
                    </li>
                ))
               }
            </ul>
        </header>
    );
}