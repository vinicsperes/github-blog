import moment from 'moment'
import { PostCardContent, PostHeader } from './styles'
import 'moment/locale/pt-br'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
interface PostCardProps {
  title: string
  body: string
  createdAt: string
}

export function PostCard({ title, body, createdAt }: PostCardProps) {
  console.log(createdAt)

  const formatRelativeTime = (isoDate: string): string => {
    moment.locale('pt-br')
    const currentDate = moment()
    const date = moment(isoDate, moment.ISO_8601)
    const diffInDays = currentDate.diff(date, 'days')

    if (diffInDays === 0) {
      return 'Hoje'
    } else if (diffInDays === 1) {
      return 'Há 1 dia'
    } else if (diffInDays > 7) {
      return `Há ${Math.floor(diffInDays / 7)} semanas`
    } else if (diffInDays > 1) {
      return `Há ${diffInDays} dias`
    } else {
      return date.fromNow()
    }
  }

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
