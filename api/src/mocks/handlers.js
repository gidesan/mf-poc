  import { rest } from 'msw';
import { db, seed } from './db';

seed();

export const handlers = [
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

  rest.get('/api/modules/id/:id', (req, res, ctx) => {
    const { id } = req.params;

    const module = db.module.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });

    if (!module || !module.installed) {
      return res(ctx.json({}));  
    }
    return res(ctx.json(module));
  }),
];
