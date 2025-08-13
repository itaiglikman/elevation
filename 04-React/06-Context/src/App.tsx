import { useContext, useState } from "react";
import "./App.css";
import { UserContext } from "./Contexts/UserContext";

function App() {
    const [user, setUser] = useState({ name: 'john' })
    return (
        <>
            <UserContext value={{ user, setUser }}>
                <Dashboard />
            </UserContext>
        </>
    );
}

function Dashboard() {
    return (
        <>
        <div>dashbard comp</div>
            <Profile />
        </>
    )
}

function Profile() {
    return (
        <>
        <div>profile comp</div>
            <User />
        </>)
}

function User() {
    return (
        <>
        <div>user comp</div>
            <UserCard />
        </>
    )
}

function UserCard() {
    const { user, setUser } = useContext<any>(UserContext);
    return (
        <>
        <div>usercard comp</div>
            <div>{user.name}</div>
            <button onClick={() => (setUser({ name: 'sarah' }))}>Set user</button>
        </>
    )
}

export default App;
