import React from 'react';
import Carousel from '../components/Carousel';
import TabCategories from '../components/TabCategories';
import { useLoaderData } from 'react-router';

const Home = () => {
    // const jobs = useLoaderData();
    // console.log(jobs);
    return (
        <div>
            <Carousel/>
            <TabCategories/>
        </div>
    );
};

export default Home;