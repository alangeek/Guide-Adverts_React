import styled from 'styled-components';

export const HeaderArea = styled.div`
  background-color: #060b1f;
  height: 80px;
  border-bottom: 1px solid #ccc;
  
  .container {
    max-width: 1272px;
    margin: auto;
    display: flex;
    align-items: center;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;

    width: 50px;
    height: 50px;
  }

  nav {
    padding: 5px 0;

    user-select, li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }
    li {
      margin: 0 20px;
    }

    a {
      color: #fff;
      font-size: 14px;
      text-decoration: none;
      transition: all 0.5s;

        &:hover {
          opacity: 0.7;
        }

      &.btn-cta {
        border-radius: 7px;
        background-color: #ff3366;
        padding: 10px;
        transition: all 0.5s;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  
`;