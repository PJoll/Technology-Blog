const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date_posted: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        comment_content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',

    }
);



module.exports = Comment