import React from 'react';
import styles from './Header.module.css'
import { useDarkMode } from '../../context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function Header({ filters, filter, onFilterChange }) {
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <header className={ styles.header }>
            <button
                className={ styles.toggle } 
                onClick={toggleDarkMode}>
                {!darkMode && <HiMoon />}
                {darkMode && <HiSun />}
            </button>
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