import React from "react";

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

export default FriendListItem;
