import { Request, Response } from 'express'
import { Route } from '../../models/Route'

export async function addDestinationToRoute(req: Request, res: Response){
  try {
    const { routeId } = req.params
    const { destination } = req.body

    await Route.findByIdAndUpdate(routeId, {
      $push: {
        destinations: {
          destination: destination
        }
      }
    });

    res.sendStatus(204)

  } catch (error) {
    console.log(error)

    res.sendStatus(500).json({
      error: "Internal server error"
    })
  }
}
