const {prisma} = require('../db');
const getLast10OperationsService = require("../Services/operationService.js");

// Function to save a new operation
const saveOperation = async (req, res) => {
  const { hostile_plane, planes } = req.body;
  try {
    const operation = await prisma.operation.create({
      data: {
        hostile_plane,
        planes,
      },
    });
    res.status(201).json(operation);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Function to get an operation by ID
const getOperation = async (req, res) => {
  const { id } = req.params;
  try {
    const operation = await operationDB.findUnique({
      where: { id: parseInt(id) },
    });
    if (!operation) {
      return res.status(404).json({ error: 'Operation not found' });
    }
    res.status(200 ).json(operation);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get the last 10 operations with superficial information
const getLast10OperationsController = async (req, res) => {
  try {
    const operations = await getLast10OperationsService();
    res.json(operations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  saveOperation,
  getOperation,
  getLast10OperationsController
};