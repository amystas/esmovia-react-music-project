import { useState } from "react"


function MainPage() {

    const [news, setNews]=useState(56);

    setInterval(() => {
    setNews(news+1);
    console.log("Counter:", news);
    }, 3000); // 3000 ms = 3 seconds


    return (
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-music-note-list" viewBox="0 0 16 16">
                        <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
                        <path fillRule="evenodd" d="M12 3v10h-1V3z" />
                        <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
                        <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5" />
                    </svg> Pinguinos Music</a>
                </div>
            </nav>
            <main className="container mt-3">
                <nav aria-label="breadcrumb" className="bg-body-secondary ps-1 rounded">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>

                <nav className="row">

                    <div className="col">
                        <a href="genres.html">
                            <div className="card text-bg-dark">
                                <img src="muzyka_ludowa_16_9.webp" className="card-img" alt="..." height="200px" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Genres</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="topten.html">
                            <div className="card text-bg-dark">
                                <img src="people.avif" className="card-img" alt="..." height="200px" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title text-dark">Top 10 artists</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="about.html">
                            <div className="card text-bg-dark">
                                <img src="people.avif" className="card-img" alt="..." height="200px" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title text-dark">About us</h5>
                                </div>
                            </div>
                        </a>
                    </div>


                </nav>

                <hr/>


                    <section className="row" id="news">
                        <h1>News <span class="badge text-bg-secondary">{news}</span></h1>
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    Featured
                                </div>
                                <img src="accordion.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#">Czytaj dalej</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    Featured
                                </div>
                                <img src="newspaper.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    Featured
                                </div>
                                <img src="GrandPiano-EKX_BG.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr/>

                        <article className="mt-3">
                            <h2>Quote of the day</h2><figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>Kurtyna opadła, brawa nie milkną. Twój koncert trwa... Biletów brak</p>
                                    <p className="text-secondary">The curtain has fallen, the applause continues. Your concert continues... Tickets - sold out.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <cite title="Zbigniew Wodecki">Z. Wodecki</cite>
                                </figcaption>
                            </figure>
                        </article>

                </main>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossOrigin="anonymous"></script>

                    <footer className="text-white mt-3 py-3" style={{ backgroundColor: '#2d2d2d' }}>
                        <div className="container">
                            <div className="row align-items-center">

                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="d-flex flex-column align-items-center me-3">

                                        <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook" role="button" className="text-white btn btn-floating">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                            </svg>
                                        </a>
                                        <a href="mailto:" role="button" aria-label="E-mail" className="text-white btn btn-floating">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                            </svg>
                                        </a>
                                        <a href="https://www.instagram.com" taget="_blank" role="button" aria-label="Instagram" className="text-white btn btn-floating">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="align-items-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-music-note-list" viewBox="0 0 16 16">
                                            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
                                            <path fillRule="evenodd" d="M12 3v10h-1V3z" />
                                            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
                                            <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5" />
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
    )
}

export default MainPage