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

  rest.get('/api/modules/all', (req, res, ctx) => {
    const modules = db.module.getAll();
    return res(ctx.json(modules));
  }),

  rest.get('/api/modules/install/:id', (req, res, ctx) => {
    const { id } = req.params;
    const updatedModule = db.module.update({
      where: {
        id: {
          equals: id,
        },
      },
      data: {
        installed: true,
      },
    })        
    return res(ctx.json(updatedModule));
  }),  

  rest.get('/api/modules/uninstall/:id', (req, res, ctx) => {
    const { id } = req.params;
    const updatedModule = db.module.update({
      where: {
        id: {
          equals: id,
        },
      },
      data: {
        installed: false,
      },
    })        
    return res(ctx.json(updatedModule));
  }),   

  rest.get('/api/modules/installed', (req, res, ctx) => {
    const modules = db.module.findMany({
      where: {
        installed: {
          equals: true,
        },
      },
    });
    return res(ctx.json(modules));
  }),

  rest.get('/api/modules/:id', (req, res, ctx) => {
    const { id } = req.params;

    const module = db.module.findMany({
      where: {
        id: {
          equals: id,
        },
      },
    });

    if (!module || !module.installed) {
      return res(ctx.json({}));  
    }
    return res(ctx.json(modules));
  }),
];
