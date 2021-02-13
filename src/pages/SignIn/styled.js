import styled from 'styled-components';

export const PageArea = styled.div`
  width: 50%; 
  margin-left: 25%;
  background-color: #fff;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0px 0px 3px #999;

  .area {
    display: flex;
    align-items: center;
    padding: 10px;
    max-width: 500px;

    .area--title {
      width: 100px;
      text-align: right;
      padding-right:20px;
      font-weight: bold;
      font-size: 14px;
    }

    .area--input {
      flex: 1;

      .input--x{
        width: 100%;
        height: 48px;
        font-size: 14px;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 3px;
        outline: 0;
        transition: all ease .4s;

        &:focus {
          border: 1px solid #333;
          color: #333;
        }
      }

      button {
        width: 100%;
        height: 48px;
        background-color: #ff3366;
        border: 0;
        outline: 0;
        padding: 15px 10px;
        border-radius: 4px;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
        transition: all ease .4s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;