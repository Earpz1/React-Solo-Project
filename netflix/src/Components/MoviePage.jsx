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
        'http://localhost:3001/medias/' + params.imdbID,
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
                <Link to="/"> Return to List...</Link>
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
              <ListGroup.Item>
                <a href={`http://localhost:3001/medias/${movie.imdbID}/pdf`}>
                  Export as PDF
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="pt-5"></ListGroup.Item>
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
