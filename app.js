/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */
const express = require('express');

const PORT = process.env.PORT || 2716;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Hello World'));

app.listen(PORT, () => { console.log(`Server started on http://localhost:${PORT}`); });
