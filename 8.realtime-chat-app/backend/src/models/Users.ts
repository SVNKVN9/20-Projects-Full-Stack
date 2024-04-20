import { DataTypes } from "sequelize";
import sequelize from "../config/connection";
import Members from "./Members";

const Users = sequelize.define("users", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

Users.hasMany(Members, {
    foreignKey: { name: 'user_id' }
})
Members.belongsTo(Users, {
    foreignKey: { name: 'id' }
})

export default Users