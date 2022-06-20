const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        x = bcrypt.compareSync(loginPw, this.password);
        console.log("this is what is being returned: ", x)
        return x;
    }
}


User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        }, 
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [16],
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                updatedUserData.password = await bycrpt.hash(newUserData.password,10);
                return updatedUserData
            },
            beforeUpdate: async(updatedUserData) => {
                updatedUserData.password = await bycrypt.hash(updatedUserData.password,10);
                return updatedUserData
            }
        },
    },
   
)


module.exports = User
