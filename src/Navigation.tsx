import { Link } from 'wouter'

import { css } from '../styled-system/css'
import { routes } from './routes'

const styles = css({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '36px',
  w: '1/6',
  h: 'screen',
  p: '8px 12px',
  bg: 'gray.800',
  color: 'white',
  '& img': {
    w: 'full',
    p: '32px'
  },
  '& li': {
    mb: '6px',
    _hover: {
      color: 'gray.400'
    }
  }
})

export const Navigation = () => {
  return (
    <div className={styles}>
      <img src='src/assets/perezoso.png' alt='Perezoso' />
      <ul>
        {
          routes.map(({ path, href }) => (
            <li key={path}>
              <Link href={href}>
                {path}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
