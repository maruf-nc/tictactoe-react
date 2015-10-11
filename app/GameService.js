'use strict';

import axios from 'axios';
const API_URL = '/api/games';

var GameService = {
  query() {
    return axios.get(API_URL).then((response) => response.data);
  },
  save(game) {
    return axios.post(API_URL, game);
  }
};

export default GameService;