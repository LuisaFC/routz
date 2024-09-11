import { Request, Response } from 'express'
import { Destination } from "../../models/Destination";

export async function createDestination(req: Request, res: Response) {
  try {
    const {name,city, state, country, locale} = req.body;

    if(!name || !city || !state || !country || !locale){
      return res.status(400).json({
        error: 'Missing destination information'
      })
    }

    const destination = await Destination.create({
      name, city, state, country, locale
    });
  res.json(destination);
  } catch (error) {
    console.log(error)

    res.sendStatus(500).json({
      error: "Internal server error"
    })
  }
}
