import React, { Fragment } from "react";
import { Header, Footer, CookiesMessage, ScrollToTop } from "..";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../../pages/index/index.jsx";
import AboutUs from "../../pages/about-us/about-us.jsx";
import OurPeople from "../../pages/our-people/our-people.jsx";
import OurMission from "../../pages/our-mission/our-mission.jsx";
import TeamSkills from "../../pages/team-skills/team-skills.jsx";
import OurDeliveryProcess from "../../pages/our-delivery-process/our-delivery-process.jsx";
import OurLeaders from "../../pages/our-leaders/our-leaders.jsx";
import SoftwareDevelopment from "../../pages/software-development/software-development.jsx";
import QaAutomation from "../../pages/qa-automation/qa-automation.jsx";
import Cloud from "../../pages/cloud/cloud.jsx";
import BusinessIntelligence from "../../pages/business-intelligence/business-intelligence.jsx";
import AgileConsulting from "../../pages/agile-consulting/agile-consulting.jsx";
import Devops from "../../pages/DEVOPS/devops.jsx";
import DigitalTransformation from "../../pages/digital-transformation/digital-transformation.jsx";
import TeamAugmentation from "../../pages/team-augmentation/team-augmentation.jsx";
import ProjectBased from "../../pages/project-based/project-based.jsx";
import ProductDevelopment from "../../pages/product-development/product-development.jsx";
import DedicatedTeams from "../../pages/dedicated-teams/dedicated-teams.jsx";
import OurServices from "../../pages/our-services/our-services.jsx";
import CaseStudy from "../../pages/case-study/case-study.jsx";
import IndustryPage from "../../pages/industry-page/industry-page.jsx";
import Industries from "../../pages/industries/industries.jsx";
import NotFoundPage from "../../pages/not-found-page/not-found-page.jsx";
import NewsPage from "../../pages/news-page/news-page.jsx";
import NewsListPage from "../../pages/news-list-page/news-list-page.jsx";
import JobPage from "../../pages/job-page/job-page.jsx";
import JobsListPage from "../../pages/jobs-list-page/jobs-list-page.jsx";
import GetInTouch from "../../pages/get-in-touch/get-in-touch.jsx";
import LocationPage from "../../pages/location-page/location-page.jsx";
import CareersPage from "../../pages/careers-page/careers-page.jsx";
import TechnologyPage from "../../pages/technology-page/technology-page.jsx";
import PrivacyPage from "../../pages/privacy/privacy.jsx";

import "./app.css";

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Header />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/our-people" component={OurPeople} />
              <Route path="/our-mission" component={OurMission} />
              <Route path="/team-skills" component={TeamSkills} />
              <Route
                path="/our-delivery-process"
                component={OurDeliveryProcess}
              />
              <Route path="/our-leaders" component={OurLeaders} />
              <Route
                exact
                path="/software-development"
                component={SoftwareDevelopment}
              />
              <Route path="/qa-automation" component={QaAutomation} />
              <Route path="/cloud" component={Cloud} />
              <Route
                path="/business-intelligence"
                component={BusinessIntelligence}
              />
              <Route path="/agile-consulting" component={AgileConsulting} />
              <Route path="/continuous-delivery" component={Devops} />
              <Route
                path="/digitaltransformation"
                component={DigitalTransformation}
              />
              <Route path="/team-augmentation" component={TeamAugmentation} />
              <Route path="/project-based" component={ProjectBased} />
              <Route
                path="/product-development"
                component={ProductDevelopment}
              />
              <Route path="/dedicated-teams" component={DedicatedTeams} />
              <Route path="/our-services" component={OurServices} />
              <Route
                path="/software-development/:id"
                component={TechnologyPage}
              />
              <Route exact path="/industries" component={Industries} />
              <Route path="/case-study/:id" component={CaseStudy} />
              <Route path="/industries/:id" component={IndustryPage} />
              <Route path="/news/:id" component={NewsPage} />
              <Route exact path="/news" component={NewsListPage} />
              <Route path="/jobs/:id" component={JobPage} />
              <Route exact path="/jobs" component={JobsListPage} />
              <Route exact path="/get-in-touch/" component={GetInTouch} />
              <Route path="/get-in-touch/:id" component={LocationPage} />
              <Route path="/careers" component={CareersPage} />
              <Route path="/privacy/" component={PrivacyPage} />

              <Route component={NotFoundPage} />
            </Switch>
            <CookiesMessage />
            <Switch>
              <Route exact path="/" render={() => <Footer />} />
              <Route exact path="/get-in-touch/" render={() => <Footer />} />
              <Route render={() => <Footer extended={true} />} />
            </Switch>
          </ScrollToTop>
        </Fragment>
      </Router>
    </div>
  );
}
export default App;
