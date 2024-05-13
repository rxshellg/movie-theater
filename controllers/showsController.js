const { User, Show } = require('../models/index');

// Define functions
const getShows = async (req, res) => {
    try {
        const shows = await Show.findAll();
        if (shows) {
            res.status(200).json(shows)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getOneShow = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId)
        if (show) {
            res.status(200).json(show)
        }
    } catch (error) {
        res.status(500).send(error)
    }
    
}

const getShowsOfGenre = async (req, res) => {
    try {
        const genre = req.params.genre
        if (genre) {
            res.status(200).json(await Show.findAll({ where: { 'genre': genre } }))
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const assignShowRating = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);
        const ratingNum = req.params.rating;
        if (show && ratingNum) {
            show.rating = ratingNum;
            await show.save()
            res.status(200).json("Show rated successfully")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const assignShowStatus = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);
        const availableValue = req.body;
        if (show && availableValue) {
            show.available = availableValue.availableValue;
            await show.save();
            res.status(200).json("Show status updated successfully")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteShow = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId)
        if (show) {
            show.destroy();
            res.status(200).send("Show deleted successfully")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { getShows, getOneShow, getShowsOfGenre, assignShowRating, assignShowStatus, deleteShow }