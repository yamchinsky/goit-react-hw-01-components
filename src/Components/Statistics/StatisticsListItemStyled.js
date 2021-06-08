import styled from "styled-components";
export const StatisticsItemContainer = styled.section`
  width: 450px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid black;

  .title {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    border: 1px solid black;
  }

  .stat-list {
    display: flex;
    list-style: none;
    justify-content: center;
    background-color: red;
  }

  .item {
    padding-right: 5px;
  }
  .label {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 0.84;
    align-items: center;
    text-align: center;
    color: white;
    padding-right: 10px;
    justify-content: center;
  }

  .percentage {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 0.84;
    align-items: center;
    text-align: center;
    color: white;
    padding-right: 10px;
    justify-content: center;
  }
`;
