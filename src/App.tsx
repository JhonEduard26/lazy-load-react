import { Route, Switch } from 'wouter'
import { css } from '../styled-system/css'

import { Navigation } from './Navigation'
import { routes } from './routes'
import { Suspense } from 'react'

export default function App () {
  return (
    <div className={css({ display: 'flex' })}>
      <Navigation />

      <Switch>
        <Suspense fallback='Loading...'>
          {
          routes.map(({ component, href, path }) => (
            <Route key={path} path={href} component={component} />
          ))
          }
        </Suspense>
        <Route>
          404 Not Found!
        </Route>

      </Switch>
    </div>
  )
}
