const { User, Show } = require('../models/index');

// Define functions
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        if (users) {
            res.status(200).json(users)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getOneUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await User.findByPk(userId)
        if (user) {
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getShowsWatchedByUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await User.findByPk(userId)
        if (user) {
            res.status(200).json(await user.getShows())
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const assignWatchedShowToUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);
        if (user && show) {
            user.addShow(show)
            res.status(200).json("Watched show recorded successfully")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { getUsers, getOneUser, getShowsWatchedByUser, assignWatchedShowToUser }