import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface StyledLinkProps {
  iconDisplay: 'right' | 'left'
  newTab?: boolean
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${(props) => props.theme.blue};
  font-weight: 600;
  font-size: 12px;
  line-height: 160%;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.iconDisplay === 'right' &&
    css`
      flex-direction: row-reverse;
    `}

  ${(props) =>
    props.newTab &&
    css`
      a {
        target: _blank;
      }
    `}
`
