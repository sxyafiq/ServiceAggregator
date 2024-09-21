// eslint-disable
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/styles/CompanyListing.css';



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
  const [googleReviews, setGoogleReviews] = useState<any[]>([]);
  const [facebookReviews, setFacebookReviews] = useState<any[]>([]);
  const [inHouseReviews, setInHouseReviews] = useState<Review[]>([]);

  // Fetch company details
  useEffect(() => {
    async function fetchCompany() {
      try {
        const response = await axios.get('/api/companies/1'); // Assuming company ID is 1 for now
        setCompany(response.data);
      } catch (error) {
        console.error('Error fetching company details', error);
      }
    }
    fetchCompany();
  }, []);

  // Fetch reviews (Google, Facebook, In-house)
  useEffect(() => {
    if (company) {
      // Fetch Google reviews
        axios.get('/api/companies/1/google-reviews')
            .then((response) => {
                setGoogleReviews(response.data);
            })
            .catch((error) => {
                console.error('Error fetching Google reviews:', error);
                // Optionally, set a fallback state to show an error message in the UI
                setGoogleReviews([]); // Empty array or placeholder data
            });
      // Fetch Facebook reviews
        axios.get(`/api/companies/${company.id}/facebook-reviews`)
            .then((response) => {
                setFacebookReviews(response.data);
            })
            .catch((error) => {
                console.error('Error fetching Facebook reviews:', error);
                setFacebookReviews([]); // Show fallback if there's an error
            });
      // Fetch in-house reviews
        axios.get(`/api/companies/${company.id}/inhouse-reviews`)
            .then((response) => {
                setInHouseReviews(response.data);
            })
            .catch((error) => {
                console.error('Error fetching in-house reviews:', error);
                setInHouseReviews([]); // Show fallback if there's an error
            });
    }
  }, [company]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div className="company-listing">
      <img src={company.logo} alt={`${company.name} logo`} />
      <h2>{company.name}</h2>
      <a href={company.whatsapp_link} target="_blank" rel="noopener noreferrer">
        Contact on WhatsApp
      </a>

      <h3>Google Reviews</h3>
      {googleReviews.length > 0 ? (
        <ul>
          {googleReviews.map((review, index) => (
            <li key={index}>
              <strong>{review.author_name}</strong>: {review.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Google reviews available.</p>
      )}

      <h3>Facebook Reviews</h3>
      {facebookReviews.length > 0 ? (
        <ul>
          {facebookReviews.map((review, index) => (
            <li key={index}>
              <strong>{review.reviewer_name}</strong>: {review.review_text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Facebook reviews available.</p>
      )}

      <h3>In-House Reviews</h3>
      {inHouseReviews.length > 0 ? (
        <ul>
          {inHouseReviews.map((review) => (
            <li key={review.created_at}>
              <strong>{review.reviewer_name}</strong>: {review.review}
            </li>
          ))}
        </ul>
      ) : (
        <p>No in-house reviews available.</p>
      )}
    </div>
  );
};

export default CompanyListing;
