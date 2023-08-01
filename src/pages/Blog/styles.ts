import styled from 'styled-components'

export const BlogContent = styled.div`
  background: ${(props) => props.theme['base-background']};
  width: 100%;
  height: 125vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-top: -5.5rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 234px;
`

export const Profile = styled.div`
  max-width: 54rem;
  width: 100%;
  filter: drop-shadow(0 3rem 7rem rgba(20, 88, 156, 0.4));
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: fit-content;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
`

export const ProfileImg = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const PostInfo = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;
  width: 54rem;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme['base-subtitle']};
  > span {
    color: ${(props) => props.theme['base-span']};
  }
`

export const SearchPost = styled.input`
  width: auto;
  width: 54rem;
  height: 3.125rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-input']};
  border: 2px solid ${(props) => props.theme['base-border']};
  padding: 10px;
  font-size: 16px;
  margin-bottom: 3rem;
  color: ${(props) => props.theme['base-text']};
  :placeholder {
    color: ${(props) => props.theme['base-label']};
    font-style: italic;
  }
  :focus {
    box-shadow: 0 0 3px #6c63ff;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > :first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      display: flex;
      align-items: row;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      align-items: center;

      svg {
        align-items: center;
      }

      p {
        margin: 0.8rem 0;
      }
    }
  }
`

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  margin-top: 2.5rem;

  span {
    display: flex;
    align-items: row;
    gap: 0.5rem;

    white-space: nowrap;
  }
`
