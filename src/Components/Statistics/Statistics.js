import React from "react";
import { StatisticsItemContainer } from "./StatisticsListItemStyled";

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsItemContainer className="statistics">
      {title !== 0 && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((stat) => (
          <li className="item">
            {/* {stat.id} */}
            <span className="label">{stat.label}</span>
            <br />
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </StatisticsItemContainer>
  );
};

export default Statistics;
