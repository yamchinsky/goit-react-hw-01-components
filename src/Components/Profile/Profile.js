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
    <ProfileItemContainer class="profile">
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

Profile.prototypes = {
  props: PropTypes.object.isRequired,
};

export default Profile;
