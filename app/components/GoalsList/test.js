require('es6-promise').polyfill();
var fetch = require('isomorphic-fetch');

fetch('https://www.reddit.com/search.json?q=subreddit%3Asoccer%2C+site%3Astreamable.com&sort=hot&t=day')
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log('parsed json', json.data.children[0]);
      }).catch(function(ex) {
        console.log('parsing failed', ex);
      });