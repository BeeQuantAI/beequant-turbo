import "bootstrap/dist/css/bootstrap.min.css";
import "@src/assets/css/style-common.css";
import "@src/assets/css/style-header.css";
import "@src/assets/css/style-hero.css";
import "@src/assets/css/style-section.css";
import "@src/assets/css/style-feature.css";
import "@src/assets/css/style-deals.css";
import "@src/assets/css/style-investment.css";
import "@src/assets/css/style-footer.css";
import React from "react";
import Header from "@src/module/landing-page/Header";
import RegisterAndAboutUs from "@src/module/landing-page/RegisterAndAboutUs";
import StatsSection from "@src/module/landing-page/StatsSection";
import FeaturesSection from "@src/module/landing-page/FeaturesSection";
import TrendingDeals from "@src/module/landing-page/TrendingDeals";
import InvestmentOpportunities from "@src/module/landing-page/InvestmentOpportunities";
import Footer from "@src/module/landing-page/Footer";
import { LandingRoute } from "@src/module/landing-page/route";

export const metadata = LandingRoute.Root.Metadata;

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
