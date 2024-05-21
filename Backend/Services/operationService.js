const getLast10Operations = require("../Repositories/operationRepository.js")

// Get the last 10 operations with superficial information
const getLast10OperationsService = async () => {
  return await getLast10Operations();
};

module.exports = { getLast10OperationsService };