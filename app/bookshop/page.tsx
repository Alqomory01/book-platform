export default function Bookshop(){
    return(
        <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">Bookshop Dashboard</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Discounts & Markups</h2>
        <p>Set discount or markup rates for books.</p>
        {/* Add form for discount input */}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Sales Reports</h2>
        <p>View revenue distribution and sales performance.</p>
        {/* Add table or chart */}
      </section>
    </main>
    )
}