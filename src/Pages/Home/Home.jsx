import React from 'react';
import Banner from './Components/Banner';
import ExploreChallenges from './Components/ExploreChallenges';
import Summary from './Components/Summary';
import WhyParticipate from './Components/WhyParticipate';
import './Home.css'

const Home = () => {
  return (
    <div>
      <Banner />
      <Summary />
      <WhyParticipate />
      <ExploreChallenges />
    </div>
  );
};

export default Home;