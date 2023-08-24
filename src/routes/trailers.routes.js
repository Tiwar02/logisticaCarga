import { Router } from "express";
import { getTrailers, getTrailer, createTrailer, updateTrailer, deleteTrailer } from "../controllers/trailers.controller.js";

const router = Router()


router.get('/trailers', getTrailers)
router.get('/trailers/:id', getTrailer)
router.post('/trailers', createTrailer)
router.patch('/trailers/:id', updateTrailer)
router.delete('/trailers/:id', deleteTrailer)


export default router