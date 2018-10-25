import React, { Component } from "react";
import { Layout, Carousel, Button } from "../../components";
import "./leaders-list.css";

export default class LeadersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "Fletcher"
    };

    this.togglePersonDetails = this.togglePersonDetails.bind(this);
  }

  togglePersonDetails(personId) {
    this.setState({
      active: personId
    });
  }

  renderPersons() {
    const personsData = [
      {
        id: "Fletcher",
        name: "SCOTT",
        surname: "FLETCHER",
        position: "NON-EXECUTIVE DIRECTOR",
        linkedin: "/our-leaders",
        text:
          "Scott is Non-Executive Chairman and major shareholder in Godel. Scott is one of the UK’s leading entrepreneurs and was awarded an MBE for services to business and the community in the North West of England in 2014. He now heads up companies with a total valuation in excess of £150m. He is a widely known figure in the Manchester community thanks to his active charitable involvement, passion for Apprenticeships and his participation on the Greater Manchester LEP. His outspoken views on politics, IT and business have made him a respected voice in the media and somebody who isn’t afraid to challenge the status quo."
      },
      {
        id: "Polubochko",
        name: "ELENA",
        surname: "POLUBOCHKO",
        position: "CHIEF TECHNICAL OFFICER",
        linkedin: "https://www.linkedin.com/in/elena-polubochko-3996402",
        text:
          "As Chief Technical Officer, Elena and her VPs of Engineering are responsible for setting the overall technical vision and strategic direction of Godel.  Elena began her career at Godel in March 2006 and has progressed through the company in various technical roles into her current role as CTO.  As well as setting the technical strategy of the company, Elena also has the overall responsibility for delivery into clients, seamlessly on-boarding and tailoring processes to enable Godel to achieve high levels of productivity for each client. Elena graduated from the Belarusian State University and is very well regarded by both clients and her peers."
      },
      {
        id: "Turvin",
        name: "NEIL",
        surname: "TURVIN",
        position: "CHIEF EXECUTIVE OFFICER",
        linkedin: "https://www.linkedin.com/in/neilturvin",
        text:
          "Neil has been working in IT and specifically the software development industry for over 18 years and has spent the last 11 years in leadership positions. Having joined Godel in 2009, Neil was hired as Sales Director, responsible for the development of Godel’s go-to-market strategy and establishment of a sales and marketing division.  After four successful years as Sales Director, Neil was appointed Chief Executive Officer in 2012, taking on full responsibility for all Godel operations across the UK and Belarus, working with the leadership team to define, direct and implement the technology and growth strategy for the company. Neil continues to be a driving force behind Godel's growth as one of the UK’s most respected nearshore development companies."
      },
      {
        id: "Afanasenko",
        name: "ANDREW",
        surname: "AFANASENKO",
        position: "CHIEF OPERATIONS OFFICER",
        linkedin: "https://www.linkedin.com/in/andrew-afanasenko-57859011",
        text:
          "Starting his career as a software developer at Godel, Andrew has led many client engagements from a technical perspective, whilst in parallel taking on further responsibility for the development and scaling of Godel’s operations in Belarus.  Since 2010, Andrew has held the role of Chief Operations Officer, taking full responsibility for all operations in Belarus. He has been integral to the formation of our three development centre locations in Belarus, which have been the cornerstone of Godel’s successful growth.  Andrew has also been responsible for the organisation's journey through formal accreditation, as well as security accreditations including ISO 9001 and ISO 27001."
      },
      {
        id: "Nugent",
        name: "ROB",
        surname: "NUGENT",
        position: "CHIEF FINANCIAL OFFICER",
        linkedin: "https://uk.linkedin.com/in/rob-nugent-3142a218",
        text:
          "Robert joined Godel at Chief Financial Officer in December 2009 and has responsibility for ensuring that Godel is financially compliant and meets regulatory obligations.  Robert also provides support and guidance to the board with financial reporting, controls, budgeting, forecasting and legal activities.   Qualified by both AAT (Association of Accounting Technicians) and CIMA (Charted Institute of Management Accountants).  Robert has been integral in the growth and shaping of Godel to the successful company it is today. Robert also holds position as Group CFO for Lowry Group, which manages a £150m portfolio of investments."
      },
      {
        id: "Green",
        name: "PAUL",
        surname: "GREEN",
        position: "CHIEF COMMERCIAL OFFICER",
        linkedin: "https://www.linkedin.com/in/paulgreen7/",
        text:
          "Having demonstrated a proven track record, natural drive and unrivalled ambition during his time at Godel, 2017 saw Paul secure the role of Chief Commercial Officer, handing him overall responsibility for the company’s sales force and approach to market.  Paul’s career at Godel saw him begin as a Client Director within the sales division, responsible for the generation, development and management of strategic clients.  Having lead a number of successful, high profile, complex client engagements, Paul’s ability to empathise with IT leaders and help them navigate through complicated requirements, whilst de-mystifying technology and simplifying process soon established Paul as a trusted advisor to his clients and his peers."
      },
      {
        id: "Kuznetsova",
        name: "ANASTASIYA",
        surname: "KUZNETSOVA",
        position: "VICE PRESIDENT, QUALITY ASSURANCE",
        linkedin:
          "https://www.linkedin.com/in/anastasiya-kuznetsova-714b2059/en",
        text:
          "Anastasiya worked at the company for six years and is now the VP Quality Assurance at Godel. She has more than ten years quality assurance experience and during the period of fast growth of the company she was an essential team member, making sure that Godel continue to recruit and retain some of the most talented quality assurance staff in the Belarusian market. She has established an exceptional QA division and is always ready to provide mentoring, training and advice to existing and new members of staff where needed."
      },
      {
        id: "Karymau",
        name: "ALIAKSANDR",
        surname: "KARYMAU",
        position: "VICE PRESIDENT, ENGINEERING",
        linkedin: "https://www.linkedin.com/in/aliaksandrkarymau",
        text:
          'Alex is well respected by his team and clients for his vast technical knowledge and common sense approach to delivery and he`s viewed as very much a "big brother" within the company. Its only understandable why Alex is recognised as our "go to guy" because having graduated from the Belarusian State University as a Master in Physics and Radio Electronics he combines this knowledge with over 15 years experience in software development, architecture, management, quality assurance and successful delivery.'
      },
      {
        id: "Shauchenka",
        name: "ANASTASIYA",
        surname: "SHAUCHENKA",
        position: "HEAD OF TALENT",
        linkedin: "https://www.linkedin.com/in/anastasiya-shevchenko-53684a4",
        text:
          "Anastasiya is Godel`s Head of Talent Acquisition and heads up our HR Division. She has ten years experience in HR and together with the team she`s always on hand to talk you through vacancies within the company which may be suited to your skills and experience. Clever people and learning new things are the best motivators for Anastasiya. Managed by her HR team is responsible for the recruitment and retention of new and existing exceptional software developers, project managers, business analysts, architects, automation and quality assurance staff."
      },
      {
        id: "Nock",
        name: "MICHELLE",
        surname: "NOCK",
        position: "VICE PRESIDENT, MARKETING",
        linkedin: "https://www.linkedin.com/in/mnock/",
        text:
          "Michelle joined Godel at the tender age of 19 after completing an IT apprenticeship which culminated in her winning the IT Apprentice of the Year North West award in 2008. Now a qualified CIM professional, Michelle has successfully become responsible for the management and development of the marketing department at Godel.  A typical working day for Michelle would include liaising closely with the senior management team to deliver measurable results from a broad range of marketing activities such as content generation, events, direct marketing and utilising digital platforms."
      },
      {
        id: "Nekrasov",
        name: "VICTOR",
        surname: "NEKRASOV",
        position: "VICE PRESIDENT, ENGINEERING",
        linkedin: "https://www.linkedin.com/company/godel-technologies-europe",
        text:
          "Being respected by clients and peers Victor has established himself as a key member of the Godel senior management team. He began his career as a developer at Godel and has since experienced numerous promotions within the company to establish himself as the company's VP of Engineering for its Microsoft Division. Victor has a great ability to mentor and bring through exceptional software developers, whilst leading enterprise level, mission-critical customer engagements. Regarded as 'superman' by his colleagues, Victor is always there to help new members of his team."
      },
      {
        id: "McMurdo",
        name: "NEIL",
        surname: "MCMURDO",
        position: "VICE PRESIDENT, SERVICE DELIVERY",
        linkedin: "https://www.linkedin.com/in/neil-mcmurdo/",
        text:
          "In his short time at Godel Neil has taken advantage of his strong 18+ year career in management where he has previously worked with dispersed teams, he has introduced new processes which have played a fundamental part in exceeding the companies ambitious growth targets and client satisfaction.  Neil is responsible for leading the service delivery team ensuring that Godel consistently exceeds our customer’s expectations.  Outside of the office Neil is well known for his fair-weather golfing skills, using the sunnier days here in the UK to try and reduce his very respectable 12 handicap - watch out Rory McIlroy!"
      },
      {
        id: "Davidzenka",
        name: "ANASTASSIA",
        surname: "DAVIDZENKA",
        position: "VICE PRESIDENT, PROFESSIONAL SERVICES",
        linkedin: "https://www.linkedin.com/in/neil-mcmurdo/",
        text:
          "Anastassia started her professional career at Godel as a project manager and she was recently recognised as being one the longest standing members of staff; working at Godel for over 10 years. Being a qualified business analyst she is no stranger to working to tight project deadlines whilst never letting her attention to detail slip. Anastassia has Graduated from Minsk State Linguistic University and can brag about writing 2 educational books. She is a regular visitor at the local reading club, enjoys spending time with her family and going on long walks with her Cockapoo, Jake."
      }
    ];

    return personsData.map(person => {
      return (
        <li
          className={
            this.state.active === person.id
              ? "LeadersList__item LeadersList__item_active"
              : "LeadersList__item"
          }
          key={person.id}
        >
          <div className="LeadersList__inner">
            <h3 className="LeadersList__name">
              {person.name}
              <br />
              {person.surname}
            </h3>
            <h4 className="LeadersList__position">{person.position}</h4>
            <Button
              color="trans"
              shape="pseudo"
              arrow="right"
              href={person.linkedin}
            >
              View Linkedin Profile
            </Button>
          </div>
          <p className="LeadersList__text">{person.text}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Layout width="full" title="Our leaders" name="leadersCarousel">
          <Carousel
            sizeL={1}
            controls="out"
            onPageChange={personId => this.togglePersonDetails(personId)}
            extention={true}
            ref="carousel"
          >
            <img
              src="/img/Scott-Fletcher.png"
              alt="Scott Fletcher"
              id="Fletcher"
            />
            <img
              src="/img/Elena-Polubochko.png"
              alt="Elena Polubochko"
              id="Polubochko"
            />
            <img src="/img/Neil-Turvin.png" alt="Neil Turvin" id="Turvin" />
            <img
              src="/img/Andrew-Afanasenko.png"
              alt="Andrew Afanasenko"
              id="Afanasenko"
            />
            <img src="/img/Paul-Green.png" alt="Paul Green" id="Green" />
            <img
              src="/img/Anastasyia-Kusnetsova.png"
              alt="Anastasyia Kusnetsova"
              id="Kuznetsova"
            />
            <img src="/img/Alex-Karymau.png" alt="Alex Karymau" id="Karymau" />
            <img
              src="/img/Anastasyia-Shauchenka.png"
              alt="Anastasyia-Shauchenka"
              id="Shauchenka"
            />
            <img
              src="/img/Victor-Nekrasov.png"
              alt="Victor Nekrasov"
              id="Nekrasov"
            />
            <img src="/img/Michelle-Nock.png" alt="Michelle Nock" id="Nock" />
            <img src="/img/Neil-McMurdo.png" alt="Neil McMurdo" id="McMurdo" />
            <img
              src="/img/Anastassia-Davidzenka.png"
              alt="Anastassia Davidzenka"
              id="Davidzenka"
            />
          </Carousel>
        </Layout>

        <Layout width="full" name="leadersContent">
          <ul className="LeadersList">{this.renderPersons()}</ul>
        </Layout>
      </div>
    );
  }
}
