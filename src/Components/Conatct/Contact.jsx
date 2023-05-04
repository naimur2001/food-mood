import React from 'react';


const Contact = () => {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
    <div className="flex font-medium items-center mb-4">
   
      <p>123 Main St, Anytown USA</p>
    </div>
    <div className="flex items-center mb-4">
      
      <a href="mailto:info@example.com">info@example.com</a>
    </div>
    <div className="flex items-center mb-4">
    
      <a href="tel:123-456-7890">(123) 456-7890</a>
    </div>
  </div> 


  );
};

export default Contact;
