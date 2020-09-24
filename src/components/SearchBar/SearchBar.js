import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		};
		
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSortByChange = this.handleSortByChange.bind(this);

		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count'
		};
	} // End Constructor

	getSortByClass(sortByOption) {
		if (this.state.sortBy === sortByOption) {
			return 'active';
		} 
		return '';
	} // End getSortByClass
	
	handleSortByChange(sortByOption) {
		this.setState({sortBy: sortByOption});
	} // End handlerSortByChange

	handleTermChange(event) {
		this.setState({term: event.target.value});
	} // End handleTermChange

	handleLocationChange(event) {
		this.setState({location: event.target.value});
	} // End handleLocationChange

	handleSearch(event) {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

		event.preventDefault();
	} // End handlerSearch

	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map(sortByOption => {
			let sortByOptionValue = this.sortByOptions[sortByOption];
			return (<li className={this.getSortByClass(sortByOptionValue)}
						      key={sortByOptionValue}
						      onClick={this.handleSortByChange}>
						    {sortByOption} 
					   </li>);
		});
	} // End renderSortByOptions

	// Render
	render() {
		return (
			<div className="SearchBar">
				<div className="SearchBar-sort-options">
					<ul>
						{this.renderSortByOptions()}
					</ul>
				</div>
				<div className="SearchBar-fields">
					<input placeholder="Search Businesses" onChange={this.handleTermChange} />
					<input placeholder="Where?" onChange={this.handleLocationChange}/>
				</div>
				<div className="SearchBar-submit">
					<a onClick={this.handleSearch}>Let's Go</a>
				</div>
			</div>
		);
	} // End Render
}

// Export component
export default SearchBar;