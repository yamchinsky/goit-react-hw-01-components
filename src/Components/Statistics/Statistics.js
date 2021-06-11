import React from "react";
import { StatisticsItemContainer } from "./StatisticsListItemStyled";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsItemContainer className="statistics">
      {title && <h2 className="title">{title}</h2>}

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

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
