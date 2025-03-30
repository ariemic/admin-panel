export default function Dashboard() {
  return(
    <article className='py-4 px-8'>
      <h1 className='text-3xl font-semibold'>Zamówienia</h1>
      <div className='flex gap-2'>
        <p>Do wyceny</p>
        <p>Wycenione</p>
        <p>Do realizacji</p>
        <p>Zrealizowan</p>
      </div>
    </article>
  )
}