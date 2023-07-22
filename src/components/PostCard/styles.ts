import styled from 'styled-components'

export const PostCardContent = styled.div`
  border-radius: 10px;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};

  width: 26rem;
  height: 16.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
  p {
    white-space: nowrap;
  }
`
