
import { Link } from 'react-router-dom';
import './WelcomeScreen.css';


function WelcomeScreen(props)
{

    return (
        <div className="welcome-container">
            <div className="h1">
                <h1 style={{color: "white"}}>
                    Welcome
                </h1>
            </div>

            <div>
                <p>
                    Welcome to our listing app. Click on the below button to access the database listings
                </p>
            </div>
            
            <div>
                <Link to="/listings">
                    <button>
                        Listings
                    </button>
                </Link>
            </div>
        </div>
    );
}


export default WelcomeScreen;


