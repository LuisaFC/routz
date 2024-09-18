import { Request, Response } from 'express'
import { Route } from '../../models/Route'

export async function deleteRoute(req: Request, res: Response) {
  try {
    const {routeId} = req.params

    await Route.findByIdAndDelete(routeId)

    res.sendStatus(204)

  } catch (error) {
    console.log(error)

    res.sendStatus(500).json({
      error: "Internal server error"
    })
  }
}
