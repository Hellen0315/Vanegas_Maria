import img from "../../assets/product-pics/AcerAspire-x1.png";
import "../Products/products.css";

const Product = () => {
  return (
    <div className="product">
      <img src={img} alt={"foto"} />
      <div className="productInfo">
        <p className="category">{"category"}</p>
        <p className="title">{"name"}</p>
      </div>
    </div>
  );
};
export default Product;