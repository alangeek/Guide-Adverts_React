import React, { useState } from 'react';

import useApi from '../../helpers/OlxAPI';
import { doLogin } from '../../helpers/AuthHandler';

import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

const Page = () => {
  const api = useApi();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    const json = await api.login(email, password);

    if(json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);
      window.location.href = '/';
    }


  }
  
  return (
    <PageContainer>
      <PageTitle>Acesse a sua conta</PageTitle>
      <PageArea>
        {error &&
          <ErrorMessage>{error}</ErrorMessage>
        }
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input 
                className="input--x" 
                type="email" 
                disabled={disabled}
                value={email}
                onChange={e=>setEmail(e.target.value)}
                required 
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input 
                className="input--x" 
                type="password" 
                disabled={disabled}
                value={password}
                onChange={e=>setPassword(e.target.value)} 
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Lembrar Senha</div>
            <div className="area--input">
              <input 
                type="checkbox" 
                disabled={disabled}
                checked={rememberPassword}
                onChange={e=>setRememberPassword(!rememberPassword)} 
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Cadastre-se</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}

export default Page;