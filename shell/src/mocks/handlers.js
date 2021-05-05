import { rest } from 'msw';
import { db } from './db';

// seeding
db.plugin.create({
  url: 'http://localhost:3002/remoteEntry.js',
  scope: 'app2',
  module: './Widget',
});

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




// {
//   url: 'http://localhost:3002/remoteEntry.js',
//   scope: 'app2',
//   module: './Widget',          
// },