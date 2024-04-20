import { Sequelize } from "sequelize";
import env from "./env";

const sequelize = new Sequelize({
    host: env.database.host,
    username: env.database.username,
    password: env.database.password,
    database: env.database.name,
    dialect: 'mysql',
    logging: true,
})

const run = async () => {
    try {
        await sequelize.authenticate()

        console.log('connected')

        await sequelize.sync({ alter: true }).catch(console.log)

        console.log('All Models synced succesfully:');
    } catch (err) {
        console.log(err)
    }
}

run()

export default sequelize