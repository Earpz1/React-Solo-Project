import { Component, Row, Col } from 'react'
import { Container, Carousel, Spinner, Alert } from 'react-bootstrap'
import tile from '../img/media0.jpg'
import tiles from '../img/media1.jpg'

class MovieRow extends Component {
  state = {
    category: this.props.movieCategory,
    movies: [],
    isLoading: true,
    isError: false,
  }

  spliceIntoChunks(arr, chunkSize) {
    const res = []
    while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize)
      res.push(chunk)
    }
    this.setState({
      splitArray: res,
    })
  }

  fetchMovies = async () => {
    try {
      let response = await fetch(
        'https://omdbapi.com/?apikey=a7a3e8e8&s=' + this.state.category,
      )

      if (response.ok) {
        let movieList = await response.json()

        this.setState({
          movies: movieList.Search,
          splitArray: movieList.Search,
        })
        this.setState({
          isLoading: false,
        })
      } else {
        this.setState({
          isError: true,
          isLoading: false,
        })
      }
    } catch (error) {}
  }

  componentDidMount() {
    this.fetchMovies()
  }

  render() {
    return (
      <>
        <Container fluid>
          <div className="movie-gallery mt-5">
            <h5>{this.props.movieCategory}</h5>
            <Carousel controls={false}>
              <Carousel.Item className="d-flex">
                <div className="movie-tiles mr-5">
                  {this.state.isLoading && (
                    <Spinner
                      animation="border"
                      role="status"
                      variant="primary"
                    ></Spinner>
                  )}
                  {this.state.isError && (
                    <Alert variant="danger">There has been an error!</Alert>
                  )}
                  {this.state.movies.slice(0, 6).map((e) => (
                    <div key={e.imdbID}>
                      <img
                        src={e.Poster}
                        className="movie-tile"
                        alt={e.Title}
                      />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </Container>
      </>
    )
  }
}

export default MovieRow
