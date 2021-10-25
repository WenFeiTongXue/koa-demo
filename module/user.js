module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'user', {
            id: {
                type: DataTypes.STRING(64),
                primaryKey: true,
                allowNull: true,
            },
            mobileNo: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'mobileNo'
            },
            name: {
                type: DataTypes.STRING,
                field: 'name'
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'password'
            },
            age: {
                type: DataTypes.INTEGER,
                field: 'age'
            },
            sex: {
                type: DataTypes.INTEGER,
                field: 'sex'
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