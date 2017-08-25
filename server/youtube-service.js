const env = require('./env/environment');
const request = require('request');

const baseAPI =
  'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet';

const youtubeService = {
  get(req, res) {
    request.get(
      `${baseAPI}&maxResults=${env.maxResults}&playlistId=${env.playlistId}&key=${env.key}`,
      (error, response, body) => {
        res.send(body);
      }
    );
  }
};

module.exports = youtubeService;
