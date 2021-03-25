import React, {useState, useEffect} from 'react'
import './Sign-Up.css'

const SignUp = () => {

    const[show, setShow] = useState(false)
    
    return(
        <div className="form-container">
            <form className="form3">
                <div className="form-inner">
                    <div className ="part1">
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"/>
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
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address1">First Line of Address</label>
                            <input type="text" name="address1" id="address1"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address2">Second Line of Address</label>
                            <input type="text" name="address2" id="address2"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="postcode">Postcode</label>
                            <input type="text" name="postcode" id="postcode"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="city"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input type="text" name="country" id="country"/>
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