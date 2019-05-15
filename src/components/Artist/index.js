import React, { Component } from 'react';
import Axios from 'axios';
import AlbumList from './album_list';

const REQ_URL = 'http://localhost:3004/artists/';

class Artist extends Component {

  state = {
    artist:''
  }

  componentDidMount(){
    Axios.get(`${REQ_URL}/${this.props.match.params.artistid}`)
    .then(response => {
      this.setState({ artist: response.data })
      console.log(this.state.artist.cover);
    })
  }

  render(){
    const artist = this.state.artist;

    return(
      <>
        <div className="artist_bio">
          <div className="avatar">
            <span style={{
              background: `url('/images/covers/${artist.cover}.jpg') no-repeat`
            }}></span>
          </div>
          <div className="bio">
            <h3>{artist.name}</h3>
            <div className="bio_text">
              {artist.bio}
            </div>
          </div>
          <AlbumList albumList={artist.albums}/>
        </div>
      </>
    )
  }
}

export default Artist;