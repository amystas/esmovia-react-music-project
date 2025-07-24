function GenreCard(props)
{
    const cardStyle = {
        width: '18rem', 
        flexBasis: '27%',
        marginRight: '5%',
        marginBottom: '15px'
    }
    return (
        <div className="card bg-dark" style={cardStyle}>
            <img className="card-img-top" src={`genres_images/${props.image}`} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-light">{props.name}</h5>
                    <p className="card-text text-light">{props.description}</p>
                    <a href="#" className="btn btn-danger">Read More</a>
                </div>
        </div>
    )
}

export default GenreCard;