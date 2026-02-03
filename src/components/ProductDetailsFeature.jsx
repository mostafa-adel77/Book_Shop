export default function ProductDetailsFeature({el}) {
  return (
    <div className="flex flex-col gap-4 text-black">
      <span className="flex gap-2">
        <h1 className="text-xl font-bold">Book Title :</h1>
        <p className="text-lg font-normal">{el.name}</p>
      </span>
      <span className="flex gap-2">
        <h1 className="text-xl font-bold">Author : </h1>
        <p className="text-lg font-normal">{el.author}</p>
      </span>
      <span className="flex gap-2">
        <h1 className="text-xl font-bold">Publication Date : </h1>
        <p className="text-lg font-normal">{el.year}</p>
      </span>
      <span className="flex gap-2">
        <h1 className="text-xl font-bold">ASIN :</h1>
        <p className="text-lg font-normal">{el.asin}</p>
      </span>
      <span className="flex gap-2">
        <h1 className="text-xl font-bold">Language : </h1>
        <p className="text-lg font-normal">{el.language}</p>
      </span>
      <span className="flex gap-2">
        <h1 className="text-xl font-bold">Publisher : </h1>
        <p className="text-lg font-normal">{el.Publisher}</p>
      </span>
      <span className="flex gap-2">
        <h1 className="text-xl font-bold">pages : </h1>
        <p className="text-lg font-normal">{el.pages}</p>
      </span>
      <span className="flex gap-2">
        <h1 className="text-xl font-bold">Book Format : </h1>
        <p className="text-lg font-normal">{el.BookFormat}</p>
      </span>
      <span className="flex gap-2">
        <h1 className="text-xl font-bold">Best Seller Rank :</h1>
        <p className="text-lg font-normal">{el.BestSellerRank}</p>
      </span>
    </div>
  );
}
