const knex = require('knex');
const knexfile = require('../config/knexfile');

const db = knex(knexfile.development);  // Connect to the development database

module.exports = db;