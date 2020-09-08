import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 46px;
  margin-top: 70px;
  color: #3A3A3A;
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
      color: #3a3a3a;
      border: 2px solid #fff;

      ${(props) => props.hasError && `
        border: 2px solid #c00;
      `}

      &::placeholder {
        color: #a8a8b3;
      }
    }

    button {
      height: 70px;
      width: 210px;
      background: #04D361;
      border: 0;
      border-radius: 0 5px 5px 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.3s;
      &:hover {
      background: ${shade(0.2, '#04D361')};
      }
    }
  `;

export const Error = styled.span`
    display: block;
    color: #c00;
    margin-top: 8px;
  `;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 800px;

    a{
      background: #fff;
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
        background: ${shade(0.05, '#fff')};

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
          color: #3D3D4D;
        }

        p {
          font-size: 20px;
          color: #3D3D4D;
          margin-top: 4px;
        }
      }

      svg{
        margin-left: auto;
        color: #3D3D4D;
      }
    }
  `;
