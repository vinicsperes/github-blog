import { HeaderContent } from './styles'
import logoGithubBlog from '../../assets/images/logoGithubBlog.svg'
import leftEffect from '../../assets/effects/leftEffect.svg'
import rightEffect from '../../assets/effects/rightEffect.svg'

export function Header() {
  return (
    <HeaderContent>
      <img src={leftEffect} alt="" />
      <img className="logoGithubBlog" src={logoGithubBlog} alt="" />
      <img src={rightEffect} alt="" />
    </HeaderContent>
  )
}
