import { ReactNode } from 'react'
import { StyledLink } from './styles'

interface LinkProps {
  href: string
  title: string
  icon: {
    iconComponent: ReactNode
    display: 'right' | 'left'
  }
  newTab?: boolean
}

export default function CustomLink({ href, title, icon, newTab }: LinkProps) {
  return (
    <StyledLink
      target={newTab ? '_blank' : undefined}
      to={href}
      iconDisplay={icon.display}
    >
      {icon.iconComponent}
      <p>{title}</p>
    </StyledLink>
  )
}
