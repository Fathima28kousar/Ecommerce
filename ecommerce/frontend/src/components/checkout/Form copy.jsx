import Button from '../home/button/Button'
import styles from './Form.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Checkout from './Checkout'


const Form = ({formData,handleChange}) => {

    // const [errors, setErrors] = useState({});
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://127.0.0.1:8000/api/', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //         if (!response.ok) {
    //             throw new Error('Failed to submit form');
    //         }
    //         const data = await response.json();
    //         if (data.success) {
    //             console.log('Form submitted successfully!');
    //             console.log('Customer ID:', data.customer_id);
    //         } else {
    //             console.error('Form submission failed:', data.error);
    //         }
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //         setErrors({ message: 'Failed to submit form. Please try again.' });
    //     }
    // };

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [emails,setEmail] = useState("")
    // const [country,setCountry] = useState("")
    // const [state,setState] = useState("")
    const [pincode,setPincode] = useState("")
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")
    const [apartment,setApartment] = useState("")
    const [city,setCity] = useState("")

    const history = useHistory()

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            let formField = new FormData()
        
            formField.append('firstName',firstName)
            formField.append('lastName',lastName)
            formField.append('emails',emails)
            // formField.append('country',country)
            // formField.append('state',state)
            formField.append('pincode',pincode)
            formField.append('address',setAddress)
            formField.append('phone',phone)
            formField.append('apartment',apartment)
            formField.append('city',city)
    
            await axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/',
                data: formField
            }).then((response) => {
                console.log(response.data);
                history.push('/checkout')
            })
        }
       
        catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error("Server responded with a status code:", error.response.status);
                console.error("Response data:", error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received from server.");
            } else {
                // Something else happened while setting up the request
                console.error("Error:", error.message);
            }
        }
    }



  return (
    <div className={styles.container}>
      <form action="http://127.0.0.1:8000/api/" method="post" onSubmit={handleSubmit}>
            <div className={styles.name}>
                <div className={styles.firstName}>
                    <label>First Name</label> <br/>
                    <input type='text' name='firstName' required id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    
                </div>

                <div className={styles.lastName}>
                    <label>Last Name</label> <br/>
                    <input type='text' name='lastName' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
            </div>
            {/* <div className={styles.country}>
                <label>Country/Region</label> <br/>
                <select name="country" value={country} onChange={(e) => setCountry(e.target.value)} label="Select 1">
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
            </div> */}
            <div >
                <label>Street address</label> <br/>
                <input type='text' name='apartment' value={apartment} onChange={(e) => setApartment(e.target.value)} placeholder='House number and apartment name' /> <br/> <br/>
                <input type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Street Address'/>
            </div>
            <div>
                <label>Town/City</label> <br/>
                <input type='text' name='city' value={city} onChange={(e) => setCity(e.target.value)}/>
            </div>
            {/* <div >
                <label>State</label> <br/>
                <select name="state" value={state} onChange={(e) => setState(e.target.value)} label="Select 2">
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
            </div> */}
            <div>
                <label>PIN Code</label> <br/>
                <input type='number' name='pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}/>
            </div>
            <div>
                <label>Phone</label> <br/>
                <input type='tel' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Email address</label> <br/>
                <input type='email' name='emails' value={emails} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Button type='submit' text='SUBMIT' onClick={handleSubmit}/>
            
        </form>
    </div>
  )
}

export default Form
