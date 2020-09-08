import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    display:flex;
    align-items:center;
    text-decoration: none;
    color: #a8a8b3;

    &:hover{
      color: #555;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 60px;

    header{
      display:flex;
      align-items: center;

      img{
        width:120px;
        height: 120px;
        border-radius: 50%;
      }

      div{
        margin-left:24px;

        strong{
          font-size: 38px;
          color: #3d3d4d;
        }

        p{
          font-size: 20px;
          color: #7d7d7d;
        }
      }
    }

    ul{
      display:flex;
      list-style: none;
      margin-top: 30px;
      margin-left: 10px;

      li{
        & + li {
          margin-left: 80px;
        }

        strong{
        display: block;
          font-size: 30px;
          color: #3d3d4d;
        }

        span{
          display: block;
          margin-top: 5px;
          color: #6d6d6d;
          font-weight: bold;
        }
      }
    }
`;

export const Issues = styled.div`
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
