import { useState } from 'react';
import ListItem from './ListItem';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
  ]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addItem = () => {
    if (title && author) {
      const newItem = { id: Date.now(), title, author };
      setItems([...items, newItem]);
      setTitle('');
      setAuthor('');
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Book List</h1>
      <div className="form">
        <input
          type="text"
          placeholder=" Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={addItem}>Add Book</button>
      </div>
      <div className="list">
        {items.map((item) => (
          <ListItem key={item.id} item={item} onDelete={deleteItem} />
        ))}
      </div>
    </div>
  );
}

export default App;