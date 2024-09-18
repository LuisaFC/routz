import { Request, Response } from 'express'
import { Route } from '../../models/Route'

export async function listRoutes(req: Request, res: Response) {
  try {
    const routes = await Route.find().populate('destinations.destination')

    res.status(200).json(routes)

  } catch (error) {
    console.log(error)

    res.sendStatus(500).json({
      error: "Internal server error"
    })
  }
}
