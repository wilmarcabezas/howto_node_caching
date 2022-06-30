import {sequelize} from '../databases/database.js';
import { DataTypes } from 'sequelize';

export const testdriver = sequelize.define('testdriver',{
    Id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Name:{
        type:DataTypes.STRING,
    },
    Date:{
        type: DataTypes.STRING,
    }

},{
    timestamps:false,
});
