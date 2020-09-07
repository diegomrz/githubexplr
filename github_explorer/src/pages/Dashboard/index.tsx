import React from 'react';
import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no github!</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/13582313?s=400&u=9830e3e4a0b19df67b2c5f1a49e996e57eadc70c&v=4"
            alt="Diego Martinez" />
          <div>
            <strong>diegomrz/rocketseat</strong>
            <p>Repositório referente ao curso rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/13582313?s=400&u=9830e3e4a0b19df67b2c5f1a49e996e57eadc70c&v=4"
            alt="Diego Martinez" />
          <div>
            <strong>diegomrz/rocketseat</strong>
            <p>Repositório referente ao curso rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/13582313?s=400&u=9830e3e4a0b19df67b2c5f1a49e996e57eadc70c&v=4"
            alt="Diego Martinez" />
          <div>
            <strong>diegomrz/rocketseat</strong>
            <p>Repositório referente ao curso rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
};

export default Dashboard;
