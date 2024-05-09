import {model, models, Schema} from "mongoose";

const RequestChocolateSchema = new Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    location: {
        type: String
    },
    phone: {
        type: String
    },
    date: {
        type: String
    },
    typeOfChocolate: {
        type: String
    },
    time: {
        type: String
    }
})

const RequestChocolate = models.RequestChocolate || model("RequestChocolate", RequestChocolateSchema);

export default RequestChocolate;