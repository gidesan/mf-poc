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
      id: 'feature1',
      installed: true,
      url: 'http://localhost:3002/remoteEntry.js',
      scope: 'feature1',
      module: './Widget',
    },
    {
      id: 'feature2',
      installed: false,
      url: 'http://localhost:3003/remoteEntry.js',
      scope: 'feature2',
      module: './Widget',
    },
  ].forEach((module) => db.module.create(module));
};
