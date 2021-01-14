import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavbarHome from "./navbar/NavbarHome";
import Footer from "./footer/Footer";
import HomePageInner from "./homepage/HomePageInner";
import DigitalServices from "./services/DigitalServices";
import AgileTransformation from "./services/AgileTransformation";
import SoftwareDelivery from "./services/SoftwareDelivery";
import CyberSecurity from "./services/CyberSecurity";
import WeAreBest from "./homepage/homePageComponents/WeAreBest";
import CareerHome from "./career/CareerHome";
import LinuxAndCloudEngineer1 from "./career/careercomponents/LinuxAndCloudEngineer1";
import LinuxAndCloudEngineer2 from "./career/careercomponents/LinuxAndCloudEngineer2";
import LinuxAndCloudEngineer3 from "./career/careercomponents/LinuxAndCloudEngineer3";
import LinuxAndCloudEngineer4 from "./career/careercomponents/LinuxAndCloudEngineer4";
import CloudProductAnalyst from "./career/careercomponents/CloudProductAnalyst";
import AboutUs from "./about/AboutUs";
import ServicesHomeTab from "./serviceshometab/ServicesHomeTab";
import AgileSoftwareDevelopment from "./serviceshometab/servicesHomeTabCompenents/AgileSoftwareDevelopment";
import ApplicationSecurity from "./serviceshometab/servicesHomeTabCompenents/ApplicationSecurity";
import AWSManagedServices from "./serviceshometab/servicesHomeTabCompenents/AWSManagedServices";
import AzureManagedServices from "./serviceshometab/servicesHomeTabCompenents/AzureManagedServices";
import DataMigration from "./serviceshometab/servicesHomeTabCompenents/DataMigration";
import Engineering from "./serviceshometab/servicesHomeTabCompenents/Engineering";
import FinancialConsulting from "./serviceshometab/servicesHomeTabCompenents/FinancialConsulting";
import Operation from "./serviceshometab/servicesHomeTabCompenents/Operation";
import ContactUs from "./contactus/ContactUs";

export class Menu extends Component {
  render() {
    return (
      <div>
        <NavbarHome />
        <Switch>
          <Route exact path="/" component={HomePageInner} />
          <Route exact path="/digitalservices" component={DigitalServices} />
          <Route
            exact
            path="/agiletransformation"
            component={AgileTransformation}
          />
          <Route exact path="/softwaredelivery" component={SoftwareDelivery} />
          {/* <Route exact path="/uxui" component={UiUx} />
          <Route exact path="/devops" component={Devops} /> */}
          <Route exact path="/cybersecurity" component={CyberSecurity} />
          <Route exact path="/wearebest" component={WeAreBest} />
          <Route exact path="/careerhome" component={CareerHome} />

          <Route
            exact
            path="/careerhome/linuxAndcloudengineer1"
            component={LinuxAndCloudEngineer1}
          />
          <Route
            exact
            path="/careerhome/linuxAndcloudengineer2"
            component={LinuxAndCloudEngineer2}
          />
          <Route
            exact
            path="/careerhome/linuxAndcloudengineer3"
            component={LinuxAndCloudEngineer3}
          />
          <Route
            exact
            path="/careerhome/linuxAndcloudengineer4"
            component={LinuxAndCloudEngineer4}
          />
          <Route
            exact
            path="/careerhome/cloudproductanalyst"
            component={CloudProductAnalyst}
          />
          <Route
            exact
            path="/aboutus"
            component={AboutUs}
          />
          <Route
            exact
            path="/contactus"
            component={ContactUs}
          />
          <Route
            exact
            path="/serviceshometab"
            component={ServicesHomeTab}
          />
          <Route
            exact
            path="/agilesoftwaredevelopment"
            component={AgileSoftwareDevelopment}
          />
          <Route
            exact
            path="/applicationsecurity"
            component={ApplicationSecurity}
          />
          <Route
            exact
            path="/awsmanagedservices"
            component={AWSManagedServices}
          />
          <Route
            exact
            path="/azuremanagedservices"
            component={AzureManagedServices}
          />
          <Route
            exact
            path="/datamigration"
            component={DataMigration}
          />
          <Route
            exact
            path="/engineering"
            component={Engineering}
          />
          <Route
            exact
            path="/financialconsulting"
            component={FinancialConsulting}
          />
          <Route
            exact
            path="/operation"
            component={Operation}
          />
          
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Menu;
