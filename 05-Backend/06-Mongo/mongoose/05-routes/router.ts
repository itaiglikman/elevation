import express from "express";
import controller from "../04-controllers/controller";

const router = express.Router();

router.get('/', controller.getPeople);
router.post('/', controller.createPerson);
router.put('/:id', controller.updatePerson);
router.delete('/', controller.deleteAll);

export default router;