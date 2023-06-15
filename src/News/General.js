import { React, useEffect, useState } from 'react';
import getNews from '../Functions/getNews';
import '../App.css';
import axios from "axios";
import Article from './Article';

const General = () => {

    const [data, setData] = useState("Loading");
    
    var options = {
        method: 'get',
        url: 'https://api.newscatcherapi.com/v2/search',
        params: {q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1'},
        headers: {
            'x-api-key': '0jz7SKothrPE7ZYbsPOpwHVNusTVF695YU58SDfMEAA'
        }
    };

    const fetchFeed = async () => {
        try {
            const response = await axios.request(options);
            setData(response.data);
        } catch (error) {
            setData(error.response);
        }
    };

    useEffect(() => {
        fetchFeed();
    }, []);
    
    
    return (
        <div>
            <p className='black'>hello</p>
            <p className='black'>{JSON.stringify(data)}</p>
        </div>
    );
};

export default General;