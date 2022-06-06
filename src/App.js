import './App.css';
import Rows from "./Rows";
import requests from './requests';
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav/>
          <Banner/>
      <Rows title = "Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
      <Rows title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Rows title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Rows title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Rows title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Rows title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Rows title = "Romantic Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Rows title = "Documentary Movies" fetchUrl = {requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
