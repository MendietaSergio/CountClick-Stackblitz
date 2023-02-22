import React, { useState, useEffect } from 'react';
import Promesas from './Promesas';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const Contador = () => {
    setCount(count + 1);
    setTime(new Date().toLocaleTimeString());
  };
  const [tags, setTags] = useState([]);
  const handleKeyDown = (e) => {
    console.log('E=> ', e);
    if (e.target.value.length === 0) {
      return console.log('etasdasd');
    }
    // const value = e.target.value;
    if (e.key === 'Enter' && e.target.value.trim()) {
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };
  const removeTag = (index) => {
    setTags(tags.filter((e, i) => i !== index));
  };
  useEffect(() => {
    console.log('tags=> ', tags);
  }, [tags]);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Contador de click: {count}</p>
      <button onClick={() => Contador()}>Click</button>
      <p>Hora: {time}</p>
      <hr />
      <Promesas />

      <div className="tags-input-container">
        {tags.map((tag, index) => (
          <div key={index} className="tag-item">
            <span className="tag-text">{tag}</span>
            <span className="tag-closed">&times;</span>
          </div>
        ))}
      </div>
      <input
        onKeyDown={(e) => handleKeyDown(e)}
        type="text"
        placeholder="Ingrese... "
        className="tags-input"
      />
    </div>
  );
}
