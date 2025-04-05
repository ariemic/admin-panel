export default function ProductList() {
  const items = [
    'Table legs (turned, tapered, carved)',
    'Chair spindles & backrests',
    'Cabinet doors (raised panel, shaker style)',
    'Drawer fronts & sides',
    'Shelving brackets & supports',
    'Bed rails & headboards',
    'Baseboards, crown moldings, & trim profiles',
    'Staircase parts (balusters, handrails)',
    'Door & window frames',
    'CNC-cut decorative inlays',
  ];

  return (
    <ul className="list-disc">
      {items.map((item, idx) => {
        return <Product name={item} key={idx} />;
      })}
    </ul>
  );
}

const Product = ({ name, key }) => {
  return <li key={key}>{name}</li>;
};
