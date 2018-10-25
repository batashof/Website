import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./service-tile.css";
import {
  DevopsIcon,
  DevelopmentIcon,
  QAIcon,
  AgileIcon,
  CloudIcon,
  DigitalTransformationIcon,
  BIIcon,
  MicrosoftIcon,
  JavaIcon,
  PHPIcon,
  QATechIcon,
  BITechIcon,
  JSIcon,
  DefaultIcon,
  ServicesIcon,
  TechnologiesIcon,
  SectorsIcon,
  ModelIcon,
  DurationIcon,
  AutomotiveIcon,
  EcommerceIcon,
  EnergyIcon,
  FinanceIcon,
  IsvIcon,
  ManufacturingIcon,
  ProfessionalIcon,
  RetailIcon,
  TravelIcon
} from "./service-icons/";

export default class ServiceTile extends Component {
  defineContent(name) {
    switch (name) {
      case "devops":
        return {
          name: "Devops",
          url: "/continuous-delivery/",
          icon: <DevopsIcon />
        };
      case "development":
        return {
          name: "Software development",
          url: "/software-development/",
          icon: <DevelopmentIcon />
        };
      case "qa":
        return {
          name: "QA/Automation",
          url: "/qa-automation/",
          icon: <QAIcon />
        };
      case "cloud":
        return {
          name: "Cloud",
          url: "/cloud/",
          icon: <CloudIcon />
        };
      case "digital":
        return {
          name: "Digital transformation",
          url: "/digitaltransformation/",
          icon: <DigitalTransformationIcon />
        };
      case "bi":
        return {
          name: "Business intelligence",
          url: "/business-intelligence/",
          icon: <BIIcon />
        };
      case "agile":
        return {
          name: "Agile Consulting",
          url: "/agile-consulting/",
          icon: <AgileIcon />
        };
      case "microsoft":
        return {
          name: "Microsoft Technologies",
          url: "/software-development/microsoft/",
          icon: <MicrosoftIcon />
        };
      case "java":
        return {
          name: "Java Technologies",
          url: "/software-development/java/",
          icon: <JavaIcon />
        };
      case "php":
        return {
          name: "PHP Technologies",
          url: "/software-development/php/",
          icon: <PHPIcon />
        };
      case "qa-tech":
        return {
          name: "Testing Technologies",
          url: "/software-development/qa/",
          icon: <QATechIcon />
        };
      case "bi-tech":
        return {
          name: "BI Technologies",
          url: "/software-development/bi/",
          icon: <BITechIcon />
        };
      case "js":
        return {
          name: "Front-end & Javascript Technologies",
          url: "/software-development/js/",
          icon: <JSIcon />
        };
      case "services":
        return {
          name: "Services:",
          icon: <ServicesIcon />
        };
      case "technologies":
        return {
          name: "Technologies:",
          icon: <TechnologiesIcon />
        };
      case "sectors":
        return {
          name: "Sectors:",
          icon: <SectorsIcon />
        };
      case "model":
        return {
          name: "Engagement Model:",
          icon: <ModelIcon />
        };
      case "duration":
        return {
          name: "Duration Of Project:",
          icon: <DurationIcon />
        };
      case "dedicated":
        return {
          name: "Dedicated Team",
          url: "/dedicated-teams/"
        };
      case "augmentation":
        return {
          name: "Team Augmentation",
          url: "/team-augmentation/"
        };
      case "project-based":
        return {
          name: "Project Based",
          url: "/project-based/"
        };
      case "product-development":
        return {
          name: "Product Development",
          url: "/product-development/"
        };
      case "finance":
        return {
          name: "Finance",
          url: "/industries/finance/",
          icon: FinanceIcon
        };
      case "e-commerce":
        return {
          name: "E-commerce",
          url: "/industries/e-commerce/",
          icon: EcommerceIcon
        };
      case "travel":
        return {
          name: "Travel",
          url: "/industries/travel/",
          icon: TravelIcon
        };
      case "energy":
        return {
          name: "Energy",
          url: "/industries/energy/",
          icon: EnergyIcon
        };
      case "isv":
        return {
          name: "ISV",
          url: "/industries/isv/",
          icon: IsvIcon
        };
      case "manufacturing":
        return {
          name: "manufacturing",
          url: "/industries/manufacturing/",
          icon: ManufacturingIcon
        };
      case "professional":
        return {
          name: "Professional Services",
          url: "/industries/professional/",
          icon: ProfessionalIcon
        };
      case "retail":
        return {
          name: "retail",
          url: "/industries/retail/",
          icon: RetailIcon
        };
      case "automotive":
        return {
          name: "automotive",
          url: "/industries/automotive/",
          icon: AutomotiveIcon
        };
      default:
        return {
          name: "Untitled",
          icon: <DefaultIcon />
        };
    }
  }

  defineIcon() {
    return this.props.icon && this.defineContent(this.props.division).icon;
  }

  renderValues(valuesData) {
    if (this.props.values) {
      return valuesData.map(value => {
        return this.defineContent(value).url ? (
          <a
            className="ServiceTile__value"
            key={this.props.title + value}
            href={this.defineContent(value).url}
          >
            {this.defineContent(value).name}
          </a>
        ) : (
          <span className="ServiceTile__value" key={this.props.title + value}>
            {value}
          </span>
        );
      });
    } else {
      return this.defineContent(valuesData).url ? (
        <Link
          className="ServiceTile__value"
          to={this.defineContent(valuesData).url}
        >
          {this.defineContent(valuesData).name}
        </Link>
      ) : (
        <span className="ServiceTile__value">{valuesData}</span>
      );
    }
  }

  render() {
    if (this.props.value || this.props.values) {
      return (
        <div className="ServiceTile">
          {this.defineIcon()}
          <h4 className="ServiceTile__name">
            {this.defineContent(this.props.division).name}
          </h4>
          {this.renderValues(this.props.value || this.props.values)}
        </div>
      );
    }
    return (
      <a
        className="ServiceTile"
        href={this.defineContent(this.props.division).url}
      >
        {this.defineIcon()}
        <h4 className="ServiceTile__name">
          {this.defineContent(this.props.division).name}
        </h4>
      </a>
    );
  }
}

ServiceTile.defaultProps = {
  color: "dark-blue",
  icon: true
};
