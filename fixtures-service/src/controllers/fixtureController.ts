import { Request, Response } from 'express';
import { logger } from '../config/logger';
import { FixtureService } from '../services/fixture-service';

const fixtureService = new FixtureService();

export const getFixtures = async (req: Request, res: Response): Promise<void> => {
  try {
    const fixtures = await fixtureService.getAllFixtures();
    res.json(fixtures);
  } catch (error) {
    logger.error('Error fetching fixtures:', error);
    res.status(500).json({ error: 'Failed to fetch fixtures' });
  }
};

export const getFixtureById = async (req: Request, res: Response): Promise<void> => {
  try {
    const fixture = await fixtureService.getFixtureById(req.params.id);
    if (!fixture) {
      res.status(404).json({ error: 'Fixture not found' });
      return;
    }
    res.json(fixture);
  } catch (error) {
    logger.error('Error fetching fixture:', error);
    res.status(500).json({ error: 'Failed to fetch fixture' });
  }
};
