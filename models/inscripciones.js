'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inscripciones = sequelize.define('Inscripciones', {
    estudianteid: DataTypes.INTEGER,
    cursoid: DataTypes.INTEGER
  }, {});
  Inscripciones.associate = function(models) {
    // associations can be defined here
      // Inscripciones.belongsTo(models.Estudiante);
      // Inscripciones.belongsTo(models.Cursos);
  };
  return Inscripciones;
};
