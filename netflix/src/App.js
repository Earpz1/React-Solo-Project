import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import NavigationBar from './Components/NavigationBar'
import TvShows from './Components/Categories/TvShows'
import Movies from './Components/Categories/Movies'
import Footer from './Components/Footer'
import MoviePage from './Components/MoviePage'
import Home from './Components/Categories/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <div className="content px-4 mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:imdbID" element={<MoviePage />} />
            <Route path="/tvShows" element={<TvShows />} />
            <Route path="/movies/" element={<Movies />} />
            <Route path="/movies/:imdbID" element={<MoviePage />} />
            <Route path="/tvShows/:imdbID" element={<MoviePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
