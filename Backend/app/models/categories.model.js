module.exports = (sequelize, Sequelize) => {
  const category = sequelize.define(
    "categories",
    {
      categoryId: {
        field: "categoryId",
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      categoryName: {
        field: "categoryName",
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      data: {
        type: Sequelize.BLOB("long"),
      },
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false,
      underscored: true,
    }
  );

  return category;
};
