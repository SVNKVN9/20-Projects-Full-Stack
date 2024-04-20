import dotenv from 'dotenv'
dotenv.config()

export default {
    PORT: process.env.PORT,
    database: {
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME
    }
}