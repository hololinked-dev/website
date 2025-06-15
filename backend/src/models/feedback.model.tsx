import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db'; // Adjust the import path to your sequelize instance

export class Feedback extends Model {
    public id!: number | undefined;
    public name!: string;
    public email!: string;
    public text!: string;
}

Feedback.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Feedback',
        tableName: 'feedbacks',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true,
        indexes: [
            {
                unique: true,
                fields: ['id'],
            },
        ],
    }
);

Feedback.sync({ alter: true })
    .then(() => {
        console.log('Feedback table created or updated successfully.');
    })
    .catch((error) => {
        console.error('Error creating or updating Feedback table:', error);
    });