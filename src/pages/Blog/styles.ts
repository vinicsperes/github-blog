import styled from 'styled-components'

export const BlogContent = styled.div`
  background: ${(props) => props.theme['base-background']};
  width: 100%;
  display: flex;
  margin-top: -1px;
  height: 100vh;
  justify-content: center;
`

export const Profile = styled.div`
  max-width: 54rem;
  width: 100%;
  margin: -5.5rem 0;
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

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;

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
