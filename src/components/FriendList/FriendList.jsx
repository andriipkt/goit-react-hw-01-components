import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
