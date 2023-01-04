import {
  BlogContent,
  PersonalInfo,
  Profile,
  ProfileContent,
  ProfileImg,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

export function Blog() {
  return (
    <BlogContent>
      <Profile>
        <ProfileImg src="https://github.com/ohperes.png" alt="Foto de perfil" />
        <ProfileContent>
          <div>
            <p className="titleL">Cameron Williamsons</p>
            <span className="link">
              <p>GITHUB</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </div>

          <p className="textM">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <PersonalInfo className="textM">
            <span>
              <FontAwesomeIcon icon={faGithub} />
              <p>ohperes</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              <p>Estudando</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              <p>20 seguidores</p>
            </span>
          </PersonalInfo>
        </ProfileContent>
      </Profile>
    </BlogContent>
  )
}
