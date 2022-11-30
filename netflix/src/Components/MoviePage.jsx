import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ListGroup, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MoviePage = () => {
  const params = useParams()
  const [movie, setmovie] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const fetchMovie = async () => {
    try {
      let response = await fetch(
        'https://omdbapi.com/?apikey=a7a3e8e8&i=' + params.imdbID,
      )

      if (response.ok) {
        let movieDetails = await response.json()

        setmovie(movieDetails)

        setisLoading(true)
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchMovie()
  }, [])

  return (
    isLoading && (
      <Container fluid className="moviePage">
        <Row>
          <Col lg={4}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie-image"
            ></img>
          </Col>
          <Col lg={6}>
            <ListGroup>
              <ListGroup.Item>
                <h2>
                  {movie.Title} - {movie.Year}{' '}
                </h2>
                <Link to="/movies"> Return to List...</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Released:</b> {movie.Released}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Runtime:</b> {movie.Runtime}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Actors:</b> {movie.Actors}
              </ListGroup.Item>
              <ListGroup.Item className="pt-5">{movie.Plot}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={2}>
            <ListGroup>
              <ListGroup.Item>
                <h2>Ratings</h2>
              </ListGroup.Item>
              {movie.Ratings.map((rating) => (
                <ListGroup.Item key={rating.Source}>
                  {rating.Source} - {rating.Value}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  )
}

export default MoviePage
