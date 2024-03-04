const express = require('express')
const Router = require('./routes')
require('dotenv').config()
const i18nMiddleware = require('./i18n/i18n.js')
const app = express()
const port = process.env.PORT || 4000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(i18nMiddleware);

app.use(Router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))