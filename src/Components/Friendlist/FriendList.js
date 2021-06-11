import React from "react";
import { FriendListItemContainer } from "./FriendListItemStyled";
import PropTypes from "prop-types";
import defaultSvg from "./defaultSvg.svg";
import FriendListItem from "./friendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <FriendListItemContainer className="friend-list">
      {friends.map((friend) => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </FriendListItemContainer>
  );
};

FriendList.defaultProps = {
  avatar: defaultSvg,
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
