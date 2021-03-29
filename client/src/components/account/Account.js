import './Account.css';
import {useState, useEffect} from 'react';
const Account = () => {
  const [customers, setCustomers] = useState([]);
  const [customerID, setCustomerID] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    addressline1: '',
    addressline2: '',
    postcode: '',
     email: '',
     password:'',
   
  });
  const [updateData, setUpdateData] = useState({
    name: '',
    addressline1: '',
    addressline2: '',
    postcode: '',
     email: '',
     password:'',
  
  });
  const getCustomer = () => {
    fetch('http://localhost:3001/customer/all')
    .then(res => res.json())
    .then(res => setCustomers(res.data));
  }
  useEffect(() => {
    getCustomer();
  }, []);
  const deleteCustomer = async (id) => {
    let res = await fetch(`http://localhost:3001/customer/delete/${id}`, {
      method: 'DELETE'
    });
    res = await res.json();
    console.log(res);
    let newCustomers = customers.filter(customer => customer._id !== id);
    setCustomers(newCustomers);
  }
  const updateCustomer = async() => {
    let res = await fetch(`http://localhost:3001/customer/update/${customerID}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateData)
    });
    console.log(await res.json());
  }
  const showCustomers = () => {
    if (!customers) {
      return (
        <h2>No customers found</h2>
      )
    }
    return (
      customers.map((customer, i) => (
        <div key={i}>
          <p>name: {customer.name}</p>
          <p>addressline1: {customer.addressline1}</p>
          <p>addressline2: {customer.addressline2}</p>
          <p>postcode: {customer.postcode}</p>
          <p>email: {customer.email}</p>
          <p>password: {customer.password}</p>
  
        
          <button onClick={() => {deleteCustomer(customer._id)}}>Delete</button>
          <button onClick= {() => {setCustomerID(customer._id)}}>Update</button>
          <hr/>
        </div>
      ))
    )
  };
  const handleInputChange = (event) => {
    let newObj = {
      name: formData.name,
      addressline1: formData.addressline1,
      addressline2: formData.addressline2,
      postcode: formData.address,
     email:formData.email,
     password:formData.password,

    }
    newObj[event.target.name] = event.target.value;
    setFormData(newObj);
  }
  const handleUpdateChange = (event) => {
    let newObj = {
      name: updateData.name,
      addressline1: updateData.addressline1,
      addressline2: updateData.addressline2,
      postcode: updateData.address,
     email:updateData.email,
     password:updateData.password,
 
    }
    newObj[event.target.name] = event.target.value;
    setUpdateData(newObj);
  }
  const createCustomer = async(event) => {
    event.preventDefault();
    let res = await fetch('http://localhost:3001/customer/create',{
      method: 'POST',
      mode: 'cors',
      headers: {
      'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    console.log(await res.json());
  }
  return(
    <div className="container">
      <div className="box3">
        <h2>My Info</h2>
      {showCustomers()}
      </div>
      <div className="box1">
      <h2>Create Info</h2>
      <form onSubmit={createCustomer}>
        name: <input type='text' name='name' value={formData.name} onChange={handleInputChange}/>
     <br/>
        addressline1: <input type='text' name='addressline1' value={formData.addressline1} onChange={handleInputChange}/>
        <br/>
        addressline2: <input type='text' name='addressline2' value={formData.addressline2} onChange={handleInputChange}/>
        <br/>
        postcode: <input type='text' name='postcode' value={formData.postcode} onChange={handleInputChange}/>
        <br/>
        email: <input type='email' name='email' value={formData.email} onChange={handleInputChange}/>
        <br/>
        password: <input type='password' name='password' value={formData.password} onChange={handleInputChange}/>
        <br/>
      
        
        <input type='submit'/>
      </form>
      </div>
      <div className="box2">
      <h2>Update Password</h2>
      <button onClick={() => {updateCustomer()}}>
      
        password: <input type='password' name='password' value={updateData.password} onChange={handleUpdateChange}/>
        <br/>
       
        <input type='submit'/>
      </button>
      
      </div>
    </div>
  );
}
export default Account;