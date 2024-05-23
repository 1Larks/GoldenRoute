const {getOperations, saveOperation} = require("../Repositories/operationRepository.js")

const saveOperationService = async (hostile_plane, planes) => {
  return await saveOperation(hostile_plane, planes);
}

const getOperationsService = async(amount) => {
  return await getOperations(amount);
} 

module.exports = { getOperationsService, saveOperationService };