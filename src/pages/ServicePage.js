import React from 'react';

const ServicePage = ({ match }) => {
  const { id } = match.params;
  
  // Fetch service details based on the service ID
  return (
    <div>
      <h1>Service Details for {id}</h1>
      {/* Display more detailed information here */}
    </div>
  );
};

export default ServicePage;
