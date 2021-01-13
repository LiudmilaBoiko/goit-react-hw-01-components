import PropTypes from 'prop-types';
import s from'./FriendsList.module.css';

const FriendListItem = ({avatar, name, isOnline, id}) => {
  return (
  <li className={s.item} key = {id}>
      <span className={s.status} style = {isOnline ? {backgroundColor: 'yellow'} : {backgroundColor: 'grey'}}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="72" />
      <p className={s.name}>{name}</p>
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