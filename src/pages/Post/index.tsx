// Post.tsx
import { useParams } from 'react-router-dom'
import { PostButtons, PostContent, PostInfo } from './styles'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import CustomLink from '../../components/CustomLink'

interface Issue {
  url: string
  title: string
  body: string
  created_at: string
  user: { login: string }
  comments: number
}

export default function Post() {
  const { id } = useParams<{ id: string }>()
  const [postInfo, setPostInfo] = useState<Issue>({
    url: '',
    title: '',
    body: '',
    created_at: '',
    user: { login: '' },
    comments: 0,
  })

  useEffect(() => {
    getIssue()
  }, [id])

  const getIssue = () => {
    return fetch(
      `https://api.github.com/repos/vinicsperes/github-blog/issues/${id}`,
    )
      .then((response) => response.json())
      .then((data) => setPostInfo(data))
  }

  return (
    <PostContent>
      <PostInfo>
        <PostButtons>
          <CustomLink
            title="VOLTAR"
            href="/"
            icon={{
              display: 'left',
              iconComponent: (
                <FontAwesomeIcon width={12} icon={faChevronLeft} />
              ),
            }}
          />
          <CustomLink
            title="VER NO GITHUB"
            href={`https://github.com/vinicsperes/github-blog/issues/${id}`}
            icon={{
              display: 'right',
              iconComponent: (
                <FontAwesomeIcon width={12} icon={faArrowUpRightFromSquare} />
              ),
            }}
            newTab
          />
        </PostButtons>

        <h3>{postInfo.title}</h3>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>{postInfo.user.login}</span>

          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{postInfo.created_at}</span>

          <FontAwesomeIcon icon={faComment} />
          <span>{postInfo.comments} comentários</span>
        </div>
      </PostInfo>
      <p>{postInfo.body}</p>
      {/* Other content for the individual post */}
    </PostContent>
  )
}
