import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendsList/FriendsList";
import TransactionHistory from "./components/Transactions/TransactionHistory";


import user from './user.json';
import statistics from './statistical-data.json';
import friends from './friends.json';
import transactions from './statistical-data.json';

export default function App() {
    return <div>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats} />
        <Statistics title="Upload stats" stats={statistics} />;
        {/* <Statistics stats={statistics} /> */}
        <FriendsList friends={friends} />
        <TransactionHistory items={transactions} />;
           </div>
    
}