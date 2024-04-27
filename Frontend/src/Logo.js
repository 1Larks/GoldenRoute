import './App.css';
import airforce from './images/airforce.png';

const Logo = () => {

    return (<div className='logoContainer'>
          <div className='textContainer'>
              <h1>Angels of Heaven</h1>
              <h2>Unmanned Aerial Vehicle Information Interface</h2>
          </div>
        
          <img src={airforce} />
      </div>);

}

export default Logo;