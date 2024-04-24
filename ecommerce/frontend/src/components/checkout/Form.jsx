// import Button from '../home/button/Button'
import styles from './Form.module.css'
import { useState } from 'react'


const Form = ({formData,handleChange}) => {


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('/validate_checkout/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (!response.ok) {
            const data = await response.json();
            // Handle validation errors
            console.log(data.errors);
          } else {
            // Form submission successful, handle it accordingly (e.g., redirect user)
            console.log('Form submitted successfully!');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
            <div className={styles.name}>
                <div className={styles.firstName}>
                    <label>First Name</label> <br/>
                    <input type='text' name='firstName' required id='firstName' value={formData.firstName || ''} onChange={handleChange} />
                </div>

                <div className={styles.lastName}>
                    <label>Last Name</label> <br/>
                    <input type='text' name='lastName' id='lastName'/>
                </div>
            </div>
            <div className={styles.country}>
                <label>Country/Region</label> <br/>
                <select name="country" value={formData.country || ''} onChange={handleChange} label="Select 1">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
            </select>
            </div>
            <div >
                <label>Street address</label> <br/>
                <input type='text' name='apartment' value={formData.apartment || ''} onChange={handleChange} placeholder='House number and apartment name' /> <br/> <br/>
                <input type='text' name='address' value={formData.address || ''} onChange={handleChange} placeholder='Street Address'/>
            </div>
            <div>
                <label>Town/City</label> <br/>
                <input type='text' name='city' value={formData.city || ''} onChange={handleChange}/>
            </div>
            <div >
                <label>State</label> <br/>
                <select name="state" value={formData.state || ''} onChange={handleChange} label="Select 2">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
            </select>
            </div>
            <div>
                <label>PIN Code</label> <br/>
                <input type='text' name='pincode' value={formData.pincode || ''} onChange={handleChange}/>
            </div>
            <div>
                <label>Phone</label> <br/>
                <input type='tel' name='phone' value={formData.phone || ''} onChange={handleChange} />
            </div>
            <div>
                <label>Email address</label> <br/>
                <input type='email' name='email' value={formData.email || ''} onChange={handleChange} />
            </div>
            {/* <Button type='submit' text='SUBMIT'/> */}
        </form>
    </div>
  )
}

export default Form
