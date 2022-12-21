import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';
import Song from '../components/Song';
const SongChart = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    return (
        <div className='div-container'>
            <SongList songs={songs}/>
        </div>
    )
}

export default SongChart;