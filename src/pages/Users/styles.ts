import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    display:flex;
    align-items:center;
    text-decoration: none;
    color: #dcdcdc;

    &:hover{
      color: #5a5a5a;
    }
  }
`;

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 46px;
  margin-top: 70px;
  color: #fbfbfb;
  max-width: 450px;
  line-height: 56px
  `;


export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 800px;
  display: flex;

    input {
      font-size: 20px;
      flex: 1;
      height: 70px;
      padding: 0 24px;
      border: 0;
      border-radius: 5px 0 0 5px;
      color: #5a5a5a;
      background: #1a1a1a;
      ${(props) => props.hasError && `
        border: 2px solid #f44;
      `}

      &::placeholder {
        color: #a8a8b3;
      }
    }

    button {
      height: 70px;
      width: 210px;
      background: #04a331;
      border: 0;
      border-radius: 0 5px 5px 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.3s;
      &:hover {
      background: ${shade(0.3, '#04a331')};
      }
    }
  `;

export const Error = styled.span`
    display: block;
    color: #f44;
    margin-top: 8px;
  `;

export const Developers = styled.div`
    margin-top: 80px;
    max-width: 800px;

    a{
      background: #3a3a3a;
      border-radius: 5px;
      width: 100%;
      padding: 24px;
      display: block;
      text-decoration: none;
      display: flex;
      align-items:center;
      transition: transform 0.4s;

      & + a{
        margin-top: 16px;
      }

      &:hover{
        transform: translateX(5px);
        background: #3f3f3f;
      }

      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }

      div{
        margin-left: 16px;
        flex: 1;
        strong{
          font-size: 20px;
          color: #dcdcdc;
        }

        p {
          font-size: 20px;
          color: #dcdcdc;
          margin-top: 4px;
        }
      }

      svg{
        margin-left: auto;
        color: #fcfcfc;
      }
    }
  `;

