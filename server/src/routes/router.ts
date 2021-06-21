import { Router } from 'express';

// importa as rotas
import homeRoutes from './homeRoutes';
import postRoutes from './postRoutes';
import userRoutes from './userRoutes'


const router = Router();

router.use('/', homeRoutes);
router.use('/post', postRoutes);
router.use('/user', userRoutes);


export default router;