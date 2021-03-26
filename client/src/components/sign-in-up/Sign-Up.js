import React, {useState, useEffect} from 'react'
import './Sign-Up.css'

const SignUp = () => {
    const [customers, setCustomers] = useState([]);
   
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        name:'',
        address1:'',
        address2:'',
        postcode:'',
        city:'',
        country:''
     
    });
  
    const [show, setShow] = useState(false);
   
      useEffect(() => {
     
      }, []);


      const handleInputChange = (event) => {
        let newObj = {
            email:formData.email,
            password:formData.password,
          name: formData.name,
          address1: formData.address1,
          address2: formData.address2,
          postcode: formData.postcode,
          city:formData.city,
          country:formData.country
        
    
        }
        newObj[event.target.name] = event.target.value;
        setFormData(newObj);
      }
      const createCustomer = async(event) => {
        event.preventDefault();
        console.log(formData);
        let res = await fetch('http://localhost:3001/user/create',{
          method: 'POST',
          mode: 'cors',
          headers: {
          'content-type': 'application/json',
          'Accept': 'application/json'
          },
          body: JSON.stringify(formData)

        });
        console.log(await res.json());
        
      }
    
    return(
        <div className="form-container">
            <form onSubmit={createCustomer}>
                <div className="form-inner">
                    <div className ="part1">
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" value={formData.email} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange}/>
                        </div>
                        {!show?
                        <input className="submit-button" type="submit" value="SUBMIT"/>
                        :null}
                        <br/>
                        <br/>
                        <input type="radio" name="signup" value="SignIn" onChange={() => setShow(false)}/>Sign In
                        <br/>
                        <input type="radio" name="signup" value="SignUp" onChange={() => setShow(true)}/>Sign Up
                        <br/>
                        <br/>
                    </div>
                    {
                    show?
                    <div className="part2">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address1">First Line of Address</label>
                            <input type="text" name="address1" id="address1" value={formData.address1} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address2">Second Line of Address</label>
                            <input type="text" name="address2" id="address2" value={formData.address2} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="postcode">Postcode</label>
                            <input type="text" name="postcode" id="postcode" value={formData.postcode} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="city" value={formData.city} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input type="text" name="country" id="country" value={formData.country} onChange={handleInputChange}/>

                        </div>
                        <input type="submit" value="CREATE ACCOUNT"/>
                    </div>
                    : null
                    }
                </div>
                
            </form>
        </div>
    )
}
export default SignUp;