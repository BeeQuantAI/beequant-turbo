import React from 'react';
import Header from '@src/module/landing-page/Header';
import RegisterAndAboutUs from '@src/module/landing-page/RegisterAndAboutUs';
import StatsSection from '@src/module/landing-page/StatsSection';
import FeaturesSection from '@src/module/landing-page/FeaturesSection';
import TrendingDeals from '@src/module/landing-page/TrendingDeals';
import InvestmentOpportunities from '@src/module/landing-page/InvestmentOpportunities';
import Footer from '@src/module/landing-page/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="body body--home w-[100vw]">
      <Header />
      <RegisterAndAboutUs />
      <StatsSection />
      <FeaturesSection />
      <TrendingDeals />
      <InvestmentOpportunities />
      <Footer />
    </div>
  );
};

export default LandingPage;
