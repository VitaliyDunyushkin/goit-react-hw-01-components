import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={css.item} key={id} id={id}>
      <span
        className={css.status}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
