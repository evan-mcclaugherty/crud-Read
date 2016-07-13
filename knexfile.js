require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
}
    
