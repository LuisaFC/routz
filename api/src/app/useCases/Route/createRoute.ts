import { Request, Response } from 'express'
import { Route } from '../../models/Route'

export async function createRoute(req: Request, res: Response){
  try {
    const {name, destination, user} = req.body;

    const route = await Route.create({name, destination, user})

    res.status(201).json(route)

  } catch (error) {
    console.log(error)

    res.sendStatus(500).json({
      error: "Internal server error"
    })
  }
}
