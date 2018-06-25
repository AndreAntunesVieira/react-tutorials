import { existsSync } from 'fs'
import * as routes from 'routes'

test('Routes on routes.js should exist', () => {
  routes.routes.map(({ page }) => {
    expect(existsSync(`pages/${page}.js`)).toBeTruthy()
  })
})
