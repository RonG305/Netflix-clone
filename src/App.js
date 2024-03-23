import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      <div className=' series__rows'>
        <Row title="TRENDING TV SHOWS" url={requests.trendingTVShows}/>
        <Row title="Popular TV shows" url={requests.trendingTVShowsPopular}/>
        <Row title="TV shows airing Today" url={requests.trendingTVShowsAiringToday}/>
        <Row title="TV shows on air" url={requests.trendingTVShowsOnAir}/>
        <Row title="Top reated TV shows" url={requests.trendingTVShowsTopRated}/>
        <Row title="Trending Movies" url={requests.trendingMovies}/> 
      </div>
     

    </div>
  );
}

export default App;
