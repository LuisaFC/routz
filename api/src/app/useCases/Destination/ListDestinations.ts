import { Request, Response } from 'express'
import { Destination } from '../../models/Destination'

export async function listDestionations(req: Request, res: Response)  {
  console.log('teste')
  const destinations = await Destination.find();

  res.json(destinations);
}
