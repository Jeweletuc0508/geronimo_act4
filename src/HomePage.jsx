import { useEffect } from "react"; 
import './App.css';
function HomePage() {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (

        <div className="home-page">
            <h1>Home</h1>
        </div>
    );
}
export default HomePage;  