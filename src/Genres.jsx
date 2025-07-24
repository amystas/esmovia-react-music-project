import GenreCard from "./GenreCard";

function Genres()
{
    const genres = [
        {
            image: "rock.jpg",
            name: "Rock",
            description:
                "Originated in the 1950s from American blues and country music. Characterized by strong emphasis on electric guitars, drums, and powerful vocals",
        },
        {
            image: "pop.webp",
            name: "Pop",
            description:
                'Short for "popular music," focusing on catchy melodies and mass appeal. Often features synthesizers, drum machines, and electronic elements. Emphasizes songwriting craft and production quality',
        },
        {
            image: "rap.jpg",
            name: "Hip-Hop/Rap",
            description:
                "Emerged in the 1970s in urban communities. Combines rhythmic speech (rapping), DJing, breaking, and graffiti art. Features strong emphasis on rhythm, wordplay, and storytelling",
        },
        {
            image: "electronic.jpg",
            name: "Electronic/Dance Music",
            description:
                "Developed from disco and synthesizer music in the 1980s. Created primarily for dancing and electronic music festivals.",
        },
        {
            image: "classical.jpg",
            name: "Classical",
            description:
                "Traditional Western art music spanning centuries. Characterized by complex harmonies and orchestral arrangements.",
        },
        {
            image: "jazz.webp",
            name: "Jazz",
            description:
                "Originated in African-American communities around 1900. Known for improvisation, syncopated rhythms, and blues influences.",
        },
        {
            image: "country.jpg",
            name: "Country",
            description:
                "Rooted in American folk music traditions. Typically features acoustic guitars, banjos, and pedal steel guitar",
        },
        {
            image: "metal.png",
            name: "Metal",
            description:
                "Evolved from rock music in the late 1960s. Characterized by aggressive sound, powerful vocals, and fast tempo.",
        },
        {
            image: "soul.webp",
            name: "R&B/Soul",
            description:
                "Combines rhythm and blues with soul music elements. Emphasizes vocal performance and emotional expression.",
        },
    ];

    return (
        <div className="d-flex flex-wrap justify-content-between">
        {genres.map((card, index) => (
            <GenreCard key={index} name={card.name} description={card.description} image={card.image}></GenreCard>
        ))}
        </div>
    )
}

export default Genres;