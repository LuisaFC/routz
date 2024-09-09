import { Request, Response } from 'express'
import { Destination } from "../../models/Destination";

export async function createDestination(req: Request, res: Response) {
  const {name,city, state, country, locale} = req.body;

  const destination = await Destination.create({
    name, city, state, country, locale
  });

  res.json(destination);
}
