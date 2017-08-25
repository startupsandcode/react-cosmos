import React, { Component } from 'react';
import './App.css';
import Video from './components/Video';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = { videos: [] };
  }

  componentDidMount() {
    fetch('/api/videos')
      .then(result => {
        return result.json();
      })
      .then(json => {
        let videos = json.items.map((video, index) => {
          let details = video.snippet;

          // pull out the order number from the title
          let order = details.title.match(/Part\s*(.*?)\s*:/);

          return {
            order: order ? order[1] : 9999,
            id: details.resourceId.videoId,
            title: details.title,
            description: details.description
          };
        });

        // sort videos by order field
        videos = videos.sort((a, b) => {
          return a.order - b.order;
        });

        this.setState({ videos: videos });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <section className="section">
          <div className="columns" />
          {this.state.videos.map((video, index) => {
            // if this is an even number video, render it and the one
            // before it inside of a "columns" tag
            return index % 2 ? this.renderVideos(index) : '';
          })}
        </section>
      </div>
    );
  }

  renderVideos(index) {
    // get two videos, the current index and previous item
    let vids = [this.state.videos[index - 1], this.state.videos[index]];

    return (
      <div className="columns" key={index}>
        {vids.map(vid => {
          return (
            <Video
              key={vid.id}
              id={vid.id}
              title={vid.title}
              description={vid.description}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
