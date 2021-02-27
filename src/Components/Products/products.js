import img from "../../assets/product-pics/AcerAspire-x1.png";
import "../Products/products.css";

const Product = () => {
  return (
    <div className="product">
      <div className="productInfo">
        <img src={img} alt={"foto"} />
        <p className="category">{"category"}</p>
        <p className="title">{"name"}</p>
      </div>
      <div className="productInfo">
        <img src={img} alt={"foto"} />
        <p className="category">{"category"}</p>
        <p className="title">{"name"}</p>
      </div>
      <div className="productInfo">
        <img src={img} alt={"foto"} />
        <p className="category">{"category"}</p>
        <p className="title">{"name"}</p>
      </div>
    </div >
  );
};
export default Product;