import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Layout from "./components/App";
import MainLayout from "./components/layout/MainLayout";
import SecoundLayout from "./components/layout/SecoundLayout";
import AboutPage from "./components/pages/aboutUs/AboutPage";
import BlogPage from "./components/pages/blog/BlogPage";
import BlogDetailsPage from "./components/pages/blogDetails/BlogDetailsPage";
import BlogStandardPage from "./components/pages/blogStandard/BlogStandardPage";
import CommingSoonPage from "./components/pages/commingSoon/CommingSoonPage";
import Careers from "./components/pages/contact/Careers";
import CareersDetails from "./components/pages/contact/CareersDetails";
import ContactPage from "./components/pages/contact/ContactPage";
import JobForm from "./components/pages/contact/JobForm";
import ErrorPage from "./components/pages/Error/ErrorPage";
import HomePage2 from "./components/pages/Home2/HomePage2";
import ProjectDetailsPage from "./components/pages/projectDetails/ProjectDetailsPage";
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import ServicesPage from "./components/pages/service/Serevices";
import AIDetails from "./components/pages/ServiceDetails/AIDetails";
import AIWrapper from "./components/pages/ServiceDetails/AIWrapper";
import BlockChainDetails from "./components/pages/ServiceDetails/BlockChainDetails";
import CloudComputingDetails from "./components/pages/ServiceDetails/CloudComputingDetails";
import CloudComputingWrapper from "./components/pages/ServiceDetails/CloudComputingWrapper";
import CyberSecurityDetails from "./components/pages/ServiceDetails/CyberSecurityDetails";
import Ecommerce from "./components/pages/ServiceDetails/Ecommerce";
import EcommerceDetails from "./components/pages/ServiceDetails/EcommerceDetails";
import IOTDetails from "./components/pages/ServiceDetails/IOTDetails";
import IOTWrapper from "./components/pages/ServiceDetails/IOTWrapper";
import MobileAppDevelopmentDetails from "./components/pages/ServiceDetails/MobileAppDevelopmentDetails";
import OffShoreDetails from "./components/pages/ServiceDetails/OffShoreDetails";
import PrototypeAndStrategyDetails from "./components/pages/ServiceDetails/PrototypeAndStrategyDetails";
// import ServicesPage from "./components/pages/service/ServicesPage";
import ServiceDetails from "./components/pages/ServiceDetails/ServiceDetails";

// all css import
import "./index.css";

//Default Warniing Error Hide
console.log = console.warn = console.error = () => {};

/*
=>version : 0.1
=>Event : Rendering al content to web
=>Action: define all routes and page
@return HTML
*/

function Root() {
  return (
    <>
      <BrowserRouter basename="/">
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/commingsoon`}
            component={CommingSoonPage}
          />
          <Route exact path="/" component={SecoundLayout} />
          <Layout>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home2`}
              component={HomePage2}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              component={AboutPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/service`}
              component={ServicesPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/service-details`}
              component={ServiceDetails}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/cloud-computing-details`}
              component={CloudComputingDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/mobile-details`}
              component={MobileAppDevelopmentDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/prototype-details`}
              component={PrototypeAndStrategyDetails}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/blockchain-details`}
              component={BlockChainDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/ecommerce-details`}
              component={Ecommerce}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/IOT-details`}
              component={IOTDetails}
            />
              <Route
              exact
              path={`${process.env.PUBLIC_URL}/AI-details`}
              component={AIDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/cyber-secuity-details`}
              component={CyberSecurityDetails}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/offshore-details`}
              component={OffShoreDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/project`}
              component={ProjectsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/project-details`}
              component={ProjectDetailsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog`}
              component={BlogPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/Blog-standard`}
              component={BlogStandardPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/Blog-details`}
              component={BlogDetailsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/error`}
              component={ErrorPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={ContactPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/careers`}
              component={Careers}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/CareersDetails/:userId`}
              component={CareersDetails}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/jobForm`}
              component={JobForm}
            />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Root />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
