import React, { Component } from 'react';
import './App.css';
import Video from './components/Video';

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
          let order = details.title.match(/Part\s*(.*?)\s*:/);

          return {
            order: order ? order[1] : 9999,
            id: details.resourceId.videoId,
            title: details.title,
            description: details.description
          };
        });

        // sort videos by title
        videos = videos.sort((a, b) => {
          return a.order - b.order;
        });

        this.setState({ videos: videos.sort() });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <section className="section hero is-small is-light">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src="images/cosmos-db.png" alt="" />
              <h1 className="title">React Cosmos DB</h1>
              <h2 className="is-size-3">
                Learn how to build applications with React, Node.js and Cosmos
                DB
              </h2>
              <br />
              <p className="is-size-5 has-text-white-ter">
                In this course, you'll learn how to set up an Express / React
                project, build a user interface and connect to CosmosDB: the
                lightning fast NoSQL database from Microsoft Azure.
              </p>
            </div>
          </div>
        </section>
        <section className="section is-medium">
          <div className="columns" />
          {this.state.videos.map((video, index) => {
            return index % 2 ? this.renderVideos(index) : '';
          })}
        </section>
      </div>
    );
  }

  renderVideos(index) {
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
