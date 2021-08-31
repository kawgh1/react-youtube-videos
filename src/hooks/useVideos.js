import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {


    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // default display cat videos
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        // console.log(term);
        const response = await youtube.get('/search', {
        params: {
            q: term // 'q' for query
        }
        });

        setVideos(response.data.items);
        
    };

    // return an object is the JS convention
    // return {videos, search};
    // return an array is the React convention

    // so anywhere we use this Custom Hook we will get back a list of videos and a function search() to update that list of videos
    return [videos, search];
};

export default useVideos;

