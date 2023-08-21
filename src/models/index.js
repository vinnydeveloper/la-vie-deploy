const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

Pacientes.belongsToMany(Psicologos, {
  foreignKey: "paciente_id",
  through: Atendimentos,
});

Psicologos.belongsToMany(Pacientes, {
  foreignKey: "psicologo_id",
  through: Atendimentos,
});

Atendimentos.belongsTo(Pacientes, { foreignKey: "paciente_id" });
Atendimentos.belongsTo(Psicologos, { foreignKey: "psicologo_id" });

module.exports = {
  Atendimentos,
  Pacientes,
  Psicologos,
};
