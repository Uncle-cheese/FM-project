const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'FM_Database',
    password:'19970503Mn',
    port:'5432'
})

module.exports = pool;