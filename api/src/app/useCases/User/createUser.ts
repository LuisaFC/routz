import { Request, Response } from 'express'
import { User } from '../../models/User'

export async function createtUser(req: Request, res: Response){
  try {
    const {name, email, password, favDestinations, myRoutes} = req.body

    const user = await User.create({name, email, password, favDestinations, myRoutes})

    res.sendStatus(201).json(user)
  } catch (error) {
    console.log(error)

    res.sendStatus(500).json({
      error: "Internal server error"
    })
  }

}
