const express = require('express');
const Router = express.Router();

// Import controllers
const { getShows, getOneShow, getShowsOfGenre, assignShowRating, assignShowStatus, deleteShow } = require('../controllers/showsController')

Router.get('/', getShows);
Router.get('/:showId', getOneShow);
Router.get('/genre/:genre', getShowsOfGenre);
Router.put('/:showId/rating/:rating', assignShowRating);
Router.put('/:showId/status', assignShowStatus);
Router.delete('/:showId', deleteShow);

module.exports = Router;