import express, { Request, Response } from 'express'
import storeModel from '../models/storeModel';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const store = storeModel.getAll()
    res.status(200).json({ store });
})
router.get('/priceCheck/:name', (req: Request, res: Response) => {
    const name = req.params.name;
    const item = storeModel.getStoreByName(name);
    if (!item) res.status(400).json({ 'price': null });
    res.status(200).json({ 'price': item.price });
})

router.get('/buy/:name', (req: Request, res: Response) => {
    const name = req.params.name;
    const item = storeModel.reduceInventoryByName(name);
    if (!item) res.status(400).json({ error: 'resource not found' });
    res.status(200).json({ item });
})

router.get('/sale', (req: Request, res: Response) => {
    const query = req.query.admin as string;
    const store = storeModel.sale(query);
    res.json(store);
})

export default router;