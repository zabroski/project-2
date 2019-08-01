import React from 'react';
import './App.css';
import Header  from './component/Header';
import Artist  from './component/Artist';
import Footer from './component/Footer';
import AlbumList  from './component/AlbumList';
import { Route, Link } from "react-router-dom";
import AboutPage from './component/AboutPage';
import ArtistSelector from './component/ArtistSelector';

// import ArtistList from './component/ArtistList';
// import { request } from 'https';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      artist: null,
      albums: []
    };
  }

  /*componentDidMount(){
    let artistName = "coldplay";
    this.loadArtist(artistName);
    this.loadArtistAlbums(artistName);
  } */

  loadArtist = async (artistName) => {
    let url = 'http://theaudiodb.com/api/v1/json/1/search.php?s=' + artistName;

    let req = new Request(url);
    const response = await fetch(req);
    const data = await response.json();

    if(data.artists && data.artists.length >= 1){
      this.setState({
        artist: data.artists[0]
      });
    }

  }

  loadArtistAlbums = async (artistName) => {
    let url = 'http://theaudiodb.com/api/v1/json/1/searchalbum.php?s=' + artistName;

    let req = new Request(url);
    const response = await fetch(req);
    const data = await response.json();

    if(data.album && data.album.length >= 1){
      this.setState({
        albums: data.album
      });
    }
  }

  handleChange = (artistName) => {
    this.loadArtist(artistName);
    this.loadArtistAlbums(artistName);
  }

  renderArtist(){
    return (
      <div> 
            <Artist artist={this.state.artist} />
            <AlbumList albums={this.state.albums} />
      </div>
    );
  }

  renderNoArtist(){
    return (
      <div className="main"> 
           <p className="main-p"> Please choose an artist.</p>
            <div className="main-div"></div>
            <div className="main-div"></div>
            <div className="main-div"></div>
            <div className="main-div"></div>
           
      </div>
    );
  }

  render() {

    return(
    
      <div className="app-container">

            <Header />
            {/* <nav className="nav-container">
              <Link to="/home"> Home </Link>
              <Link to="/about"> About </Link>
              
            </nav> */}
            <Route path="/home" render={ (props) => {
              return (
                <div>
                  <ArtistSelector handleChangeArtist={this.handleChange} />
                  {this.state.artist? this.renderArtist() : this.renderNoArtist()}
                </div>
            ) 
            }}/>

            <Route path="/about" render={(props) =>{
              return <AboutPage />;
            }}/>

            <div className="footer">
              <Footer/>
            </div>

           
      </div>
    )
  }





}

export default App;


 


  