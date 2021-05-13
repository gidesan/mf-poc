import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  module: {
    id: primaryKey(String),
    installed: () => false,
    scope: () => '',
    url: () => '',
    module: () => '',
  },
});

export const seed = () => {
  [
    {
      id: 'app2',
      installed: true,
      url: 'http://localhost:3002/remoteEntry.js',
      scope: 'app2',
      module: './Widget',
    },
    {
      id: 'app3',
      installed: false,
      url: 'http://localhost:3003/remoteEntry.js',
      scope: 'app3',
      module: './Widget',
    },
  ].forEach((module) => db.module.create(module));
};
