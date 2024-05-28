const {prisma} = require('../db');
const {getOperationsService, saveOperationService} = require("../Services/operationService.js");

// Function to save a new operation
const saveOperationController = async (req, res) => {
  const { hostile_plane, planes } = req.body;
  const result = await saveOperationService(hostile_plane, planes);
  if (result instanceof Error){
    res.status(500).json({ error: 'Server error' });
  }
  else{
    res.status(201).json(result);
  }
};

const getOperationsController = async (req, res) => {
  const { amount } = req.query;
  result = await getOperationsService(amount);
  if (result instanceof Error){
    res.status(500).json({ error: 'Server error' });
  }
  else{
    res.status(201).json({'operations': result});
  }
};

module.exports = {
  saveOperationController,
  getOperationsController
};