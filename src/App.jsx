import CatchADog from './CatchADog';
import './App.css';

function App() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-music-note-list" viewBox="0 0 16 16">
              <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
              <path fillRule="evenodd" d="M12 3v10h-1V3z" />
              <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
              <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5" />
            </svg>{' '}
            Pinguinos Music
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-grow-1">
        <CatchADog />
      </main>

      {/* Footer */}
      <footer className="text-white mt-3 py-3" style={{ backgroundColor: '#2d2d2d' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="d-flex flex-column align-items-center me-3">
                {/* Socials */}
                <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook" role="button" className="text-white btn btn-floating">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="..." />
                  </svg>
                </a>
                <a href="mailto:" role="button" aria-label="E-mail" className="text-white btn btn-floating">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="..." />
                  </svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" role="button" aria-label="Instagram" className="text-white btn btn-floating">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="..." />
                  </svg>
                </a>
              </div>
              <div className="align-items-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-music-note-list" viewBox="0 0 16 16">
                  <path d="..." />
                </svg>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <b>Pinguinos Music</b> v.<b>0</b>.<span className="small">01</span><br />
              &copy; 2025 Amelia Staszczyk, Stanisław Maik, Damian Pepliński, Piotr Wołoszyn. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
