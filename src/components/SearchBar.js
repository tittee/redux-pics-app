import React from 'react';


class SearchBar extends React.Component{
	onInputChange(event){
		console.log(event.target.value);
	};
	onInputClick(event){
		console.log('Input was clicked.');
	}

	state = { term: '' }; 

	render(){
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input 
							type='text' 
							name='seach'
							value={this.state.term}
							onChange={ (e)=> this.setState({ term: e.target.value }) } />
					</div>
				</form>
			</div>
		);
	}
};

export default SearchBar;