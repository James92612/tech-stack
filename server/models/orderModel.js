const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer_id:
        [
            {
                type: mongoose.Schema.ObjectId, ref: "Customer"
            }
        ]
    ,
    year: {
        type: Number
    },
    month: {
        type: Number
    },
    day: {
        type: Number
    },
    items: [{
        _id: mongoose.Schema.Types.ObjectId,
        price_usd: { type: Number },
        category: { type: String },
    }]
}
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;