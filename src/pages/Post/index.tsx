// Post.tsx
import { useParams } from 'react-router-dom'

export default function Post() {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <h2>Post {id}</h2>
      {/* Other content for the individual post */}
    </div>
  )
}
