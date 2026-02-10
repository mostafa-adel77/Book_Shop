import HeroSectionBooks from "../components/HeroSectionBooks";
import OrderSummary from "../components/OrderSummary";
import ShippingInformation from "../components/ShippingInformation";

export default function CheckoutPage() {
  return (
    <>
      <HeroSectionBooks />
      <section className="flex justify-center bg-creamy py-15">
        <div className="container flex flex-col lg:flex-row justify-between gap-10">
        <ShippingInformation />
        <OrderSummary />
        </div>
      </section>
    </>
  );
}
