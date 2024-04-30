import './App.css';
import airforce from './images/airforce.png';

const Logo = () => {

    return (<div className='logoContainer'>
          <div className='textContainer'>
              <h1>מלאכי שמיים</h1>
              <h2>ממשק אינפורמציה לכתמ"מים עוינים</h2>
          </div>
        
          <img src={airforce} />
      </div>);

}

export default Logo;