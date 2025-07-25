import { useState } from "react"


function MainPage() {

    const [news, setNews]=useState(56);

    setInterval(() => {
    setNews(news+1);
    console.log("Counter:", news);
    }, 3000); // 3000 ms = 3 seconds


    return (
        <div>
            <main className="container mt-3">
                <nav aria-label="breadcrumb" className="bg-body-secondary ps-1 rounded">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>

                <nav className="row">

                    <div className="col">
                        <Link to="/genres">
                            <div className="card text-bg-dark">
                                <img src="main_page_images/muzyka_ludowa_16_9.webp" className="card-img" alt="..." height="200px" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Genres</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/top-ten">
                            <div className="card text-bg-dark">
                                <img src="main_page_images/artists.webp" className="card-img" alt="..." height="200px" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Top 10 artists</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <a href="about.html">
                            <div className="card text-bg-dark">
                                <img src="main_page_images/people.avif" className="card-img" alt="..." height="200px" />
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
                                <img src="main_page_images/accordion.jpg" className="card-img-top" alt="..." />
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
                                <img src="main_page_images/newspaper.jpg" className="card-img-top" alt="..." />
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
                                <img src="main_page_images/GrandPiano-EKX_BG.jpg" className="card-img-top" alt="..." />
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

                    
        </div>
    )
}

export default MainPage