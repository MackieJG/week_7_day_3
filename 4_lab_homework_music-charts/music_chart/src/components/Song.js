import React from 'react';

const Song = ({song, position}) => {

    return(
        <div className="song-detail">
            <h4>{position} {song['im:artist'].label} 
            <img src={song['im:image'][0].label}></img>
            <audio controls>
                <source src={song['link'][2]} type={song['link'][2]}/>
            </audio>
            </h4>
        </div>
    )
}

export default Song;