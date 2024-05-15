const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({

    name: { type: String },
    config: {
        type: { type: String },
        min_order_item_quantity: { type: Number }
    }
}
);

const Promotion = mongoose.model("Promotion", promotionSchema);

module.exports = Promotion;