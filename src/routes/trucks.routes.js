import { Router } from "express";
import { getTrucks, createTrucks, updateTrucks, deleteTrucks, getTruck } from "../controllers/trucks.controller.js";

const router = Router()


router.get('/trucks', getTrucks)
router.get('/trucks/:id', getTruck)
router.post('/trucks', createTrucks)
router.patch('/trucks/:id', updateTrucks)
router.delete('/trucks/:id', deleteTrucks)


export default router