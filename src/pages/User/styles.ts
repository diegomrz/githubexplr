import styled from 'styled-components';

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
          color: #dcdcdc;
        }

        p{
          font-size: 20px;
          color: #dcdcdc;
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
          color: #dcdcdc;
        }

        span{
          display: block;
          margin-top: 5px;
          color: #dcdcdc;
          font-weight: bold;
        }
      }
    }
`;

export const Repositories = styled.div`
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
        color: #dcdcdc;
      }
    }
  `;
