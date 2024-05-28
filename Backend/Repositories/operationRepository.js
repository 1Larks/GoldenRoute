const {prisma} = require("../db.js");

const saveOperation = async(hostile_plane, planes) => {
  try {
    const operation = await prisma.operation.create({
      data: {
        hostile_plane,
        planes,
      },
    });
    return operation
  } catch (err) {
    console.error(err.message);
    return err;
  }
}

const getOperations = async (amount) => {
  
  // Convert limit to a number
  const numOperations = parseInt(amount, 10) || 10; // Default to 10 if limit is not provided

  try {
    const operations = await prisma.operation.findMany({
      take: numOperations,
      
    });
    return operations
  } catch (error) {
    console.error(error.message);
    
  }
};

module.exports = {saveOperation, getOperations};