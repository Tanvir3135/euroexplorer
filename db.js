const { Pool } = require('pg');

const pool = new Pool({
    user: 'first_postgresql_8j3d_user',
    host: 'dpg-cohq9nn79t8c73868b4g-a.oregon-postgres.render.com',
    database: 'first_postgresql_8j3d',
    password: 'flC7rB767Vc4jUF72oJYJoBbBwOoj44z',
    port: 5432,
    ssl: true
  });

module.exports = {
    query: (text, params) => pool.query(text, params)
}