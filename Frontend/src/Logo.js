import './App.css';
import airforce from './Images/airforce.png';

const Logo = () => {

    return (<div className='logoContainer'>
          <div className='textContainer'>
            <h1>OPERATION:</h1>
            <h2>Angels of Heaven</h2>
            <h3>Unmanned Aerial Vehicle Information Interface</h3>
          </div>
        
          <img src={airforce} />
      </div>);

}

export default Logo;