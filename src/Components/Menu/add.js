import coin from "../../assets/icons/coin.svg";
import '../Menu/menu.css';

const Add = () => {
  return (
    <div className="menu">
      <p>Add coins</p>
      <div className="button">
        <button>
          <div className="info">
            <img src={coin} alt="coin" />
            <p>5000</p>
          </div>
        </button>
        <button>
          <div className="info">
            <img src={coin} alt="coin" />
            <p>7000</p>
          </div>
        </button>
        <button>
          <div className="info">
            <img src={coin} alt="coin" />
            <p>9000</p>
          </div>
        </button>
      </div>
    </div>
  );
};
export default Add;