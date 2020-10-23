/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World'));

module.exports = router;
