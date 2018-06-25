import { Router } from 'routes'

export const redirectTo = (route, res, code) => {
  if (!res) {
    return Router.pushRoute(route)
  }
}
