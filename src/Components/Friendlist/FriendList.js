import React from "react";
import { FriendListItemContainer } from "./FriendListItemStyled";
const FriendList = ({ friends }) => {
  return (
    <FriendListItemContainer className="friend-list">
      {friends.map((friend) => (
        <li className="item">
          {/* {friend.id} */}

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
      ))}
    </FriendListItemContainer>
  );
};

export default FriendList;
