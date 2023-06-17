import { useRef, useEffect, useState, React } from 'react';
import '../App.css';
import NewsNavigation from '../Components/NewsNavigation';
import { Outlet } from 'react-router-dom';


const News = () => {

    return (
        <div className='news'>
            <h1>Teaspoon News</h1>
            <NewsNavigation/>
            <Outlet/>
        </div>
    );
}

export default News;