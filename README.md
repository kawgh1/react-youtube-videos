## Create React App for calling the Youtube API to return videos of things a user searched for
- This was based off a course created by [Stephen Grider](https://www.udemy.com/course/react-redux/)

### To view the live site click [here](https://xenodochial-ptolemy-17e31f.netlify.app/)

### Tools Used

- #### Semantic UI CDN

    < link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

- #### Youtube Data API v3
    - http://console.developers.google.com/
    - https://developers.google.com/youtube/v3/

- #### Axios
    - 3rd party package for handling API requests, beefed up version of fetch()
    - **npm install --save axios**
    - Example GET call to API with Unsplash authorization header and query param
        
        Ex)

            state = {images: []};

            onSearchSubmit = async (term) =>

                // axios call
                axios.get('https://api.unsplash.com/search/photos', {
                    params: { query: term},
                    headers: {
                        Authorization: 'Client-ID jFsdf0As0910912HJ0hf0-9jhasd@lk'
                    }
                })

                this.setState({ images: response.data.results });
                
            }


## Component Architecture
![App Component Diagram](https://github.com/kawgh1/react-youtube-videos/blob/main/app-component-heirarchy1.png)
![App Component Layout](https://github.com/kawgh1/react-youtube-videos/blob/main/component-layout.png)

### Video Selector Callback Function
![App-Architecture](https://github.com/kawgh1/react-youtube-videos/blob/main/component-arch.png)
### Deeply Nested Callbacks
- 'selectedVideo' is stored in App this.state
    - a method **'onVideoSelect()'** is passed down from App to Child Component **VideoList** and to VideoList's Child Component *VideoItem**
        - When user selects a new video on the screen, that VideoItem calls the onVideoSelect callback function, which trickles up through Parent Component VideoList to App
            - now we have a reference in App's this.state to the user selected video, which we will then display a larger thumbnail on the screen


### Notes

### Things I Learned

#### - Handling API Keys using the .env file
- https://lortza.github.io/2018/05/22/create-react-app-api-keys.html
1. Create a file called .env in the root of your project’s directory.
2. Inside the .env file, prepend REACT_APP_ to your API key name of choice and assign it.

        REACT_APP_YOUR_API_KEY_NAME=your_api_key  <-- yes
        YOUR_API_KEY_NAME=your_api_key            <-- no

        # Example:
        REACT_APP_WEATHER_API_KEY=123456123456123456


3. Add the .env file to your .gitignore file.
4. Access the API key via the process.env object.
   - **process.env.REACT_APP_YOUR_API_KEY_NAME**

To make sure it works, go to your App.js file and add a console.log at the top below the require statements. After saving the file and refreshing the browser, if the console log does not show your API key, try restarting the react server. Remove the console log line before committing your code.

        // src/App.js

        import React, { Component } from 'react';
        import './App.css';

        console.log(process.env.REACT_APP_WEATHER_API_KEY)

        class App extends Component {
        ...
