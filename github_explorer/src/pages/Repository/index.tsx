import React from 'react';
import logo from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F28929274%3Fs%3D200%26v%3D4&f=1&nofb=1" />
          <div>
            <strong>RocketSeat</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1801</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>38</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>27</strong>
            <span>Issues
            </span>
          </li>
          <li>
            <strong>4</strong>
            <span>Devs
            </span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="#">
          <div>
            <strong>Issue aberta nomes comments</strong>
            <p>descrição breve da issue</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
