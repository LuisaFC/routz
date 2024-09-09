import { Router } from 'express'
import { listDestionations } from './app/useCases/Destination/ListDestinations';
import { createDestination } from './app/useCases/Destination/CreateDestination';

export const router = Router();

//List Destination
router.get('/destinations', listDestionations)

//Create Destination
router.post('/destinations', createDestination)

//Create Destination by country/city/name/sttate

//List Route

//List Route by name

//Create Route

//delete route

//create

//List fav destinations

//List fav routes

//delete user
