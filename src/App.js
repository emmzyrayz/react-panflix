// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


function App() {
    const [isActive, setActive] = useState('false');
    const [isSearch, setSearch] = useState('false');
    
    const handleToggle = () => {
        setActive(!isActive);
    };
    const searchBarIsActive = () => {
        setSearch(!isSearch);
    };

    
  return (
    <div classNameName='body'>
      <div className="container">
        {/* <!-- #header section --> */}
        <header id="header" className={isActive ? "" : "active"}>
            <div className="navbar">
                {/* <!-- #menu button for small screen --> */}
            <div onClick={handleToggle
            } id="navbar-menu-btn" className={`navbar-menu-btn button ${isActive ? " " : "active"}`}>
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
            </div>

                <a href='/' className="navbar-brand">
                    <h2>Pan<span>Flix</span></h2>
                </a>

                {/* <!-- #navbar navigation --> */}
                <nav id="nav" className={isActive ? "" : "active"}>
                    <ul className="navbar-nav">
                        <li><a href='/' className="navbar-link">Home</a></li>
                        <li><a href="#category" className="navbar-link">Category</a></li>
                        <li><a href="#live" className="navbar-link">LIVE</a></li>
                    </ul>
                </nav>
                {/* <!-- !navbar navigation --> */}

                {/* <!-- #Search and sign-in --> */}
                <div className="navbar-actions">
                    <form action="#"
                    className={`navbar-form ${isSearch ? "" : "active"}`} id="navbar-form">
                        <input type="text" name="search" id="" placeholder="I'm looking for..." className="navbar-form-search" />

                        <div className="button navbar-form-btn">
                            <ion-icon name="search-outline"></ion-icon>
                        </div>

                        <div id="navbar-form-close" 
                        onClick={searchBarIsActive}
                        className={`navbar-form-close button ${isSearch ? "" : "active"}`}>
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </div>
                    </form>

                    {/* <!-- search button for small screen --> */}

                    <div id='navbar-search-btn' 
                    onClick={searchBarIsActive}
                    className={`navbar-search-btn button ${isSearch ? "" : "active"}`}>
                        <ion-icon name="search-outline"></ion-icon>
                    </div>

                    <a href='/' className="navbar-signin">
                        <span>Sign in</span>
                        <ion-icon name="log-in-outline"></ion-icon>
                    </a>
                </div>
                {/* <!-- !Search and sign-in --> */}
            </div>
        </header>
        {/* <!-- !header section --> */}

        {/* <!-- #Main Section --> */}
        <main>
            {/* <!-- #banner section --> */}
            <section className="banner">
                <a href="/assets/html/movie.html">
                    <div className="banner-card">
                        <img src="./assets/images/13_fm4_2008_lamborghini_reventon.jpg" alt="" className="banner-img" />
        
                        <div className="card-content">
                            <div className="card-info">
        
                                <div className="genre">
                                    <ion-icon name="film"></ion-icon>
                                    <span>Action/Thriller</span>
                                </div>
        
                                <div className="year">
                                    <ion-icon name="document"></ion-icon>
                                    <span>2019</span>
                                </div>
        
                                <div className="duration">
                                    <ion-icon name="time"></ion-icon>
                                    <span>2h 11m</span>
                                </div>
        
                                <div className="quality">4k</div>
        
                            </div>
        
                            <h2 className="card-title">John Wick: Chapter 3 - Parabellum</h2>
                        </div>
                    </div>
                </a>
            </section>
            {/* <!-- !banner section --> */}

            {/* <!-- #MOVIES SECTION --> */}
            <section className="movies">
                {/* <!-- #Filter bar --> */}
                <div className="filter-bar">

                    <div className="filter-dropdowns">
                        <select name="genre" className="genre">
                            <option value="all genre">All genre</option>
                            <option value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="animal">Animal</option>
                            <option value="animation">Animation</option>
                            <option value="biography">Biography</option>
                        </select>

                        <select name="year" className="year">
                            <option value="all years">All the years</option>
                            <option value="2022">2022</option>
                            <option value="2020-2021">2020-2021</option>
                            <option value="2010-2019">2010-2019</option>
                            <option value="2000-2009">2000-2009</option>
                            <option value="1980-1999">1980-1999</option>
                        </select>
                    </div>

                    <div className="filter-radios">
                        <input type="radio" id="featured" checked />
                        <label for="featured">Featured</label>

                        <input type="radio" id="popular" />
                        <label for="popular">Popular</label>

                        <input type="radio" id="newest" />
                        <label for="newest">Newest</label>

                        <div className="checked-radio-bg"></div>
                    </div>
                </div>
                {/* <!-- !Filter bar --> */}

                {/* <!-- #MOVIES GRID --> */}
                <div className="movies-grid">
                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/1_halo4.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Red Notice</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/call-of-duty-ghosts-01-guide4games.net-.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <div className="play">
                                    <a href='/'>
                                        <ion-icon name="play-circle-outline"></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">COD ghost</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/watch_dogs2.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Watch Dogs - 2</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/2_halo4.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">HALO</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/nfs-rivas-01-guide4games.com-.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">NFS - most wanted</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/watch_dogs3.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Watch Dogs - 2</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/3_halo4.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">HALO - 3</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/call-of-duty-ghosts-06-guide4games.net-.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">COD ghost recon</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/watch_dogs2.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Watch Dogs - 2</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/1_halo4.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Red Notice</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/call-of-duty-ghosts-01-guide4games.net-.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">COD ghost</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/watch_dogs2.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Watch Dogs - 2</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/1_halo4.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Red Notice</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/call-of-duty-ghosts-01-guide4games.net-.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">COD ghost</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/watch_dogs2.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Watch Dogs - 2</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/1_halo4.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Red Notice</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/call-of-duty-ghosts-01-guide4games.net-.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">COD ghost</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="movie-card">
                        <div className="card-head">
                            <img src="./assets/images/watch_dogs2.jpg" alt="" className="card-img" />

                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>

                                <div className="rating">
                                    <ion-icon name="star-outline"></ion-icon>
                                    <span>6.4</span>
                                </div>

                                <a href="/assets/html/movie.html"><div className="play">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Watch Dogs - 2</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- !MOVIES GRID --> */}
                {/* <!-- #Load more button --> */}
                <div className="button load-more">LOAD MORE</div>
                {/* <!-- !Load more button --> */}
            </section>
            {/* <!-- !MOVIES SECTION --> */}

            {/* <!-- #CATEGORY SECTION --> */}
            <section className="category" id="category">
                <h2 className="section-heading">Category</h2>
                <div className="category-grid">
                    <div className="category-card">
                        <img src="./assets/images/call-of-duty-ghosts-12-guide4games.net-.jpg" alt="" className="card-img" />
                        <div className="name">Action</div>
                        <div className="total">100</div>
                    </div>
                    <div className="category-card">
                        <img src="./assets/images/call-of-duty-ghosts-14-guide4games.net-.png" alt="" className="card-img" />
                        <div className="name">Action</div>
                        <div className="total">100</div>
                    </div>
                    <div className="category-card">
                        <img src="./assets/images/call-of-duty-ghosts-15-guide4games.net-.png" alt="" className="card-img" />
                        <div className="name">Action</div>
                        <div className="total">100</div>
                    </div>
                    <div className="category-card">
                        <img src="./assets/images/call-of-duty-ghosts-16-guide4games.net-.jpg" alt="" className="card-img" />
                        <div className="name">Action</div>
                        <div className="total">100</div>
                    </div>
                    <div className="category-card">
                        <img src="./assets/images/call-of-duty-ghosts-06-guide4games.net-.jpg" alt="" className="card-img" />
                        <div className="name">Action</div>
                        <div className="total">100</div>
                    </div>
                    <div className="category-card">
                        <img src="./assets/images/1_halo4.jpg" alt="" className="card-img" />
                        <div className="name">Action</div>
                        <div className="total">100</div>
                    </div>
                    <div className="category-card">
                        <img src="./assets/images/2_halo4.jpg" alt="" className="card-img" />
                        <div className="name">Action</div>
                        <div className="total">100</div>
                    </div>
                    <div className="category-card">
                        <img src="./assets/images/call-of-duty-ghosts-12-guide4games.net-.jpg" alt="" className="card-img" />
                        <div className="name">Action</div>
                        <div className="total">100</div>
                    </div>
                </div>
            </section>
            {/* <!-- !CATEGORY SECTION --> */}

            {/* <!-- #LIVE SECTION --> */}
            <section className="live" id="live">

                <h2 className="section-heading">Live Tv Shows</h2>

                <div className="live-grid">
                    <div className="live-card">
                        <div className="card-head">
                            <img src="./assets/images/6_fm4_2011_koenigsegg_agera.jpg" alt="" className="card-img" />
                            <div className="live-badge">LIVE</div>
                            <div className="total-viewers">305k viewers</div>
                            <div className="play">
                                <ion-icon name="play-circle-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src="./assets/images/image00001.jpg" alt="" className="avatar" />
                            <h3 className="card-title">Planet Earth II <br /> Season 1 - Islands</h3>
                        </div>
                    </div>
                    <div className="live-card">
                        <div className="card-head">
                            <img src="./assets/images/16_fm4_2011_bmw_1mcoupe.jpg" alt="" className="card-img" />
                            <div className="live-badge">LIVE</div>
                            <div className="total-viewers">305k viewers</div>
                            <div className="play">
                                <ion-icon name="play-circle-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src="./assets/images/image00001.jpg" alt="" className="avatar" />
                            <h3 className="card-title">Planet Earth II <br /> Season 1 - Islands</h3>
                        </div>
                    </div>
                    <div className="live-card">
                        <div className="card-head">
                            <img src="./assets/images/10_fm4_2011_alfaromeo_giulietta.jpg" alt="" className="card-img" />
                            <div className="live-badge">LIVE</div>
                            <div className="total-viewers">5k viewers</div>
                            <div className="play">
                                <ion-icon name="play-circle-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src="./assets/images/image00001.jpg" alt="" className="avatar" />
                            <h3 className="card-title">Planet Earth II <br /> Season 1 - Islands</h3>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- !LIVE SECTION --> */}
        </main>
        {/* <!-- !Main Section --> */}
        
        {/* <!-- #FOOTER SECTION --> */}
        <footer>
            <div className="footer-content">
                <div className="footer-brand">
                    <h2 className="footer-logo">Pan<span>Flix</span></h2>
                    <p className="slogan">Movies & Tv shows, Online cinem, Movie database HTML Template.</p>

                    <div className="social-link">

                        <a href='/'><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href='/'><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href='/'><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href='/'><ion-icon name="logo-tiktok"></ion-icon></a>
                        <a href='/'><ion-icon name="logo-youtube"></ion-icon></a>

                    </div>
                </div>

                <div className="footer-links">
                    <ul>
                        <h4 className="link-heading">Pan<span>Flix</span></h4>
                        <li className="link-item"><a href='/'>About us</a></li>
                        <li className="link-item"><a href='/'>My profile</a></li>
                        <li className="link-item"><a href='/'>Pricing plans</a></li>
                        <li className="link-item"><a href='/'>Contacts</a></li>
                    </ul>
                    <ul>
                        <h4 className="link-heading">Browse</h4>

                        <li className="link-item"><a href='/'>Live Tv</a></li>
                        <li className="link-item"><a href='/'>Live News</a></li>
                        <li className="link-item"><a href='/'>Live Sport</a></li>
                        <li className="link-item"><a href='/'>Streaming Library</a></li>
                    </ul>

                    <ul>
                        <li className="link-item"><a href='/'>Tv Shows</a></li>
                        <li className="link-item"><a href='/'>Movies</a></li>
                        <li className="link-item"><a href='/'>Kids</a></li>
                        <li className="link-item"><a href='/'>Collections</a></li>
                    </ul>

                    <ul>
                        <h4 className="link-heading">Help</h4>
                        <li className="link-item"><a href='/'>Account & Billing</a></li>
                        <li className="link-item"><a href='/'>Plans & Pricing</a></li>
                        <li className="link-item"><a href='/'>Supported devices</a></li>
                        <li className="link-item"><a href='/'>Accessibility</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-copyright">
                <div className="copyright">
                    <p>&copy; copyright 2022 PanFlix</p>
                </div>
                <div className="wrapper">
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>Terms and Condition</a>
                </div>
            </div>
        </footer>
        {/* <!-- !FOOTER SECTION --> */}
    </div>
    </div>
  );
}



export default App;
