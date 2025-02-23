require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const weatherRoutes = require('./routes/weather');
const todoRoutes = require('./routes/todo');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);
app.use('/projects', projectRoutes);
app.use('/weather', weatherRoutes);
app.use('/todo', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Сервер запущен на порту ${PORT}`));