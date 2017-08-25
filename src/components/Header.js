import React from 'react';

const Header = () => {
  return (
    <section className="section hero is-small is-light">
      <div>
        <div className="container has-text-centered">
          <h1 className="is-size-2">React & Cosmos DB</h1>
          <img src="images/cosmos-db.png" alt="" />
          <h2 className="is-size-3">
            Learn how to build applications with React, Node.js and Cosmos DB
          </h2>
          <br />
          <p className="is-size-5 has-text-white-ter">
            In this course, you'll learn how to set up an Express / React
            project, build a user interface and connect to CosmosDB: the
            lightning fast NoSQL database from Microsoft Azure.
          </p>
          <div className="columns">
            <div className="column">
              <a
                href="https://github.com/burkeholland/react-cosmosdb"
                className="button is-primary is-large"
              >
                Clone Project
              </a>
            </div>
            <div className="column">
              <a
                href="https://medium.com/burke-knows-words/the-greatest-visual-studio-code-setup-in-the-world-22aa30fb8e8f"
                className="button is-primary is-large"
              >
                My VS Code Setup
              </a>
            </div>
            <div className="column">
              <a className="button is-primary is-large">Stay In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
