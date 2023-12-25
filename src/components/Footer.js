import React from 'react';
import './Footer.css';
import { ReactComponent as PlayIcon } from '../assets/PlayIcon.svg';
import { ReactComponent as PrevIcon } from '../assets/PrevIcon.svg';
import { ReactComponent as NextIcon } from '../assets/NextIcon.svg';
import { ReactComponent as PauseIcon } from '../assets/PauseIcon.svg';

export default function Footer() {

    const [isPlaying, setIsPlaying] = React.useState(true)

    return (
        <div className='footer-container'>
            <div className='player-control'>
                <PrevIcon width={'32px'} />
                {
                    isPlaying
                    ?
                    <PauseIcon width={'32px'} onClick={() => setIsPlaying(false)} />
                    : 
                    <PlayIcon width={'32px'} onClick={() => setIsPlaying(true)} />
                }
                
                <NextIcon width={'32px'} />
            </div>

        </div>
    )
}
