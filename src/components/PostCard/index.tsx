import { PostCardContent, PostHeader } from './styles'

export function PostCard() {
  return (
    <PostCardContent>
      <PostHeader>
        <h1 className="titleM">JavaScript data types and data structures</h1>
        <p className="span">Há 1 dia</p>
      </PostHeader>
      <p className="textM">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </PostCardContent>
  )
}
