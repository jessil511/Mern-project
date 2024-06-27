import { Reservation } from '../models/reservation.js';

export const sendReservation = async (req, res, next) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ success: true, data: reservation });
  } catch (error) {
    next(error); // Use next() to pass the error to the error handling middleware
  }
};
