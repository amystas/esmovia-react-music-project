import { useEffect, useState } from 'react';
import './TopTen.css';

const TopTen = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/63301128-d987-4c48-af9d-71484abb63ce') // <- podmień na swój endpoint
            .then(response => response.json())
            .then(json => {
                const data = Array.isArray(json) ? json : Object.values(json);
                setArtists(data);
            })
            .catch(err => console.error('Error fetching artists:', err));
    }, []);

    return (
        <section id="articles">
            {artists.map((artist, index) => (
                <article
                    className={`artist-card ${artist.age == null ? 'unknown-age' : ''}`}
                    key={index}
                >
                    <img
                        src={artist.photo}
                        alt={artist.photo}
                        className="artist-photo"
                        loading="lazy"
                    />
                    <div className="artist-content">
                        <h2>{artist.name ?? 'Unknown artist'}</h2>
                        {artist.age !== null && artist.age !== undefined ? (
                            <p className="age">Age: {artist.age}</p>
                        ) : (
                            <p className="age is-unknown">Age: unknown</p>
                        )}
                        <p className="song">
                            Most popular song: <strong>{artist.most_popular_song ?? 'N/A'}</strong>
                        </p>
                        <p className="bio">{artist.bio ?? 'No biography available.'}</p>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default TopTen;
