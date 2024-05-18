const operationRepository = require("../Repositories/operationRepository.js")

// Get the last 10 operations with superficial information
const getLast10Operations = async () => {
  return await operationRepository.getLast10Operations();
};

export { getLast10Operations };