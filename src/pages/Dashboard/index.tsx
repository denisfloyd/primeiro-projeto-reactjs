import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/22669861?s=460&u=67e97bd921bec8ac654f1d9b8ab3f9a16e59bdb3&v=4"
            alt="Denis Ladeira"
          />
          <div>
            <strong>denismend/ng5</strong>
            <p>Simple Angular project just to show features from Angular 6+</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/22669861?s=460&u=67e97bd921bec8ac654f1d9b8ab3f9a16e59bdb3&v=4"
            alt="Denis Ladeira"
          />
          <div>
            <strong>denismend/ng5</strong>
            <p>Simple Angular project just to show features from Angular 6+</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/22669861?s=460&u=67e97bd921bec8ac654f1d9b8ab3f9a16e59bdb3&v=4"
            alt="Denis Ladeira"
          />
          <div>
            <strong>denismend/ng5</strong>
            <p>Simple Angular project just to show features from Angular 6+</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
