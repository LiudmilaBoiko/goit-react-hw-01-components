import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline, id}) => {
  return (
  <li class="item" key = {id}>
      <span class="status"></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
     </li>
)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};

export default FriendListItem;