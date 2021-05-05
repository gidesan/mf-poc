import { rest } from 'msw';

export const handlers = [
  rest.get('/plugins', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          url: 'http://localhost:3002/remoteEntry.js',
          scope: 'app2',
          module: './Widget',          
        },
        {
          url: 'http://localhost:3003/remoteEntry.js',
          scope: 'app3',
          module: './Widget',          
        },        
      ])
    );
  }),
];
