function Card({cardId, userName, description, name, id, image, setPiece, show, onDeleteEvent}){
    const handleDelete = () => {
        onDeleteEvent(cardId)
    }
    return (
        <div className="card">
            <img width={300} src={image}></img> 
            <h2 key={cardId}>User: {userName}</h2>
            <h3>Name: {name}, Id: {id} </h3>
            <h4>Description: {description}</h4>
            <p>Set Piece: {setPiece}, Show: {show}</p>
            <button onClick={handleDelete}>Delete Shot from database</button> 
        </div>
    )
}
export default Card