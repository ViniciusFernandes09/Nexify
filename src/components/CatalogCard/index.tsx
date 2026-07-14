import "./styles.css";
import computerImg from "../../assets/computer.png.png";

export default function CatalogCard() {
  return (
    <div className="nxf-card">
      <div className="nxf-catalog-card-top nxf-line-bottom">
        <img src={computerImg} alt="Computer" />
      </div>
      <div className="nxf-catalog-card-bottom">
        <h3>R$ 5.000,00</h3>
        <h4>Computador Gamer XT</h4>
      </div>
    </div>
  );
}
