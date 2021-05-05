import { factory, primaryKey } from '@mswjs/data'

export const db = factory({
  plugin: {
    scope: primaryKey(String),
    url: () => '',
    module: () => '',
  },
})