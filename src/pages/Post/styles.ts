import styled from 'styled-components'

export const PostContent = styled.div`
  background: ${(props) => props.theme['base-background']};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-top: -5.5rem;
`

export const PostInfo = styled.div`
  max-width: 54rem;
  width: 100%;
  filter: drop-shadow(0 3rem 7rem rgba(20, 88, 156, 0.4));
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: fit-content;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
`
export const PostButtons = styled.div`
  display: flex;
  justify-content: space-between;
`
