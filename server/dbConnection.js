const mongoose = require("mongoose");

const connectDb = () => {
    return mongoose.connect(process.env.MONGODB_URI);
}
const disconnectDb = async () => {
    return await mongoose.disconnect();
}

module.exports = {
    connectDb,
    disconnectDb
}