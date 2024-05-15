
const Event = require("../models/orderModel");


const getEvents = async (req, res) => {
  const event = await Event.find({});
  res.status(200).json(event);
};

const getEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    res.status(200).json({
      _id: event._id,
      video: event.video,
      text: event.text,
      photo: event.photo,
      name: event.name,
      position: event.position
    });
  } else {
    res.status(404);
    throw new Error("event not found");
  }
};



module.exports = { createEvent, getEvents };
