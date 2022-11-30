import { Component, Row, Col } from 'react'
import { Container, Carousel, Spinner, Alert } from 'react-bootstrap'
import tile from '../img/media0.jpg'
import tiles from '../img/media1.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const MovieRow = (props) => {
  const [category, setcategory] = useState(props.movieCategory)
  const [type, settype] = useState(props.type)
  const [movies, setmovies] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [isError, setisError] = useState(false)

  const fetchMovies = async () => {
    try {
      let response = await fetch(
        'https://omdbapi.com/?apikey=a7a3e8e8&s=' + category + '&' + type,
      )

      if (response.ok) {
        let movieList = await response.json()

        setmovies(movieList.Search)
        setisLoading(false)
      } else {
        setisError(true)
        setisLoading(false)
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchMovies()
  })

  return (
    <>
      <Container fluid>
        <div className="movie-gallery mt-5">
          <h3>{props.movieCategory}</h3>
          <Carousel controls={false}>
            <Carousel.Item className="d-flex">
              <div className="movie-tiles mr-5">
                {isLoading && (
                  <Spinner
                    animation="border"
                    role="status"
                    variant="primary"
                  ></Spinner>
                )}
                {isError && (
                  <Alert variant="danger">There has been an error!</Alert>
                )}
                {movies.slice(0, 6).map((e) => (
                  <div key={e.imdbID}>
                    <Link to={e.imdbID}>
                      <img
                        src={e.Poster}
                        className="movie-tile"
                        alt={e.Title}
                      />
                    </Link>
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

export default MovieRow
