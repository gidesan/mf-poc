import { rest } from 'msw';
import { db, seed } from './db';

seed();

export const handlers = [
  rest.post('/plugins', (req, res, ctx) => {
    const plugin = db.plugin.create(req.body);
    return res(ctx.json(plugin));
  }),

  rest.get('/plugins', (req, res, ctx) => {
    const plugins = db.plugin.getAll();
    return res(ctx.json(plugins));
  }),
];