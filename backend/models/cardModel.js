import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Card = mongoose.model("Card", cardSchema);

export default Card;