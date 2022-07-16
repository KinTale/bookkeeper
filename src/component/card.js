export default function Card({ invoices }) {
    return (
        <section className='invoiceDisplay'>
            {invoices && (invoices.map((item, key) =>
                <div className="card">
                    <p key={key}>Invoice number: {item.invoiceNumber}</p>
                    <p key={key}>Customer name:{item.customerName}</p>
                    <p key={key}>Amount paid: {item.amountPaid}</p>
                </div>
            ))}
        </section>

    )
}