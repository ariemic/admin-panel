import ProductList from './ProductList.jsx';

export default function Dashboard() {
  return (
    <article className="px-8 py-4">
      <h1 className="text-3xl font-semibold">Zamówienia</h1>
      <div className="flex gap-2">
        <p>Do wyceny</p>
        <p>Wycenione</p>
        <p>Do realizacji</p>
        <p>Zrealizowan</p>
      </div>
      <br />
      <h1 className="text-3xl">List produktów</h1>
      <ProductList />
    </article>
  );
}
