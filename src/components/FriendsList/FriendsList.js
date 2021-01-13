import FriendListItem from "./FriendListItem";
import s from'./FriendsList.module.css';

function FriendsList({ friends }) {
 return ( <ul className ={s.friendsList}>
   {friends.map(FriendListItem)}
    </ul>)
    
}

export default FriendsList;