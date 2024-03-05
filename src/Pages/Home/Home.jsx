import React from 'react';
import Banner from '../Banner/Banner';
import BannerForm from '../Banner/BannerForm';

const Home = () => {
    return (
        <div>
            <div className='mb-20'>
            <BannerForm></BannerForm>
            </div>
            
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Home;