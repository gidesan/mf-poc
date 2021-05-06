import { factory, primaryKey } from '@mswjs/data'

export const db = factory({
  plugin: {
    scope: primaryKey(String),
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
}
