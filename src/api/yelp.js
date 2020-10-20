import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer vYWK6_97Wac1eCOkAfWvWiTf_L0qKnzF3cVjYJzq6ZLNgJ_KGddi5jIcCh7I_mhRJ1-et9AgZ5dUs_ZrbvSBvLtRd6qPhQ0S_V-kSKMhEwjE3LtqO0LzX0TuFF6EX3Yx'
    }
});

