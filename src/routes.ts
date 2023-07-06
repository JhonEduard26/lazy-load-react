import { LazyExoticComponent, lazy } from 'react'

type JSXComponent = () => JSX.Element

interface Route {
  href: string
  path: string
  component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const Lazy1 = lazy(() => import('./lazy/pages/Lazy1'))
const Lazy2 = lazy(() => import('./lazy/pages/Lazy2'))
const Lazy3 = lazy(() => import('./lazy/pages/Lazy3'))

export const routes: Route[] = [
  {
    href: '/lazy1',
    path: 'lazy1',
    component: Lazy1
  },
  {
    href: '/lazy2',
    path: 'lazy2',
    component: Lazy2
  },
  {
    href: '/lazy3',
    path: 'lazy3',
    component: Lazy3
  }
]
