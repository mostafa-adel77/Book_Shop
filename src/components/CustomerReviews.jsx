import CardCustomerReviews from "./CardCustomerReviews";

export default function CustomerReviews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8 p-3">
      <CardCustomerReviews />
      <CardCustomerReviews />
      <CardCustomerReviews />
      <CardCustomerReviews />
      <CardCustomerReviews />
      <CardCustomerReviews />
    </div>
  );
}
