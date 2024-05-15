const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
}, {
    timestamps: true
}
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;