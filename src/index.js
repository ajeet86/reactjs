import React from 'react';
import ReactDOM from 'react-dom'; 


// create a new compnent and this commponent redude some html 
const App =() => {

	return <div>hihihihih<ul><li>1</li><li>2</li><li>3</li></ul></div>;
}

//take this compnent genrated html put on page it meand on dome
ReactDOM.render(<App />,document.querySelector('.container1'));