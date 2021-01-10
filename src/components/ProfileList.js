import PropTypes from 'prop-types';
import Profile from "./Profile";


function ProfileList({ items }) {
   return ( <ul>
        {items.map(item => (
            <li key = {item.id}>
                <Profile
               avatar={item.avatar}
               alt={item.name}
               name={item.name}
               tag={item.tag}
               location={item.location}
               stats={item.stats}
            />
            </li>
        ))}
    </ul>)
    
}

ProfileList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
}

export default ProfileList;