import React from 'react';
import PropTypes from 'prop-types';
import css from './User.module.css';

export default function User(userData) {
  const { username, tag, location, avatar, followers, views, likes } = userData;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} width={100} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  avatar: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
  followers: PropTypes.number,
  viewss: PropTypes.number,
  likes: PropTypes.number,
};
