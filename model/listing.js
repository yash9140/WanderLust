const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: { 
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-group-of-people-walking-up-a-hill-near-the-ocean-3x606vFGNXs",
        set: (v) => v === ""?"https://unsplash.com/photos/a-group-of-people-walking-up-a-hill-near-the-ocean-3x606vFGNXs" : v,
    },
    price: String,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ]
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;