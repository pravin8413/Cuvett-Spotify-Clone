import React from 'react'
import './Sidebar.css'

import { ReactComponent as HomeIcon } from '../assets/HomeIcon.svg';
import { ReactComponent as SearchIcon } from '../assets/SearchIcon.svg';
import { ReactComponent as LibraryIcon } from '../assets/LibraryIcon.svg';

const myPlayList = [
    {
        id: 1,
        name: 'Mohit'

    },
    {
        id: 2,
        name: 'Arjit'

    },
    {
        id: 3,
        name: 'Pravin'

    },
    {
        id: 4,
        name: 'Prakhar'

    },
    {
        id: 5,
        name: 'Neha Kakkar'

    },
    {
        id: 6,
        name: 'Asish'

    },
    {
        id: 7,
        name: 'Abhijit'

    },
    {
        id: 8,
        name: 'Vaishanvi'

    },
    {
        id: 9,
        name: 'Sagar'

    },
    {
        id: 10,
        name: 'Raj'

    }

]
export default function Sidebar() {
    return (
        <div className='side-bar-container'>
            <div className='side-bar-items'>
                <HomeIcon width={'18px'} strokeWidth={'2px'} /> Home
            </div>
            <div className='side-bar-items'>
                <SearchIcon width={'18px'} strokeWidth={'2px'} /> Search
            </div>
            <div className='side-bar-items'>
                <LibraryIcon width={'18px'} strokeWidth={'2px'} /> Your LIbrary
            </div>

            <div className='side-options'>
                {
                    myPlayList.map((item) => {
                        return (
                            <div className='side-bar-items' key={item.id}>
                                {item.name}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
