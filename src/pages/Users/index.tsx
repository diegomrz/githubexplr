import React, { useState, useEffect, FormEvent } from 'react';
import logo from '../../assets/logo.svg';
import { Title, Form, Developers, Header, Error } from './styles';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

interface User {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  location: string;
}

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [listusers, setUsers] = useState<User[]>(() => {
    const storageUsers = localStorage.getItem('@githubexplorer:users');
    if (storageUsers) {
      return JSON.parse(storageUsers)
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@githubexplorer:users', JSON.stringify(listusers));
  }, [listusers])

  async function deleteUser(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

  }

  async function handleAddUser(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!newUser) {
      setInputError('Digite o nome do usuário');
      return;
    }
    try {
      const response = await api.get(`users/${newUser}`);
      const user = response.data;
      const login = user.login;
      console.log(user);
      const userIndex = listusers.findIndex(user => user.login === login);
      if (!userIndex) {
        setInputError('Usuário já cadastrado.');
        return;
      }
      setUsers([...listusers, user]);
      setNewUser('');
      setInputError('');
    } catch (err) {
      setInputError('Usuário não encontrado.');
    }
  }

  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Repositórios
        </Link>
      </Header>
      <Title>Desenvolvedores no github!</Title>
      <Form hasError={!!inputError} onSubmit={handleAddUser}>
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Digite o nome de usuário do desenvolvedor" />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Developers>
        {listusers.map(user => (
          <Link key={user.login} to={`/users/${user.login}`}>
            <img src={user.avatar_url}
              alt={user.login} />
            <div>
              <strong>{user.name}</strong>
              <p>{user.login}</p>
              <p>{user.bio}</p>
            </div>
            <FiChevronRight size={30} />
          </Link>
        ))}
      </Developers>
    </>
  )
};

export default Dashboard;
