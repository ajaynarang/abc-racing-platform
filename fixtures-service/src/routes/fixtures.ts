import express from 'express';
import { getFixtures, getFixtureById } from '../controllers/fixtureController';

const router = express.Router();

router.get('/', getFixtures);
router.get('/:id', getFixtureById);

export default router;