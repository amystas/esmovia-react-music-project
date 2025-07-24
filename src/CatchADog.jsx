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
    <main className="container-fluid flex-grow-1 py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-6">
          <h1 className="display-4 text-center mb-4">Catch a Dog</h1>
          <div className="card bg-secondary text-light p-4 text-center">
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">Error: {error}</p>}
            {dogImage && !loading && (
              <img
                src={dogImage}
                alt="A Random Dog"
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '320px', objectFit: 'cover', width: '100%' }}
              />
            )}
            <button
              className="btn btn-primary custom-btn"
              onClick={fetchDogImage}
              disabled={loading}
            >
              {loading ? 'Fetching...' : 'Fetch New Dog'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CatchADog;
