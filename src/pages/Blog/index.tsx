import {
  BlogContent,
  GridContainer,
  PersonalInfo,
  PostInfo,
  Profile,
  ProfileContent,
  ProfileImg,
  SearchPost,
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

interface Issue {
  url: string
  title: string
  body: string
  created_at: string
}

export function Blog() {
  const [githubData, setGithubData] = useState<githubDataType>({})
  const [issueList, setIssueList] = useState<Issue[]>([])

  const getUserInfo = () => {
    return fetch(`https://api.github.com/users/vinicsperes`)
      .then((response) => response.json())
      .then((data) => setGithubData(data))
  }

  const getIssues = async () => {
    const response = await fetch(
      'https://api.github.com/repos/vinicsperes/github-blog/issues',
    )
    const data = await response.json()
    setIssueList(data)
  }

  useEffect(() => {
    getUserInfo()
    getIssues()
  }, [])

  console.log(issueList)
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

      <PostInfo>
        <h3>Publicações</h3>
        <span>{issueList.length} publicações</span>
      </PostInfo>
      <SearchPost placeholder="Buscar conteúdo" />

      <GridContainer>
        {issueList.map((issue) => {
          console.log(issue.created_at)

          return (
            <PostCard
              key={issue.url}
              title={issue.title}
              body={issue.body}
              createdAt={issue.created_at}
            />
          )
        })}
      </GridContainer>
    </BlogContent>
  )
}
