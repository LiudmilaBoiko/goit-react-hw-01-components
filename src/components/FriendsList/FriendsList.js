import FriendListItem from "./FriendListItem";

function FriendsList({ friends }) {
 return ( <ul>
   {friends.map(FriendListItem)}
    </ul>)
    
}

export default FriendsList;