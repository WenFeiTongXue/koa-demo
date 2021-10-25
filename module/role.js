module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'role', {
            id: {
                type: DataTypes.STRING(64),
                primaryKey: true,
                allowNull: true,
            },
            name: {
                type: DataTypes.STRING,
                field: 'name'
            },
            createdAt: {
                type: DataTypes.DATE,
                field: 'createdAt'
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updatedAt'
            },
            status: {
                type: DataTypes.INTEGER(1),
                field: 'status',
                defaultValue: "1"
            }
        }, {
            timestamps: true
        }
    );
}