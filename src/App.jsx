import { useEffect, useState } from 'react';

// Card Component
const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);
  

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} - {count}</h2>
      <button onClick={(e) => {
        e.stopPropagation(); // prevent parent click
        setHasLiked(!hasLiked);
      }}>
        {hasLiked ? '❤️ ' : '👍 '}
      </button>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
