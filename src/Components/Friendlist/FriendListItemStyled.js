import styled from "styled-components";
export const FriendListItemContainer = styled.ul`
  display: flex;
  width: 450px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid black;
  list-style: none;
  margin-top: 10px;
  justify-content: space-evenly;

  .item {
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .isOnline {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: green;
  }

  .isOffline {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: red;
  }

  .avatar {
    border-radius: 14px;
    background-color: yellow;
  }

  .name {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 0.84;
    color: black;
  }
`;
