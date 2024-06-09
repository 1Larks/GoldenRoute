import './Logo.css';
import airforce from '../../Images/airforce.png';

const Logo = () => {

    return (<div className='logoContainer'>
          <div className='textContainer'>
            <h1>:מבצע</h1>
            <h2>מלאכי שמיים</h2>
            <h3>ממשק מידע על כטב"מים עוינים</h3>
          </div>
        
          <img src={airforce} />
      </div>);

}

export default Logo;