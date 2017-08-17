# Express React Starter

This is a template for using Express and React in the same project. It is based on Create React App.

Read the article: [Introducing Express React Starter](https://medium.com/burke-knows-words/introducing-express-react-starter-b6d299206a3a)

OR...

## Prerequisites
* [create-react-app](https://github.com/facebookincubator/create-react-app)

## Installing

```bash
git clone 'this-repo-url' app-name
cd app-name
npm install
```

## Running The App

The template can be run in development, or in production. For development, use the following workflow.

### Visual Studio Code

A launch configuration is provided for Visual Studio Code. Run the "Launch Browser/Server" process from the Debug pane.

![Launch Browser/Server](http://i.imgur.com/Z2rBglS.png)

This will run both the front-end and backend portions of the application so that all debugging can be done in Visual Studio Code. Check out [this video](https://www.youtube.com/watch?v=eSGNOQgK5oA) for a walkthrough if you need it.

> Note that this requires the [Debugger For Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension to be installed. VS Code should prompt for that when the workspace is first opened.

## OR

If you are not using VS Code (Why would you [not be](https://medium.com/burke-knows-words/the-greatest-visual-studio-code-setup-in-the-world-22aa30fb8e8f)?) you can run it manually from the terminal/command line.

### Run It Manually

#### Start the Express Server

```bash
npm run server
```

#### Start Create React App

In a different terminal tab...

```bash
npm start
```

![Imgur](http://i.imgur.com/f7Nlvx4.png)

The "Welcome to React" is a message that comes from the Express server. 

### What Is Happening Here?

Create React App and the Express server are running on different processes. This is so that React can still use in memory Webpack to do hot reloads really fast.

All AJAX/fetch requests to `/api` are sent back to the Express server which is serving all `/api` routes from the `routes/index.js` file. This is done via a proxy setup in the `package.json` file.

## Building For Production

In production, you want Express to serve up your app.

### Build React App

```bash
npm build
```

Now simply visit the Express app at 'http://localhost:3001' and you will see your app served from the 'build' folder. That's all there is to it!
