function ListItem({item, onDelete}) {
    return (
        <div className="item-card">
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    );
}

export default ListItem;




















