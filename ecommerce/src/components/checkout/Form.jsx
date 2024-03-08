import Button from '../home/button/Button'
import styles from './Form.module.css'


const Form = () => {
  return (
    <div className={styles.container}>
      <form>
            <div className={styles.name}>
                <div className={styles.firstName}>
                    <label>First Name</label> <br/>
                    <input type='text' name='firstName' id='firstName' />
                </div>

                <div className={styles.lastName}>
                    <label>Last Name</label> <br/>
                    <input type='text' name='lastName' id='lastName'/>
                </div>
            </div>
            <div className={styles.country}>
                <label>Country/Region</label> <br/>
                <select label="Select 1">
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
                <input type='text' placeholder='House number and street name' /> <br/> <br/>
                <input type='text' placeholder='Apartment,unit,etc. (optional)'/>
            </div>
            <div>
                <label>Town/City</label> <br/>
                <input type='text' />
            </div>
            <div >
                <label>State</label> <br/>
                <select label="Select 2">
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
                <input type='text' />
            </div>
            <div>
                <label>Phone</label> <br/>
                <input type='tel' />
            </div>
            <div>
                <label>Email address</label> <br/>
                <input type='email' />
            </div>
            <Button type='submit' text='SUBMIT'/>
        </form>
       

    </div>
  )
}

export default Form
