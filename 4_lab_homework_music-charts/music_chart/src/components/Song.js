import React from 'react';

const Song = ({song, position}) => {

    return(
        <div className="song-detail">
            <h4>{position} {song['im:artist'].label} {song['im:']}</h4>
        </div>
    )
}

export default Song;