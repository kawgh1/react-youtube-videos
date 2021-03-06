import React, { useEffect, useState} from 'react'
import SearchBar from './SearchBar'
// import youtube from '../apis/youtube'
import useVideos from '../hooks/useVideos'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import './App.css'





const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [matches, setMatches] = useState(window.matchMedia("(min-width:768px)").matches);

    // Custom Hook
    const [videos, search] = useVideos('cats');

    useEffect(() => {
        setSelectedVideo(videos[0]);

    }, [videos]);

 
    // check screen resolution for best display
    const handler = e => setMatches({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addListener(handler);

 

    const onVideoSelect = (video) => {

        // console.log('From the App1', video); // show the video the user just clicked on
        setSelectedVideo(video);

        window.scrollTo({top: 0, behavior: 'smooth'}); // not supported on Safari

        // once video is clicked, scroll to top of page
        document.body.scrollTop = 0; // For Safari
        // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        
    }

    

    return (
        
        <div>
            {/* Display for Big screen > 768px */}
            {matches && (
                <div className="ui container">
                    <SearchBar onFormSubmit={search}/>
                    
                    <div className="ui grid">
                        <div className="ui row">

                            <div className="eleven wide column">
                                
                                <VideoDetail video={selectedVideo} />
                                
                            </div>
                            <div className="five wide column">
                                <h5 className="message">I have {videos.length} videos for you!</h5>
                                <VideoList  onVideoSelect={onVideoSelect} videos={videos} />
                            </div>

                        </div>
                    </div>
                    
                </div>
        )}

            {/* Display for Small screen < 768px */}
            {!matches && (
                <div className="ui container">
                    <SearchBar onFormSubmit={search}/>
                    <div className="ui grid">
                        <div className="ui row container">

                            <div>
                                <VideoDetail video={selectedVideo} />
                                <h5 className="message">I have {videos.length} videos for you!</h5>
                            </div>
                            <div>
                                <VideoList  onVideoSelect={onVideoSelect} videos={videos} />
                            </div>

                        </div>
                    </div>
                    
                </div>
            )}
        </div>
        
        );

};

export default App;



// class App extends React.Component {

//     state = { 
//         videos: [],
//         selectedVideo: null,
//         matches: window.matchMedia("(min-width:768px)").matches 
//     };

//     onTermSubmit = async (term) => {
//         // console.log(term);
//         const response = await youtube.get('/search', {
//         params: {
//             q: term // 'q' for query
//         }
//         });

//         // console.log(response);
//         this.setState( { 
//             videos: response.data.items,
//             selectedVideo: response.data.items[0] // show the first returned video as the selected / featured video
//         });
//     };

//     onVideoSelect = (video) => {

//         // console.log('From the App1', video); // show the video the user just clicked on
//         this.setState( {selectedVideo: video});

//         window.scrollTo({top: 0, behavior: 'smooth'}); // not supported on Safari

//         // once video is clicked, scroll to top of page
//         document.body.scrollTop = 0; // For Safari
//         // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        
//     }

    // componentDidMount() {
    //     const handler = e => this.setState({matches: e.matches});
    //     window.matchMedia("(min-width: 768px)").addListener(handler);

    //     // default display cat videos
    //     this.onTermSubmit('cats');
    //   }

//     render() {
//         return (
        
//         <div>
//             {/* Display for Big screen > 768px */}
//             {this.state.matches && (
//                 <div className="ui container">
//                     <SearchBar onFormSubmit={this.onTermSubmit}/>
                    
//                     <div className="ui grid">
//                         <div className="ui row">

//                             <div className="eleven wide column">
                                
//                                 <VideoDetail video={this.state.selectedVideo} />
                                
//                             </div>
//                             <div className="five wide column">
//                                 <h5 className="message">I have {this.state.videos.length} videos for you!</h5>
//                                 <VideoList  onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//                             </div>

//                         </div>
//                     </div>
                    
//                 </div>
//         )}

//             {/* Display for Small screen < 768px */}
//             {!this.state.matches && (
//                 <div className="ui container">
//                     <SearchBar onFormSubmit={this.onTermSubmit}/>
//                     <div className="ui grid">
//                         <div className="ui row container">

//                             <div>
//                                 <VideoDetail video={this.state.selectedVideo} />
//                                 <h5 className="message">I have {this.state.videos.length} videos for you!</h5>
//                             </div>
//                             <div>
//                                 <VideoList  onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//                             </div>

//                         </div>
//                     </div>
                    
//                 </div>
//             )}
//         </div>
        
//         );
//     }
// }

// export default App;