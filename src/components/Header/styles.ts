import styled from 'styled-components'

export const HeaderContent = styled.header`
  width: 100%;
  height: 18.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 17.0625rem;
  margin-right: 0;

  .logoGithubBlog {
    margin-top: -4rem;
    width: 148px;
    height: 98px;
  }

  @media screen and (max-width: 1490px) {
    gap: 10rem;
  }

  @media screen and (max-width: 1290px) {
    gap: 5rem;
  }

  @media screen and (max-width: 1090px) {
    gap: 0rem;
  }

  @media screen and (max-width: 920px) {
    img:not(.logoGithubBlog) {
      width: 30%;
      margin-left: 0rem;
    }
    margin-top: -6rem;
    .logoGithubBlog {
      width: 20%;
      margin: 0;
    }
  }
`
