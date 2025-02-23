const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async(req, res) => {
    const city = req.query.city || 'Almaty';
    const API_KEY = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        res.render('weather', { weather: response.data });
    } catch (error) {
        res.render('weather', { weather: null, error: 'Ошибка получения данных' });
    }
});

module.exports = router;