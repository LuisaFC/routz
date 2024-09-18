import { Router } from 'express'
import { listDestionations } from './app/useCases/Destination/listDestinations';
import { createDestination } from './app/useCases/Destination/createDestination';
import { listRoutes } from './app/useCases/Route/listRoutes';
import { createRoute } from './app/useCases/Route/createRoute';
import { deleteDestination } from './app/useCases/Destination/deleteDestination';
import { deleteRoute } from './app/useCases/Route/deleteRoute';


export const router = Router();

//List Destination
router.get('/destinations', listDestionations)

//Create Destination
router.post('/destinations', createDestination)

//delete Destination
router.delete('/destinations/:destinationId', deleteDestination)

//Create Destination by country/city/name/sttate

//List Route
router.get('/routes', listRoutes)

//Create Route
router.post('/routes', createRoute)

//List Route by name

//delete route
router.delete('/routes/:routeId', deleteRoute)

//create User

// List users

//List fav destinations

//List fav routes

//delete user
