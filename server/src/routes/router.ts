import { Router } from 'express';

// importa as rotas
import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';

const router = Router();

router.use('/user', userRoutes);
router.use('/', homeRoutes);

export default router;