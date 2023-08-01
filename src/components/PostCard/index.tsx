import { PostCardContent, PostHeader } from './styles'
import 'moment/locale/pt-br'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { formatRelativeTime } from '../../functions/formatRelativeTime'
interface PostCardProps {
  title: string
  body: string
  createdAt: string
}

export function PostCard({ title, body, createdAt }: PostCardProps) {
  console.log(createdAt)

  return (
    <PostCardContent>
      <PostHeader>
        <h1 className="titleM">{title}</h1>
        <p className="span">{formatRelativeTime(createdAt)} </p>
      </PostHeader>
      <p className="textM">
        <ReactMarkdown>{body.slice(0, 150) + '...'}</ReactMarkdown>
      </p>
    </PostCardContent>
  )
}
