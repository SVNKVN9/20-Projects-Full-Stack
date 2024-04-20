import { DataTypes } from "sequelize";
import sequelize from "../config/connection";
import Members from "./Members";

const Channels = sequelize.define("channels", {
    id: {
        type: DataTypes.STRING(),
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4() 
    },
    name: {
        type: DataTypes.STRING(),
        allowNull: true,
    }
})

Channels.hasMany(Members, {
    foreignKey: { name: 'channel_id' }
})
Members.belongsTo(Channels, {
    foreignKey: { name: 'id' }
})

export default Channels