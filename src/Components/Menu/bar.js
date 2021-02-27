import '../Menu/menu.css';
import kite from '../../assets/aerolab-logo.svg'
import coin from '../../assets/icons/coin.svg';

const Bar = () => {
    return (
      <div className="menu">
        <p>User</p>
        <div className="user">
            <img src={kite} alt="kite" height="36" width="36" />
            <p>Juan</p>
            <img src={coin} alt="coin" height="24" width="24" />
            <p>1000</p>
        </div>
      </div>
    );
  };
  export default Bar;