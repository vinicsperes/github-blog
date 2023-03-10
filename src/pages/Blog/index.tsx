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
import { PostCard } from '../../components/PostCard'

import { useEffect, useState } from 'react'

interface githubDataType {
  avatar_url?: string
  bio?: string
  company?: string
  followers?: number
  login?: string
  name?: string
  githubUrl?: string
}

export function Blog() {
  const [githubData, setGithubData] = useState<githubDataType>({})

  const fetchData = () => {
    return fetch(`https://api.github.com/users/vinicsperes`)
      .then((response) => response.json())
      .then((data) => setGithubData(data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(githubData)

  return (
    <BlogContent>
      <Profile>
        <ProfileImg src={githubData.avatar_url} alt="Foto de perfil" />
        <ProfileContent>
          <div>
            <p className="titleL">{githubData.name}</p>
            <span className="link">
              <p>GITHUB</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </div>

          <p className="textM">{githubData.bio}</p>

          <PersonalInfo className="textM">
            <span>
              <FontAwesomeIcon icon={faGithub} />
              <p>{githubData.login}</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              <p>{githubData.company}</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              <p>{githubData.followers} followers</p>
            </span>
          </PersonalInfo>
        </ProfileContent>
      </Profile>

      <PostCard />
    </BlogContent>
  )
}
