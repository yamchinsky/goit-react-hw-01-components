import React from "react";
import { ProfileItemContainer } from "./ProfileListItemStyled";
import PropTypes from "prop-types";

const Profile = (props) => {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <ProfileItemContainer className="profile">
      <div className="description">
        <img className="avatar" src={avatar} alt="Аватар пользователя" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats-item">
          <span className="label">{"Followers"}</span>
          <br /> <span className="quantity">{followers}</span>
        </li>
        <li className="stats-item">
          <span className="label">{"Views"}</span>
          <br /> <span className="quantity">{views}</span>
        </li>
        <li className="stats-item">
          <span className="label">{"Likes"}</span> <br />
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </ProfileItemContainer>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
