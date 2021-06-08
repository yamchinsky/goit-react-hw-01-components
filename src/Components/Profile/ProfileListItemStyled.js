import styled from "styled-components";
export const ProfileItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .description {
    margin: 5px 10px 0px 10px;
    width: 450px;
    height: 250px;
    background-color: white;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
  }
  .avatar {
    margin-top: 10px;
    margin-left: 155px;
    margin-right: 155px;
    background-color: green;
    border-radius: 57px;
    align-items: center;
    justify-content: center;
    width: 150px;
  }
  .name {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 0.84;
    align-items: center;
    text-align: center;
    color: black;
    padding-top: 10px;
  }
  .tag {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 0.84;
    align-items: center;
    text-align: center;
    color: #767d85;
    padding-top: 10px;
  }
  .location {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 0.84;
    align-items: center;
    text-align: center;
    color: #767d85;
    padding-top: 10px;
  }

  .stats {
    display: flex;
    width: 450px;
    border: 1px solid black;
    justify-content: space-evenly;
    list-style: none;
  }

  .stats-item {
    padding-top: 10px;
    padding-bottom: 20px;
  }

  .label {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 0.84;
    align-items: center;
    text-align: center;
    color: #767d85;
    padding-top: 10px;
  }

  .quantity {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 0.84;
    align-items: center;
    text-align: center;
    color: black;
  }
`;
