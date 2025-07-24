import { useState, useEffect } from 'react';

function CatchADog() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDogImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) {
        throw new Error('Failed to fetch dog image');
      }
      const data = await response.json();
      setDogImage(data.message);
    } catch (err) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Catch a Dog</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {dogImage && !loading && (
        <img
          src={dogImage}
          alt="A Random Dog"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      )}
      <div style={{ marginTop: '1rem' }}>
        <button onClick={fetchDogImage} disabled={loading}>
          {loading ? 'Fetching...' : 'Fetch New Dog'}
        </button>
      </div>
    </div>
  );
}

export default CatchADog;
