## Create React App for calling the Youtube API to return videos of things a user searched for
- This was based off a course created by [Stephen Grider](https://www.udemy.com/course/react-redux/)
- Original React App w/o Hooks - old branch `main`
- Refactored and added Hooks - this branch `react-youtube-hooks`

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

## Things I Added
- Styling, responsive mobile view using hooks

## Things I Learned

### Custom Hooks
- #### Refactoring / Design
    - If a Class Component has State defined -> refactor it into a Functional Component with useState() hook
    - If a Class Component uses no LifeCycle Methods -> no need for useEffect() hook

    - ## CUSTOM HOOKS
        - To refactor JSX / View code -> make a new Component
        - To refactor existing hooks, functions and logic -> make a Custom Hook

        - In general, Custom Hooks are **not** concerned with displaying JSX
        - Best way to create reusable code in a React project (besides Components!)
        - Created by extracting hook-related code out of a Functional Component
        - Custom hooks **always** make use of at least one primitive hook internally
        - Each custom hook should have only **one purpose** (scope creep)
        - Kind of an art
        - Data-fetching is a great thing to try to make reusable

    - ## PROCESS FOR CREATING REUSABLE HOOKS
        - **1). Identify each line of code related to some single purpose**
        - **2). Identify the inputs to that code**
        - **3). Identify the outputs to that code**
        - **4). Extract all the code into a separate function, receiving the inputs as arguments, and returning the outputs**

### Media Queries inside React

    

You can make media queries inside React:

    import React, { useState, useEffect } from 'react';

    const App = () => {

        ...
        const [matches, setMatches] = useState(window.matchMedia("(min-width:768px)").matches);

        useEffect(() => {

            const handler = e => setMatches({matches: e.matches});
            window.matchMedia("(min-width: 768px)").addListener(handler);
            ...
        }, []);


            return (
                <div>

                    {matches && (...<h1>Big Screen</h1>...)}

                    {!matches && (...<h3>Small Screen</h3>...)}

                </div>
            );

        }

- https://stackoverflow.com/questions/54491645/media-query-syntax-for-reactjs
    - from user: https://stackoverflow.com/users/1079908/ferit



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
