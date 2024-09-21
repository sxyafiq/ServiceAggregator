import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/styles/CompanyListing.css';

type Review = {
  reviewer_name: string;
  review: string;
  created_at: string;
};

type Company = {
  id: number;
  name: string;
  logo: string;
  google_place_id: string;
  facebook_page_id: string;
  whatsapp_link: string;
};

const CompanyListing: React.FC = () => {
  const [company, setCompany] = useState<Company | null>(null);
  const [googleReviews, setGoogleReviews] = useState<Review[]>([]);
  const [facebookReviews, setFacebookReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch company details and reviews
  useEffect(() => {
    const fetchCompany = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset error state

      try {
        const companyResponse = await axios.get('/api/companies/1'); // Assuming company ID 1
        setCompany(companyResponse.data);

        // Fetch Google reviews
        const googleReviewsResponse = await axios.get(`/api/companies/${companyResponse.data.id}/google-reviews`);
        setGoogleReviews(googleReviewsResponse.data);

        // Fetch Facebook reviews
        const facebookReviewsResponse = await axios.get(`/api/companies/${companyResponse.data.id}/facebook-reviews`);
        setFacebookReviews(facebookReviewsResponse.data);

        setLoading(false); // Stop loading after all data is fetched
      } catch (err) {
        console.error('Error fetching company data:', err); // Log error to console
        setError('Failed to load company data. Please try again later.');
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchCompany();
  }, []);

  // Return fallback UI for error or loading states
  if (loading) {
    return <div>Loading company data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!company) {
    return <div>No company data available.</div>;
  }

  return (
    <div className="company-listing">
      <div className="company-card">
        <img src={company.logo} alt={`${company.name} logo`} />
        <div className="company-details">
          <div className="company-name">{company.name}</div>
          {/* Google Reviews */}
          <h3>Google Reviews</h3>
          {googleReviews.length > 0 ? (
            <ul>
              {googleReviews.map((review, index) => (
                <li key={index}>
                  <strong>{review.reviewer_name}</strong>: {review.review}
                </li>
              ))}
            </ul>
          ) : (
            <p>No Google reviews available.</p>
          )}
          {/* Facebook Reviews */}
          <h3>Facebook Reviews</h3>
          {facebookReviews.length > 0 ? (
            <ul>
              {facebookReviews.map((review, index) => (
                <li key={index}>
                  <strong>{review.reviewer_name}</strong>: {review.review}
                </li>
              ))}
            </ul>
          ) : (
            <p>No Facebook reviews available.</p>
          )}
          {/* WhatsApp Link */}
          <a href={company.whatsapp_link} target="_blank" rel="noopener noreferrer">
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyListing;
