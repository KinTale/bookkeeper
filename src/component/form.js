import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Form({ setReset }) {
    const api = 'https://bookkeeper.codat.io'
    const blankForm = {
        invoiceNumber: 0,
        customerName: '',
        amountPaid: 0
    }
    const [formValues, setFormvalues] = useState(blankForm)

    const navigtae = useNavigate()
    const handleChange = (event) => {
        let { name, value } = event.target
        if (name === 'invoiceNumber' || name === 'amount') {
            value = Number(value)
        }
        setFormvalues({
            ...formValues, [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
             console.log(formValues)
        axios.post(api + '/invoices', formValues)
            .then(res => {
                console.log({ res })
            })
        setFormvalues(blankForm)
        setReset(+1)
        navigtae('/')
   
    }
    return (
        <section className='form-container'>
            <form onSubmit={onSubmit}>
                <label htmlFor='invoiceNumber'> Invoice number:</label>
                <input type='number' id='invoiceNumber' name='invoiceNumber' value={formValues.invoiceNumber} onChange={handleChange} />

                <label htmlFor='customerName'>Customer name:</label>
                <input type='text' id='customerName' name='customerName' value={formValues.customerName} onChange={handleChange} />

                <label htmlFor='amount'>Amount paid:</label>
                <input type='number' id='amountPaid' name='amountPaid' value={formValues.amountPaid} onChange={handleChange} />

                <button type='submit'> Create invoice</button>
            </form>
        </section>
    )
}