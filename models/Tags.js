

module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define(("Tags"), {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:true,
      }
    }
  })
  return Tags;
}