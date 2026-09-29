import ProductCard from "../ui/productCard";
import product1 from "../img/Frame 208.png";
import product2 from "../img/Frame 209.png";
import product3 from "../img/Frame 210.png";
import product4 from "../img/Frame 211.jpg";

export default function Products() {
  return (
    <>
      <section className="container product_cont">
        <ProductCard title="Упаковка" count="50" img={product1} />
        <ProductCard title="Пакеты" count="200" img={product2} />
        <ProductCard title="Кейсы" count="30" img={product3} />
        <ProductCard title="Другие изделия" count="100" img={product4} />
      </section>
    </>
  );
}
