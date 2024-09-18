import { Request, Response } from 'express'
import { Destination } from '../../models/Destination'

export async function deleteDestination(req: Request, res: Response){
  try {
    const {destinationId} = req.params

    await Destination.findByIdAndDelete(destinationId)

    res.sendStatus(204)
  } catch (error) {
    console.log(error)

    res.sendStatus(500).json({
      error: "Internal server error"
    })
  }
}
