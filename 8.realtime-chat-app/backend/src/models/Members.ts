import { DataTypes } from "sequelize";
import sequelize from "../config/connection";

const Members = sequelize.define("members", {
    member_id: {
        type: DataTypes.STRING(),
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4()
    },
    user_id: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    channel_id: {
        type: DataTypes.STRING(),
        allowNull: false
    }
})

export default Members