module.exports = {
  up: (queryInterface, { DataTypes }) => {
    // logic for transforming into the new state

    return queryInterface.createTable('atendimentos', {
      paciente_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Pacientes,
          key: "id",
        },
      },
      psicologo_id: {
        type: DataTypes.INTEGER,
        references: {
          tableName: 'psicologo',
          key: "id",
        },
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('atendimentos')
  }
}