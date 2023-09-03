import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.green : css.red}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width={48} />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
