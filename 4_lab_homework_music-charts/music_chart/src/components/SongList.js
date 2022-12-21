import React from 'react';
import Song from './Song';

const SongList = ({ songs }) => {

    const chartList = songs.map((song, index) => {
        return <Song key={index} song={song} position={index +1}/>  
    })

    return (
        <div className="song-list">
            <ul>
                {chartList}
            </ul>
        </div>
    )
}

export default SongList;