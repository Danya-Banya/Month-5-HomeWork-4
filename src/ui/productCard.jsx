import product from "../img/Frame 209.png";
import arrow from "../img/Arrow 1.png";

export default function ProductCard({ title, count, img }) {
  return (
    <>
      <div className="product_card">
        <div className="">
          <img src={img} alt="" className="product_img"/>
        </div>
        <h3>{title}</h3>
        <p className="card_count">Тираж: от {count} штук</p>
        <p className="card_description">
          Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные
          формы и расцветки, изготовим форму под заказ.
        </p>
        <a href="#">
          Подробнее <img src={arrow} alt="" />
        </a>
      </div>
    </>
  );
}
