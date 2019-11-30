import React from 'react';
import YouTube from 'react-youtube';
 
class YoutubePlayer extends React.Component {
  render() {
    const opts = {
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="sTDauTIdNsk"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YoutubePlayer