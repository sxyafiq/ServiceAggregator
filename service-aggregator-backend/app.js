const express = require('express');
const mysql = require('mysql2/promise');
const axios = require('axios');
const app = express();
const PORT = 3000;

// MySQL Connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'service_user',
    password: 'service_password',
    database: 'service_aggregator'
});

// Placeholder for Google and Facebook API keys
const GOOGLE_API_KEY = 'your_google_api_key';
const FACEBOOK_API_KEY = 'your_facebook_api_key';

// Middleware to parse JSON
app.use(express.json());

/**
 * Fetch company details
 */
app.get('/api/companies/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM companies WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * Fetch Google Reviews for a company
 */
app.get('/api/companies/:id/google-reviews', async (req, res) => {
    const { id } = req.params;
    try {
        const [company] = await pool.query('SELECT google_place_id FROM companies WHERE id = ?', [id]);
        if (company.length === 0) {
            return res.status(404).json({ message: 'Company not found' });
        }

        const googleApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${company[0].google_place_id}&key=${GOOGLE_API_KEY}`;
        const response = await axios.get(googleApiUrl);
        const reviews = response.data.result.reviews;

        res.json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Google reviews' });
    }
});

/**
 * Fetch Facebook Reviews for a company
 */
app.get('/api/companies/:id/facebook-reviews', async (req, res) => {
    const { id } = req.params;
    try {
        const [company] = await pool.query('SELECT facebook_page_id FROM companies WHERE id = ?', [id]);
        if (company.length === 0) {
            return res.status(404).json({ message: 'Company not found' });
        }

        const facebookApiUrl = `https://graph.facebook.com/${company[0].facebook_page_id}/ratings?access_token=${FACEBOOK_API_KEY}`;
        const response = await axios.get(facebookApiUrl);
        const reviews = response.data.data;

        res.json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Facebook reviews' });
    }
});

/**
 * Fetch In-house reviews for a company
 */
app.get('/api/companies/:id/inhouse-reviews', async (req, res) => {
    const { id } = req.params;
    try {
        const [reviews] = await pool.query('SELECT * FROM reviews WHERE company_id = ?', [id]);
        res.json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching in-house reviews' });
    }
});

/**
 * Add an In-house review for a company
 */
app.post('/api/companies/:id/inhouse-reviews', async (req, res) => {
    const { id } = req.params;
    const { review, reviewer_name } = req.body;
    try {
        await pool.query('INSERT INTO reviews (company_id, review, reviewer_name) VALUES (?, ?, ?)', [id, review, reviewer_name]);
        res.status(201).json({ message: 'Review added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding review' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
