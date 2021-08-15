## Create React App for calling the Youtube API to return videos of things a user searched for

### Tools Used

- **Semantic UI CDN**

    < link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

- Youtube Data API v3
    - http://console.developers.google.com/
    - https://developers.google.com/youtube/v3/


## Component Architecture
![App Component Diagram](https://github.com/kawgh1/react-youtube-videos/blob/main/app-component-heirarchy1.png)


### Notes

### Things I Learned

#### - Handling API Keys using the .env file
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
