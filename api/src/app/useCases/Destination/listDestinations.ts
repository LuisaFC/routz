import { Request, Response } from 'express'
import { Destination } from '../../models/Destination'

export async function listDestionations(req: Request, res: Response)  {
 try {
  const destinations = await Destination.find();

  res.status(200).json(destinations);
 } catch (error) {
  console.log(error)

  res.sendStatus(500).json({
    error: "Internal server error"
  })
 }
}
