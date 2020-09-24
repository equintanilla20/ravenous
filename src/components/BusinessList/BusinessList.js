import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {

	// Render
	render() {
		return (
			<div className="BusinessList">
				{
					this.props.businesses.map(business => {
						return <Business business={business} key={business.id} />
					})
				}
			</div>	
		);
	} // End render
}

// Export component
export default BusinessList;