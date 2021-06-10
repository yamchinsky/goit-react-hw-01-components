import React from "react";
import { FriendListItemContainer } from "./FriendListItemStyled";
import PropTypes from "prop-types";
import defaultSvg from "./defaultSvg.svg";
import FriendListItem from "./friendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <FriendListItemContainer className="friend-list">
      {friends.map((friend) => (
        <>
          <FriendListItem friend={friend} />
        </>
      ))}
    </FriendListItemContainer>
  );
};

FriendList.defaultProps = {
  avatar: defaultSvg,
};

FriendList.prototypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
