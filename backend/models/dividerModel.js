import mongoose from "mongoose";

const dividerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Divider = mongoose.model("Divider", dividerSchema);

export default Divider;
