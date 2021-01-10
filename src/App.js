import ProfileList from "./components/ProfileList";
// import Section from "./components/Section"; 
import friends from './friends.json';

export default function App() {
    return <div>
        <ProfileList items={ friends}/>
    </div>
    
}