import React from 'react';

const Video = props => {
  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-2by3">
            <div className="videoWrapper">
              <iframe
                title={props.title}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${props.id}`}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="images/headshot-96.png" alt="Burke Holland" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Burke Holland</p>
              <p className="subtitle is-6">@burkeholland</p>
            </div>
          </div>
          <div className="content">
            <h1 className="title">
              {props.title}
            </h1>
            <p>
              {props.description}
            </p>
            <br />
            <small>
              {props.date}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
