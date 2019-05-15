import React, { Component } from 'react';
import Axios from 'axios';

import Banner from '../banner';
import ArtistsList from './artist_list'

const artistUrl = 'http://localhost:3004/artists';

class Home extends Component {

  state = {
    artists: ''
  }

  componentDidMount(){
    Axios.get(artistUrl)
    .then( response => {
      this.setState({ artists: response.data });
    })
  }

  render(){
    console.log(this.state)
    return(
      <>
        <Banner/>
        <ArtistsList allArtists={this.state.artists}/>
      </>
    )
  }
}

export default Home;