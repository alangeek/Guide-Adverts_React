import styled from 'styled-components';

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 80px;
  border-bottom: 1px solid #ccc;
  
  .container {
    max-width: 1272px;
    margin: auto;
    display: flex;
    align-items: center;
    padding-top: 15px;
  }

  .logo {
  display: flex;
  align-items: center;

  border: 1px solid #D7DBDD;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  box-shadow:
    0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 3px rgba(0, 0, 0, 0.05),
    0 4px 8px rgba(0, 0, 0, 0.05);
  }
`;