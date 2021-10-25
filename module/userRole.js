module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'user-role', {
            id: {
                type: DataTypes.STRING(64),
                primaryKey: true,
                allowNull: true,
            },
            userId: {
                type: DataTypes.STRING(64),
                allowNull: true,
            },
            roleId: {
                type: DataTypes.STRING(64),
                allowNull: true,
            },
            createdAt: {
                type: DataTypes.DATE,
                field: 'createdAt'
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updatedAt'
            },
        }, {
            timestamps: true
        }
    );
}