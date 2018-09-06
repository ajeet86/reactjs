import _ from 'lodash'; 

import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; 

import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'; 

import VideoDetails from './components/video_detail'; 



const API_KEY='AIzaSyB2_0RrqqO4MaFVmBN17BwnsjMNOzNaBPs';


// create a new compnent and this commponent redude some html  in
class  App  extends Component {
  constructor(props){
  	 super(props);
	   this.state={
		   videos:[] ,
		   selectedVideo:null
	};


		this.videoSearch('surfboard');

  }

  videoSearch(term){

  			YTSearch({key:API_KEY,term:term},(videos)=>{
			//console.log('cons in index');
			//console.log(videos);

				this.setState({
					
					videos:videos,
					selectedVideo:videos[0]

					
				});
		})
  }

	render(){
		//console.log(this.state.videos[0]);
		const videoSearch=_.debounce((term)=>{this.videoSearch(term)},400)
		   return(
			<div>
			<SearchBar onvideoSearch={videoSearch} />

			<VideoList videos={this.state.videos}  onVideoSelect={selectedVideo=>this.setState({selectedVideo})} />
			<VideoDetails  video1={this.state.selectedVideo} />
			</div>
			)
	}

	
}

//take this compnent genrated html put on page it meand on dome
ReactDOM.render(<App />,document.querySelector('.container1'));