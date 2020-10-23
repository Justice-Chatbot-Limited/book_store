/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */
const express = require('express');
const routes = require('./routes/routes');

const PORT = process.env.PORT || 2716;
const app = express();
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => { console.log(`Server started on http://localhost:${PORT}`); });
