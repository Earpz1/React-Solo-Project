import MovieRow from '../MovieRow'

const Home = () => {
  return (
    <>
      <MovieRow movieCategory="movies" />
      <MovieRow movieCategory="comedy" />
      <MovieRow movieCategory="documentary" />
    </>
  )
}
export default Home
