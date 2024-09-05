const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'db.hrgenie.xyz',
  database: 'demo-students',
  password: 'Asdfgh@11',
  port: '5432',
})

module.exports = pool
