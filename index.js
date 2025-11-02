import mongoose from "mongoose";

const mongoConnect = async (Url) => {
    try {
        await mongoose.connect(Url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect Db');
    } catch (error) {
        console.log('MongoDB connection error :', error.message);
    }
}

const mongoKit = (Collection, Schema) => {
    const userSchema = new mongoose.Schema(Schema);
    const model = mongoose.model(Collection, userSchema);

    return model;
}

export default { mongoConnect, mongoKit };