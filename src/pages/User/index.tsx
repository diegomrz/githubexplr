import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepositoryInfo, Repositories } from './styles';
import api from '../../services/api';

interface UserParams {
  login: string;
}

interface User {
  id: string;
  login: string;
  name: string;
  public_repos: number;
  avatar_url: string;
  url: string;
  followers: string;
  following: string;
  bio: string;
}

interface Repository {
  full_name: string;
  url: string;
  description: string;
  owner: {
    avatar_url: string;
  }
}

const Repository: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const { params } = useRouteMatch<UserParams>();

  useEffect(() => {
    api.get(`users/${params.login}`).then(response => {
      setUser(response.data);
    });

    api.get(`users/${params.login}/repos`).then(response => {
      setRepositories(response.data);
    });
  }, [params.login]);

  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {user && (
        <RepositoryInfo>
          <header>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.name}</strong>
              <p>@{user.login}</p>
              <p>{user.bio}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{user.public_repos}</strong>
              <span>Public repos</span>
            </li>
            <li>
              <strong>{user.followers}</strong>
              <span>Followers</span>
            </li>
            <li>
              <strong>{user.following}</strong>
              <span>Following</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Repository;
