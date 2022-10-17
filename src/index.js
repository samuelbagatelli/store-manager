const express = require('express');
const app = require('./app');
const productsRouter = require('./routes/productsRouter');
const salesRouter = require('./routes/salesRouter');

app.use(express.json());

app.use('/products', productsRouter);
app.use('/sales', salesRouter);