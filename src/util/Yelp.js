const apiKey = 'wPqBNpZ5v45InPQ8Uy1panZyjChXeC2pVHyy96w_Uw5ZghKxnaL9V0TA2Lj5w_MOXp3P5JsP312n53bBvBkj0WBOeut4UuPsLUeKgQa7CNrxQwb1wmLYaCnS7c2tWnYx'; // Insert API key here.

const Yelp = {
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => {
			return response.json()
		}).then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => ({
					id: business.id,
					imageSrc: business.image_url,
					name: business.name,
					address: business.location.address1,
					city: business.location.city,
					state: business.location.state,
					zipCode: business.location.zip_code,
					category: business.categories[0].title,
					rating: business.rating,
					reviewCount: business.review_count
				}));
			}
		});
	}
};

export default Yelp;