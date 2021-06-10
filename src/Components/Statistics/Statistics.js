import React from "react";
import { StatisticsItemContainer } from "./StatisticsListItemStyled";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsItemContainer className="statistics">
      {title !== null ||
        "undefined" ||
        (false && <h2 className="title">{title}</h2>)}

      <ul className="stat-list">
        {stats.map((stat) => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <br />
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </StatisticsItemContainer>
  );
};

Statistics.prototypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Statistics;
