fetch('/videos')
  .then(result => result.json())
  .then(json => {
    json.forEach(video => {});
  })
  .catch();
