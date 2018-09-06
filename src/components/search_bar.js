//export module
//class 
//state 
import React,{ Component } from 'react';

//define this component  how we load to index  in

/*const SarchBar = () => {

	return <input />
};*/

class SarchBar extends Component{

constructor(props){

	super(props);//component its have its own contructor and we can call its 
				//super by parent method
	this.state={term:''};//state its use a new object and its property here its term is a property 
}



	//every class baised component have its render method and return some code

	render(){

		//return <input onChange={this.onInputChange} />;

		return(
			 //below input is a controled input and its value is controled by state term
			<div className="search-bar">
			
				<input value={this.state.term}

				onChange={event=> this.onInputChange(event.target.value)} />
				
			</div>

			) 
	}

	onInputChange(term){
      //console.log(event.target.value);
      //console.log(event);
      this.setState({term});
      this.props.onvideoSearch(term);
	}
}

// delclear event and its handler 



// es 6 class baised component 



//state =>every class baised components have its own state when a stste is change of a class baised 
//component then its re render its render function and if its render function have children component 
//then its also re render children componet 





//how to export file 
export default SarchBar; 