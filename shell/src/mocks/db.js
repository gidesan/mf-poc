import { factory, primaryKey } from '@mswjs/data'

export const db = factory({
  plugin: {
    scope: primaryKey(String),
    url: () => '',
    module: () => '',
  },
  module: {
    id: primaryKey(String),
    installed: () => false,
    scope: () => '',
    url: () => '',
    module: () => '',
  },  
})

export const seed = () => {
  db.plugin.create({
    url: 'http://localhost:3002/remoteEntry.js',
    scope: 'app2',
    module: './Widget',
  });

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
      scope: 'app2',
      module: './Widget',
    },
  ].forEach((module) => db.module.create(module));

}
