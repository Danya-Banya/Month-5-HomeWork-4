import image1 from "../img/hahnemuhle.png";
import image2 from "../img/Canson-vector.png";
import image3 from "../img/royal-talens.png";
import image4 from "../img/Fabriano-vector.png";
import PartnerBlock from "../ui/PartnerBlock";

export default function Partners() {
  return (
    <>
      <section className="partners">
        <div className="container">
          <div className="partner_item">
            <PartnerBlock img={image1} />
            <PartnerBlock img={image2} />
            <PartnerBlock img={image3} />
            <PartnerBlock img={image4} />
          </div>
        </div>
      </section>
    </>
  );
}
