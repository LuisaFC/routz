import { Router } from 'express'
import { listDestionations } from './app/useCases/Destination/listDestinations';
import { createDestination } from './app/useCases/Destination/createDestination';
import { listRoutes } from './app/useCases/Route/listRoutes';
import { createRoute } from './app/useCases/Route/createRoute';
import { createtUser } from './app/useCases/User/createUser';
import { listUsers } from './app/useCases/User/listUser';


export const router = Router();

//List Destination
router.get('/destinations', listDestionations)

//Create Destination
router.post('/destinations', createDestination)

//Create Destination by country/city/name/sttate

//List Route
router.get('/routes', listRoutes)

//Create Route
router.post('/routes', createRoute)

//List Route by name

//delete route

//create User
router.post('/users', createtUser)

// List users
router.get('/users', listUsers)

//List fav destinations

//List fav routes

//delete user
