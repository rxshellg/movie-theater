const express = require('express');
const Router = express.Router();

// Import controllers
const { getUsers, getOneUser, getShowsWatchedByUser, assignWatchedShowToUser } = require('../controllers/usersController')

Router.get('/', getUsers)
Router.get('/:userId', getOneUser)
Router.get('/:userId/shows', getShowsWatchedByUser)
Router.put('/:userId/shows/:showId', assignWatchedShowToUser)

module.exports = Router;