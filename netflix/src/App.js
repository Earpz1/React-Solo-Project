import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import NavigationBar from './Components/NavigationBar'
import MovieRow from './Components/MovieRow'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="content px-4">
        <h3 className="mt-5">TV Shows</h3>
        <MovieRow movieCategory="Harry Potter" />
        <MovieRow movieCategory="Saw" />
        <MovieRow movieCategory="Lord of the Rings" />
        <MovieRow movieCategory="Shrek" />
        <MovieRow movieCategory="Toy Story" />
      </div>
      <Footer />
    </div>
  )
}

export default App
