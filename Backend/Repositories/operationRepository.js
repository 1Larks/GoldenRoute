import prisma from "../db.js";

// Get the last 10 operations with superficial information
const getLast10Operations = async () => {
  return await prisma.operation.findMany({
    take: 10,
    orderBy: { created_at: 'desc' }, // Assuming 'created_at' is the timestamp of the operation
  });
};
module.exports = {getLast10Operations};