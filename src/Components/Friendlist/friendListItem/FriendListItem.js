import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ friend }) => {
  return (
    <li className="item" key={friend.id}>
      {friend.isOnline === true ? (
        <span className="status">
          {friend.isOnline} <button className="isOnline"></button>
        </span>
      ) : (
        <span className="status">
          {friend.isOnline}
          <button className="isOffline"></button>
        </span>
      )}
      <img className="avatar" src={friend.avatar} alt="" width="48" />
      <p className="name">{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default FriendListItem;
