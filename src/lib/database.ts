
import mongoose from "mongoose";

let isConnected = false;

export async function connectToDb() {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected.');
        return;
    }

    try {
        await mongoose.connect('mongodb+srv://2cto:jXrBLm9t21SaJeHA@clusterone.ynz2h7p.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOne', {
            dbName: 'ClusterOne'
        })

        isConnected = true;

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB is connected successfully');
        })

        connection.on('error', (error) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running.' + error);

        })
    } catch (error){
        console.log('Something goes wrong', error);
    }
}