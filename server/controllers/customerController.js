
const Publication = require("../models/customerModel");

const createCustomer = async (req, res) => {
  const publication = await Publication.create({});
  res.status(200).json(publication);
}

const getCustomers = async (req, res) => {
  const publication = await Publication.find({});
  res.status(200).json(publication);
};

const getCustomerById = async (req, res) => {
  const publication = await Publication.findById(req.params.id);

  if (publication) {
    res.status(200).json({
      _id: publication._id,
      title: publication.title,
      description: publication.description,

    });
  } else {
    res.status(404);
    throw new Error("Publication not found");
  }
};

module.exports = { createCustomer, getCustomers, getCustomerById };
