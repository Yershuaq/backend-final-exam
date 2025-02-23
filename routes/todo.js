const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

router.get('/', async(req, res) => {
    const tasks = await Task.find();
    res.render('todo', { tasks });
});

router.post('/add', async(req, res) => {
    const task = new Task({ title: req.body.title });
    await task.save();
    res.redirect('/todo');
});

router.post('/delete/:id', async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/todo');
});

module.exports = router;