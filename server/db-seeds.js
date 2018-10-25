const {
  Status,
  CaseStudy,
  Industry,
  Technology,
  Service,
  Model,
  Quote,
  NewsItem,
  Job,
  Manager,
  Technologies
} = require("./src/models");
const industries = {};
const technologies = {};
const services = {};
const models = {};
const managers = {};

Promise.resolve("start")
  .then(() => {
    Status.create({ value: "ok" });
  })
  .then(() => {
    Manager.create({
      position: 'Talent Manager',
      name: 'Alena Sakalouskaya',
      tel: '+375 44 5388185',
      mail: 'a.sakalouskaya@godeltech.com',
      skype: 'alena.sakalouskaya',
      address: 'Dzerzhinskogo av, 5-527 Minsk Belarus 220089',
      photo:
        "http://careers.godeltech.com/wp-content/uploads/2016/01/Alena-Sokolovskaya.png"
    }).then(model => (managers.sakalouskaya = model));
  })
  .then(() => {
    Manager.create({
      position: 'Talent Manager',
      name: 'Anastasiya Shauchenka',
      tel: '+375 44 5388185',
      mail: 'a.shauchenka@godeltech.com',
      skype: 'anastasiya_shaushenka',
      address: 'Dzerzhinskogo av, 5-527 Minsk Belarus 220089',
      photo:
        "http://careers.godeltech.com/wp-content/uploads/2016/01/Anastasiya-Shauchenka-.png"
    }).then(model => (managers.shauchenka = model));
  })
  .then(() => {
    Manager.create({
      position: "Talent Manager",
      name: "Volga Shutovich",
      tel: "+375 44 5388185",
      mail: "v.shutovich@godeltech.com",
      skype: "shutovich.olga",
      address: "Dzerzhinskogo av, 5-527 Minsk Belarus 220089",
      photo:
        "http://careers.godeltech.com/wp-content/uploads/2016/01/Volha-Shutovich.png"
    }).then(model => (managers.shutovich = model));
  })
  .then(() => {
    Manager.create({
      position: "Divisonal Manager",
      name: "Anastassia Davidzenka",
      tel: "01612198100",
      mail: "a.davidzenka@godeltech.com",
      address: "City Tower Manchester United Kingdom M1 4BT",
      photo:
        "http://careers.godeltech.com/wp-content/uploads/2016/01/Anastassia-Davidzenka.png"
    }).then(model => (managers.davidzenka = model));
  })
  .then(() => {
    Manager.create({
      position: "Divisonal Manager",
      name: "Elena Polubochko",
      tel: "+375 17 3281734",
      mail: "e.polubochko@godeltech.com",
      address: "Dzerzhinskogo av, 5-527 Minsk Belarus 220089",
      photo:
        "http://careers.godeltech.com/wp-content/uploads/2016/01/Elena-Polubochko1.png"
    }).then(model => (managers.polubochko = model));
  })
  .then(() => {
    Manager.create({
      position: "Divisonal Manager",
      name: "Aliaksandr Karymau",
      tel: "+375 17 3281734",
      mail: "a.karymau@godeltech.com",
      address: "Dzerzhinskogo av, 5-527 Minsk Belarus 220089",
      photo:
        "http://careers.godeltech.com/wp-content/uploads/2016/01/Alex-Karymau.png"
    }).then(model => (managers.karymau = model));
  })
  .then(() => {
    Manager.create({
      position: "Divisonal Manager",
      name: "Victor Nekrasov",
      tel: "+375 17 3281734",
      mail: "v.nekrasov@godeltech.com",
      address: "Dzerzhinskogo av, 5-527 Minsk Belarus 220089",
      photo:
        "http://careers.godeltech.com/wp-content/uploads/2016/01/Victor-Nekrasov.png"
    }).then(model => (managers.nekrasov = model));
  })
  .then(() => {
    Job.create({
      url: "middlesenior-front-end-developer-angularjs",
      position: "MIDDLE/SENIOR FRONT-END DEVELOPER (ANGULARJS)",
      content:
        "Minsk office GodelTech gains in its team of talented Front-end programmer! We offer you a professional implementation of our new interesting projects related to the development of business applications for major British companies, as well as a competitive salary and other benefits. All we ask in return is to help us achieve our goal of being regarded as the most respected IT company in Europe and beyond.\n\n ### REQUIREMENTS: ### \n\n ### SKILLS & KNOWLEDGE: ### \n\n * Understanding of working in an agile environment\n\n * Strong background in front-end web development, preferably with 3+ years of solid development experience in a commercial environment\n\n * Strong track record in ensuring code quality, testing and employing best practices and software design patterns\n\n ### DEVELOPMENT: ### \n\n * JavaScript\n\n * AngularJS\n\n * HTML5, CSS (Responsive, Adaptive)\n\n * SASS / LESS\n\n ### DESIRABLE: ### \n\n * Unit Testing (Jasmine, Mocha)\n\n * E2E Testing (Webdriver.io)\n\n * Client side performance testing\n\n * Object-oriented design\n\n * \n\n ### BUILD/DEPLOYMENT: ###\n\n * Build Tools (Webpack, Gulp, Grunt)\n\n * Continuous integration (Jenkins, Travis)\n\n * Branching and merging code using Git\n\n * Continuous Delivery\n\n ### COMPETENCIES: ### \n\n * Self-motivated and able to work on own initiative as well as part of a team\n\n * Excellent communication and analytical skills, allowing interaction and negotiation with analysis team\n\n ### YOU WILL BE RESPONSIBLE FOR: ### \n\n * The development of the user interface\n\n * Ensuring development adheres to industry standards\n\n * Producing documentation to support other team members\n\n * Producing estimates on future development to support planning\n\n * Supporting and maintaining the products owned by the team\n\n * Working closely with design and UX to deliver the best possible customer experience that balances commercial need and technical constraints within the domain",
      spoiler:
        "Minsk office GodelTech gains in its team of talented Front-end programmer! We offer you a professional implementation of our new interesting projects related to the development of business applications for major British companies, as well as a competitive salary and other benefits. All we ask in return is to help us achieve our goal of being regarded as the most respected IT company in Europe and beyond.",
      location: "minsk",
      division: "js",
      hot: true
    }).then(model => {
      model.addManagers([managers.sakalouskaya, managers.nekrasov]);
      return model;
    });
  })
  .then(() => {
    Job.create({
      url: "senior-business-analyst",
      position: "SENIOR BUSINESS ANALYST",
      content:
        "An opportunity for a Senior Business Analyst who wants a new challenge to join the expanding Minsk office team. You will be responsible for identifying, documenting, and analysing business systems and their user journeys using traditional analysis techniques and tools.\n\nThis is a project-orientated role and you will be representing Godel to major British companies through all stages of the project lifecycle in Waterfall and Agile environments.\n\nYou must be confident in developing working relationships with both team members and clients throughout project challenges whilst ensuring that we continue to deliver great results.\n\nWorking under pressure should be natural for you as you continue to maintain the attention to detail as deadlines approach. It is this level of professionalism and experience which is fundamental to Godel's mission of becoming Europe's most respected Nearshorer.\n\n ### YOU MUST HAVE: ###\n\n * You must have a minimum of 4 years experience working as a business analyst\n\n * Have an understanding of agile methodologies\n\n * Have experience in the collection,\n\n * Have experience in process modeling\n\n * You should have knowledge of various IT processes such as Scrum, Kanban, Waterfall\n\n * You need to be able to demonstrate expertise across a variety of business analysis methods\n\n * You must have the ability and desire to communicate in written and spoken English (Advanced +)\n\n * Clients should feel comfortable with you and the journey which you are taking them on, therefore you should have the ability to co-operate with a variety of people and achieve results\n\n * You should be confident documenting and communicating requirements between teams\n\n * You must have excellent time management, multi-tasking and organisational skills",
      spoiler:
        "An opportunity for a Senior Business Analyst who wants a new challenge to join the expanding Minsk office team. You will be responsible for identifying, documenting, and analysing business systems and their user journeys using traditional analysis techniques and tools.",
      location: "minsk",
      division: "ba"
    }).then(model => {
      model.addManagers([managers.shutovich, managers.davidzenka]);
      return model;
    });
  })
  .then(() => {
    Job.create({
      url: "php-developer",
      position: "PHP DEVELOPER",
      content:
        "We are looking for a PHP Developer interested in creating advanced level project! You will be expected to follow emerging technologies, continually looking for opportunities to integrate and develop them into enterprise-level software solutions for our clients.\n\nWe are looking for energetic people who have a interest in Technology and are ready for new challenges - do you fit the bill?\n\n * Strong understanding of common object oriented design patterns and methodologies\n\n * 2+ years programming experience with PHP/ MySQL\n\n * Experience with any modern framework - Zend/Yii/Symfony\n\n * Strong knowledge of Javascript/jQuery/HTML/CSS3\n\n * PHPUnit and experience of unit testing\n\n * GIT/SVN experience\n\n * Experience working in an Agile environment\n\n * Strong communication skills\n\n * Intermediate level of English.",
      spoiler:
        "We are looking for a PHP Developer interested in creating advanced level project! You will be expected to follow emerging technologies, continually looking for opportunities to integrate and develop them into enterprise-level software solutions for our clients.",
      location: "minsk",
      division: "php",
      hot: true
    }).then(model => {
      model.addManagers([managers.shutovich, managers.davidzenka]);
      return model;
    });
  })
  .then(() => {
    Job.create({
      url: "project-manager",
      position: "PROJECT MANAGER",
      content:
        "Our Project Managers are responsible for managing expectations, tasks and co-ordination of resources on client engagements, as well as being the client’s main point of contact within Godel for delivery. Engaging directly with our clients, you will be working alongside a team of talented business analysts, architects, developers, and quality assurance engineers to ensure successful delivery.\n\nLike your colleagues at Godel, the successful candidate would be expected to demonstrate the ability to engage with clients in a positive manner as well as engage with internal teams to ensure successful delivery.\n\nWe offer a variety of interesting projects, competitive salary and other benefits.\n\nAll we ask in return is a continuous commitment to help us achieve our objective of being regarded as the most respected software development nearshorer in Europe.\n\n ### REQUIREMENTS: ### \n\n * 3 or more years in project management;\n\n * Combination of exceptional communication skills and leadership skill;\n\n * Advanced English level;\n\n * Excellent written and oral communication skills;\n\n * Good analytical and problem-solving skills.\n\n ### RESPONSIBILITIES: ### \n\n *Acts as front-line contact on all project-related matters;\n\n * Project planning for assigned projects;\n\n * Reports project status for both Godel and our client;\n\n * Ensures project deadlines and deliverables are met on time and with quality;\n\n * Resolves and/or escalates issues, as required;\n\n * Commitment to consider business trips to client site if required.",
      spoiler:
        "Our Project Managers are responsible for managing expectations, tasks and co-ordination of resources on client engagements, as well as being the client’s main point of contact within Godel for delivery. Engaging directly with our clients, you will be working alongside a team of talented business analysts, architects, developers, and quality assurance engineers to ensure successful delivery.",
      location: "minsk",
      division: "pm"
    }).then(model => {
      model.addManagers([managers.shauchenka, managers.polubochko]);
      return model;
    });
  })
  .then(() => {
    Job.create({
      url: "senior-net-developer",
      position: "SENIOR .NET DEVELOPER",
      content:
        "Godel are on the looking for a talented Senior .NET Developer to join the fast growing team at Minsk's Rubin Plaza!\n\nSuccessful applicants will have the opportunity to take part in the professional implementation of new interesting projects related to the development of business applications for some major British companies.\n\nIf you are enthusiastic about expanding your horizons, learning new skills and share our commitment and passion for doing things well - this job is for you!\n\n ### YOU MUST HAVE: ### \n\n * 4+ years’ experience in commercial development;\n\n * Strong understanding of full lifecycle development process;\n\n * Experience of distribution high-loaded systems, experience in solving performance, stability and reliability issues;\n\n * Proficiency in ASP.NET MVC 4+, ASP.NET Web API, Entity Framework 6.0+, MS SQL 2012+;\n\n * Intermediate+ written and spoken English",
      spoiler:
        "Godel are on the looking for a talented Senior .NET Developer to join the fast growing team at Minsk's Rubin Plaza!\n\nSuccessful applicants will have the opportunity to take part in the professional implementation of new interesting projects related to the development of business applications for some major British companies.\n\nIf you are enthusiastic about expanding your horizons, learning new skills and share our commitment and passion for doing things well - this job is for you!",
      location: "minsk",
      division: "net"
    }).then(model => {
      model.addManagers([managers.shauchenka, managers.nekrasov]);
      return model;
    });
  })
  .then(() => {
    Job.create({
      url: "middlesenior-automation-qa-engineer-net",
      position: "MIDDLE/SENIOR AUTOMATION QA ENGINEER (.NET)",
      content:
        "Godel are on the looking for a talented Middle/Senior Automation QA Engineer (.Net/C#) to join the fast growing team at Minsk's Rubin Plaza! Successful applicants will have the opportunity to take part in the professional implementation of new interesting projects related to the development of business applications for some major British companies.\n\nIf you are enthusiastic about expanding your horizons, learning new skills and share our commitment and passion for doing things well - this job is for you!\n\nFeel free to contact us if you're interested in career at Godel Technologies Europe!\n\n ### YOU MUST HAVE: ### \n\n * At least 3 years of experience in developing automation tests using C# for web-oriented projects\n\n * Experience of working with NUnit, Selenium/WebDriver, SpecFlow etc.\n\n * Understanding in CI Team Foundation Server (TFS)/Jenkins/TeamCity or other\n\n * Knowledge of Performance Testing and experience in developing by Visual Studio (Web Performance and Load Test)\n\n * Communication skills in English (upper-intermediate level)",
      spoiler:
        "Godel are on the looking for a talented Middle/Senior Automation QA Engineer (.Net/C#) to join the fast growing team at Minsk's Rubin Plaza! Successful applicants will have the opportunity to take part in the professional implementation of new interesting projects related to the development of business applications for some major British companies.",
      location: "minsk",
      division: "auto-qa"
    }).then(model => {
      model.addManagers([managers.sakalouskaya, managers.nekrasov]);
      return model;
    });
  })
  .then(() => {
    Job.create({
      url: "senior-net-developer-2",
      position: "SENIOR .NET DEVELOPER",
      content:
        "Godel are on the looking for a talented Senior .NET Developer to join the fast growing team at Minsk's Rubin Plaza!\n\nSuccessful applicants will have the opportunity to take part in the professional implementation of new interesting projects related to the development of business applications for some major British companies.\n\nIf you are enthusiastic about expanding your horizons, learning new skills and share our commitment and passion for doing things well - this job is for you!\n\n ### YOU MUST HAVE: ### \n\n * 4+ years’ experience in commercial development;\n\n * Strong understanding of full lifecycle development process;\n\n * Experience of distribution high-loaded systems, experience in solving performance, stability and reliability issues;\n\n * Proficiency in ASP.NET MVC 4+, ASP.NET Web API, Entity Framework 6.0+, MS SQL 2012+;\n\n * Intermediate+ written and spoken English",
      spoiler:
        "Godel are on the looking for a talented Senior .NET Developer to join the fast growing team at Minsk's Rubin Plaza!\n\nSuccessful applicants will have the opportunity to take part in the professional implementation of new interesting projects related to the development of business applications for some major British companies.\n\nIf you are enthusiastic about expanding your horizons, learning new skills and share our commitment and passion for doing things well - this job is for you!",
      location: "grodno",
      division: "net"
    }).then(model => {
      model.addManagers([managers.shauchenka, managers.nekrasov]);
      return model;
    });
  })
  .then(() => {
    Job.create({
      url: "net-developer",
      position: ".NET DEVELOPER",
      content:
        "Godel can gladly welcome .Net Developer to join our amazing team in Minsk office. Successful applicants will have the opportunity to take part in the professional implementation of new interesting projects related to the development of business applications for some major British companies. If you are enthusiastic about expanding your horizons, learning new skills and share our commitment and passion for doing things well - this job is for you!\n\n ### REQUIREMENTS: ### \n\n * 2+ years’ experience in commercial development;\n\n * Strong understanding of full lifecycle development process;\n\n * Experience of distribution high-loaded systems, experience in solving performance, stability and reliability issues;\n\n * Proficiency in ASP.NET MVC 4+, ASP.NET Web API, Entity Framework 6.0+, MS SQL 2012+;\n\n * Intermediate+ written and spoken English",
      spoiler:
        "Godel can gladly welcome .Net Developer to join our amazing team in Minsk office. Successful applicants will have the opportunity to take part in the professional implementation of new interesting projects related to the development of business applications for some major British companies. If you are enthusiastic about expanding your horizons, learning new skills and share our commitment and passion for doing things well - this job is for you!",
      location: "brest",
      division: "net"
    }).then(model => {
      model.addManagers([managers.shauchenka, managers.nekrasov]);
      return model;
    });
  })
  .then(() => {
    Job.create({
      url: "senior-java-developer",
      position: "SENIOR JAVA DEVELOPER",
      content:
        "Godel are on the looking for a talented Java Developer to join the fast growing team at Minsk's Rubin Plaza!\n\nSuccessful applicants will have the opportunity to take part in the professional implementation of new interesting projects related to the development of business applications for some major British companies.\n\nIf you are enthusiastic about expanding your horizons, learning new skills and share our commitment and passion for doing things well - this job is for you!\n\n ### REQUIREMENTS: ### \n\nMandatory skills:\n\n * Java 8 and Spring (IoC, MVC, Boot)\n\n * Good knowledge of web technologies and Web Services (REST)\n\n * TDD/BDD testing: JUnit, Mockito, Cucumber, JBehave\n\n * Intermediate+ written and spoken English\n\n Additional useful skills:\n\n * Experience with AngularJS and/or JavaScript\n\n * Agile/Scrum experience\n\n * Experience of other JVM languages (Groovy, Scala, Clojure)\n\n * SQL, NoSQL",
      spoiler:
        "Godel are on the looking for a talented Java Developer to join the fast growing team at Minsk's Rubin Plaza!\n\nSuccessful applicants will have the opportunity to take part in the professional implementation of new interesting projects related to the development of business applications for some major British companies.",
      location: "minsk",
      division: "java",
      hot: true
    }).then(model => {
      model.addManagers([managers.sakalouskaya, managers.karymau]);
      return model;
    });
  })
  .then(() => {
    Job.create({
      url: "senior-business-analyst-3",
      position: "SENIOR BUSINESS ANALYST",
      content:
        "An opportunity for a Senior Business Analyst who wants a new challenge to join the expanding Grodno office team. You will be responsible for identifying, documenting, and analysing business systems and their user journeys using traditional analysis techniques and tools.\n\nThis is a project-orientated role and you will be representing Godel to major British companies through all stages of the project lifecycle in Waterfall and Agile environments.\n\nYou must be confident in developing working relationships with both team members and clients throughout project challenges whilst ensuring that we continue to deliver great results.\n\nWorking under pressure should be natural for you as you continue to maintain the attention to detail as deadlines approach. It is this level of professionalism and experience which is fundamental to Godel's mission of becoming Europe's most respected Nearshorer.\n\n ### YOU MUST HAVE: ### \n\n * You must have a minimum of 4 years experience working as a business analyst\n\n * Have an understanding of agile methodologies\n\n * Have experience in the collection, formalization and translation of business requirements\n\n * Have experience in process modeling\n\n * You should have knowledge of various IT processes such as Scrum, Kanban, Waterfall\n\n * You need to be able to demonstrate expertise across a variety of business analysis methods\n\n * You must have the ability and desire to communicate in written and spoken English (Advanced +)\n\n * Clients should feel comfortable with you and the journey which you are taking them on, therefore you should have the ability to co-operate with a variety of people and achieve results\n\n * You should be confident documenting and communicating requirements between teams\n\n *You must have excellent time management, multi-tasking and organisational skills",
      spoiler:
        "An opportunity for a Senior Business Analyst who wants a new challenge to join the expanding Grodno office team. You will be responsible for identifying, documenting, and analysing business systems and their user journeys using traditional analysis techniques and tools.",
      location: "grodno",
      division: "ba"
    }).then(model => {
      model.addManagers([managers.shutovich, managers.davidzenka]);
      return model;
    });
  })
  .then(() => {
    NewsItem.create({
      title: "GODEL WINS THE TOP AWARD AT THE MEGABUYTE EMERGING STARS AWARDS",
      content:
        "Godel walked away with a top Emerging Stars Award last night winning the Best Performing Company Overall. The annual event and an independent ranking of the UK’s best performing technology scale-ups assess the performance of both private and public companies within the ICT services and software sectors.\n\nAs well as listing the 25 best-performing companies overall, the awards also recognise individual excellence across a number of different performance categories.\n\nGodel also won in the category the Best Performing Company – Consulting and Systems Integration.\n\nThe resulting rankings are compiled using Megabuyte’s proprietary Megabuyte Scorecard methodology, which assesses companies’ performance against key financial KPIs. Megabuyte’s awards differ from other growth awards in the superior rigour of their financial analysis and their specific focus on pure-breed technology companies and are widely regarded as an influential sector benchmarking reference.\n\n“It feels like a huge achievement to be recognised in such illustrious company with some of the UK’s best performing technology companies, and it was great to win in the individual category, but it was the icing on the cake to win overall,” said Neil Turvin.\n\n“It feels like Godel is on fire at the moment – unstoppable – and winning awards is wonderful industry recognition of that success.”\n\nThe Emerging Stars Awards are one of three award series run by Megabuyte alongside the Megabuyte50 Awards, which identify the UK’s best-performing, privately-owned technology companies, and the Megabuyte Quoted25 Awards, which identify the UK’s best-performing quoted technology companies independently of share price performance.\n\nwww.megabuyte-awards.com/emerging-stars/ winning-companies.",
      spoiler:
        "Godel walked away with a top Emerging Stars Award last night winning the Best Performing Company Overall. The annual event and an independent ranking of the UK’s best performing technology scale-ups assess the performance of both private and public companies within the ICT services and software sectors.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/03/Megabuyte-thumbnail.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/03/Megabuyte-featured-image-.jpg",
      publishedAt: "2018-03-08"
    });
  })
  .then(() => {
    NewsItem.create({
      title:
        "INTERNATIONAL WOMEN’S DAY 2018 – WHY WORKING IN TECHNOLOGY INSPIRES GODEL’S WOMEN",
      content:
        "March 8th marks International Women’s Day – an annual celebration of the achievements of women. In the technology industry International Women’s day serves to highlight the lack of female representation across STEM fields – which is a serious challenge to both the tech industry and wider economy. The UK continues to see few women pursuing technical education and careers.\n\nGodel is committed to gender equality. CEO Neil Turvin said, “At Godel we have found that our teams that get the best results are those that are made up of people with differing attitudes, backgrounds and ways of doing something. They are more able to combine these skills into one solution. So by excluding nearly half the available workforce the IT industry in the UK is really shooting itself in the foot and needs to look seriously at ways of addressing this problem quickly.”\n\nWe also spoke to some of Godel’s female technical employees to find out what inspires them within their roles as software development experts.\n\n“Godel is a new chapter of my life that offers new challenges, new skills and opportunities and for sure friends.” – Iryna Saraeva, QA Engineer.\n\n“Working at Godel is like a captivating adventure – you never know what a challenge you may face tomorrow. It keeps you up and leads to professional and personal growth. And I really enjoy it!” – Anastasiya Kuzniatsova, VP Product Management.\n\n“What inspires me? Facing new challenges, working together with skilled professionals and just great guys, getting positive feedback from our clients, new experience and opportunities. That’s what I’m fond of here at Godel.” – Alena Valiukevich, Project Manager.\n\n“I have been working at Godel for a third of my life, which is quite scary to think about! No wonder it is a massive part of me. There is a lot of personal attachment and emotional involvement in things that are going on in Godel. I get genuinely upset if something does not turn out as planned. But more often, Godel and our team make me proud.\n\nThe best feeling is that I have a very strong team behind me – people who are stronger and cleverer than me and I can fully rely on them and trust their decisions.” – Anastassia Davidzenka, VP Professional Services.\n\nWithout its mostly female leadership team and balanced employee base, Godel would not be where it is today – a leading software development partner renowned for its quality software delivery and technical expertise.",
      spoiler:
        "March 8th marks International Women’s Day – an annual celebration of the achievements of women. In the technology industry International Women’s day serves to highlight the lack of female representation across STEM fields - which is a serious challenge to both the tech industry and wider economy. The UK continues to see few women pursuing technical education and careers.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/03/IWD2018.png",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/03/iwd2018.png",
      publishedAt: "2018-03-08"
    });
  })
  .then(() => {
    NewsItem.create({
      title:
        "GODEL SHORTLISTED IN TWO CATEGORIES AT THE NATIONAL TECHNOLOGY AWARDS 2018",
      publishedAt: "2018-03-06",
      spoiler:
        "Godel has been shortlisted in the “Tech Team of the Year” category with its customer Rentalcars.com, and in the “Outsourcing Company of the Year” category at the National Technology Awards 2018.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/03/NTA.png",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/03/nta-2018.png",
      content:
        "Godel has been shortlisted in the “Tech Team of the Year” category with its customer Rentalcars.com, and in the “Outsourcing Company of the Year” category at the National Technology Awards 2018.\n\nThe National Technology Awards celebrate the pioneers of new technology, focusing on innovation in areas such as finance, AI, travel, IoT and analytics. Winning entries come from those organisations who have made outstanding technological contributions across a variety of sectors.\n\nGodel entered the work it did in collaboration with the in-house development team at Rentalcars.com to create Marketplace – an online platform which makes renting cars as simple as possible for its customer base.\n\nThe winners will be announced at a gala dinner and awards ceremony on 17 May 2018 at the Waldorf Hilton Hotel, London.\n\n@NTechAwards #NationalTechAwards"
    });
  })
  .then(() => {
    NewsItem.create({
      title: "DELIVERING SOFTWARE QUICKLY WITHOUT SACRIFICING QUALITY",
      publishedAt: "2018-03-05",
      spoiler:
        "Elena Polubochko, CTO of Godel explains how automated testing ensures speed of software development without dispensing with quality.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/09/Thumbnail-women-in-IT-1.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/03/efnlsnd.png",
      content:
        "__Elena Polubochko, CTO of Godel explains how automated testing ensures speed of software development without dispensing with quality.__\n\nCan a piece of software ever be truly defect-free? Increasingly, manual testing is becoming more difficult to schedule and so there is a growing need for automated testing. The perception is that the more you test, the better your products are, and who doesn’t want that? But repeating tests manually takes time and effort, especially as the product grows – and so extensive manual testing on each release is increasingly becoming a luxury.\n\nCue automated testing.\n\nWhat often happens is that code gets written, and by the time there has been a decision made to auto-test, reams of code already exists that doesn’t have automated tests to accompany it. The organisation is instantly playing catch-up. This provides an enormous challenge to rectify given the shortage of skills in the market to introduce automated testing into the project or process. Budgets have to be justified, complexities addressed, a skilled team implemented to work with to deliver on the strategy and share ideas, and to build a reliable process to track quality and reveal issues at the earliest opportunity.\n\nOnce the team is implemented, the journey begins and the typical scenarios that an organisation faces include:\n\n * Development teams, that don’t really understand how to embed testing into their processes so that it delivers value – which consequently gets postponed. It can be viewed as a side activity and therefore it doesn’t bring enough improvements or value.\n\n * Legacy systems in the business that have lots of dependencies built into them making it complex and difficult to unpick in order to start with automation.\n\n* An endless backlog of things that could be automated to improve the process & delivery with no clear ownership\n\nOnce the right team with the correct mindset, skillset, and vision is implemented, the task of creating automated tests at and above user interface level isn’t as complex as it sounds – but it’s easy to get it wrong. There are four simple steps to stick to.\n\n1. Write test scenarios to automate and make sure the coverage is adequate. You need to start somewhere, so start small –automate the smoke test, the bare minimum you run each day.\n\n2. Build a Test Automation Framework. What basis would you use to script your tests with?\n\n3. Script the tests.\n\n4. Build in the practice of designing new and running existing tests into your development process so that it helps the team to track quality.\n\nOnly steps two and three actually require technical knowledge and programming skills. Step one doesn’t require any knowledge of automation, it’s purely a quality assurance issue, a mindset required to be able to design the test scenarios to execute on a system and build the assurance that it operates correctly. Step four is along the same lines – it covers off explaining and showing a team how to use auto-testing and build a discipline of an always green pipeline. These are much more focussed on managerial issues or processes.\n\nBut who is placed best to pick up the techie bits: A-QA Engineer or a Developer? There are pros and cons for each of the options.The ideal scenario for every employer would be to have a person who is happy to do whatever is needed to bring value to the business and keep the organisation happy, i.e. code today, design test scenarios tomorrow, automate the scenarios the day after. Also, having developers responsible for owning the test suite builds commitment, as there is continuity in I built it, hence I support it. That works fine, when there is already the basis to build on.\n\nHowever, when developers are tasked with the goal to build test automation into existing project/solution from scratch, they shy away from it. They don’t see much value or a technical challenge in automating diverse test scenarios, and they struggle to invent and document the feature testing scenarios they haven’t designed themselves. It’s simply not the same challenge as coming up with a new way of loading big amounts of data without diminishing performance, or tweaking the platform to support an entirely new architectural pattern for example.\n\nFollowing the approach where test automation is fully built by developers, an organisation can arrive at the situation where they struggle to have the passion and motivation for it– even though they accept it must be done.\n\nAnother way is to build the operation in the team in a manner where everyone does a job they love and has passion for it.\n\n1. A-QA should design the Test Automation Framework or at least take the lead on it. It will be faster and more efficient as they have experience of automating cases and know what needs to be built in for scalability and reliability.\n\n2. BAs or manual QAs should help with the design of the test scenarios and help define the test strategy.\n\n3. Developers should automate key scenarios (the happy path) of the story to build ownership of the testing process and allow the seamless bare minimum of automation within the development process.\n\n4. A-QA or development in test or manual QAs who enjoy writing auto-tests should help with extending the test suite and coverage by automating trickier cases.\n\n5. The Scrum Master or tech lead should help the team to build the process and culture of tracking quality with auto-tests and coach the team.\n\nIn this case, everyone does the job they like and can do in the most efficient and reliable way, reaching some compromises along the way, and building joint responsibility within the team to deliver software fast and without sacrificing quality."
    });
  })
  .then(() => {
    NewsItem.create({
      title: "WHAT WILL BE THE TOP DEVOPS TRENDS IN 2018?",
      publishedAt: "2018-02-20",
      spoiler:
        "We asked Sergey Sverchkov, Godel’s Head of DevOps, some key questions on what will shift within DevOps this year, and this is what he had to say.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/02/devops-2018.png",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/02/DEVOPS-TRENDS-2018.png",
      content:
        "We asked Sergey Sverchkov, Godel’s Head of DevOps, some key questions on what will shift within DevOps this year, and this is what he had to say.\n\n __Q: Will we start to see more developer-led initiatives in large enterprises?__\n\nGiven all the benefits and savings that can be achieved with DevOps practices, I would say that initiatives to change the culture of work with infrastructure, integration, and deployment processes may come from engineering teams, but like any major changes in large-scale enterprises they need the support of top management. These are organisational and process changes that need to be driven by the company and team leads – so must be led by both.\n\n __Q: Is DevOps thinking mainstream now? Who’s lagging behind?__\n\nIt seems DevOps practices are really becoming mainstream, at least in the media! If your ops and dev teams are on the opposite sides of the fence, you are probably lagging behind – and realignment is needed.\n\n __Q: Applying successful DevOps strategies: what are the models that organisations could or should emulate?__\n\nDevOps practices are designed to make organisations more efficient. They are based on years of experience and best practices accumulated by the industry. So most models are at least worth trying. Whether a certain model or tool will work in your organization depends on the particular use case and applicable legal constraints. For example, storing app data in public clouds might be off-limits for healthcare organisations for example or some great open-source solutions may lack certain certifications, etc. But of course DevOps practices can be applied to organisations with legal restrictions. For example, one can have a private cloud to host all the sensitive data. Also, public cloud providers, like Azure and AWS are constantly working on obtaining industry certifications for their services, e.g., PCI DSS and HIPAA.\n\n __Q: What’s the next bundle of letters after DevSecOps?__\n\nI’m not sure we know the answer to this one at the moment. Security should be considered at any stage of solution development and it means it is an integral part of DevOps work.\n\n __Q: Will DevOps adoption really begin to really kill off traditional ops teams?__\n\nI believe the practice is relieving ops professionals from routine work, making them more efficient, reducing the chances of human error, security breaches, as well as their impact on business.. This also means all changes are tracked and we always have a detailed description of the overall IT landscape in the company. Putting ops engineers on dev teams from day one helps to make software more reliable, resilient, scalable, and most importantly, to store infrastructure and deployment processes definitions as code in version control systems.\n\n __Q: How is the increasingly mixed container market going to affect it all?__\n\nHealthy competition is good for end users, but too many container standards could slow down adoption due to compatibility issues. It will be a balancing act.\n\n __Q: From a strategic perspective, will organisations start to look at DevOps vendors like they do VMs or cloud?__\n\nNot sure I know the answer. Cloud providers seem to be in a race to add more DevOps tools to their cloud marketplaces. The overall trend among DevOps solutions seems to be maximising portability between clouds. For example, Hashicorp Terraform has providers for many cloud and virtualisation platforms.\n\n __Q: What are the benefits of open source for DevOps teams?__\n\nOpen source is not just from indie developers and startups:\n\n* Open code can be easily inspected by your own engineers, as well as authorities, which may be required for some industry certifications.\n\n* Open source products are generally free to use and modify, so you can’t really beat the price.\n\n* The open nature of OSS means that your organisation could influence how a project is developed, which features get added first, etc."
    });
  })
  .then(() => {
    NewsItem.create({
      title:
        "AMY WILLIAMS, MBE, WINTER OLYMPIC GOLD MEDALLIST TO ATTEND GODEL IT LEADERSHIP DINNER",
      publishedAt: "2018-02-15",
      spoiler:
        "Amy Williams, MBE, will be a keynote speaker at an exclusive dinner for IT leaders hosted by Godel next month. As Britain’s first solo Winter Olympics champion in 30 years, and the first female individual Gold Medallist for 58 years, she is well placed to enthuse about “building high performing teams” – the theme for the event.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/02/amy-williams.png",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/02/gaucho.png",
      content:
        "Amy Williams, MBE, will be a keynote speaker at an exclusive dinner for IT leaders hosted by Godel next month. As Britain’s first solo Winter Olympics champion in 30 years, and the first female individual Gold Medallist for 58 years, she is well placed to enthuse about “building high performing teams” – the theme for the event.\n\nAmy won gold in skeleton in her debut games, claiming Team GB’s only gold medal of the 2010 Winter Olympic games.\n\nThe dinner will take place at Gaucho Tower Bridge on March 7th at 6.30pm. It will be an opportunity for IT leaders to discuss common challenges such as the need to rapidly scale their operations in line with business and customer demand.\n\nAlex Montgomery, Azure Application Innovation Lead at Microsoft, will also be speaking and available to answer questions.\n\nIf you would like to attend, please contact events@godeltech.com"
    });
  })
  .then(() => {
    NewsItem.create({
      title: "GODEL & VIRGIN HOLIDAYS SHORTLISTED",
      publishedAt: "2018-02-13",
      spoiler:
        "Godel has been shortlisted for the Best Use of Agile category in the DevOps Excellence Awards for the work it did with client Virgin Holidays.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/02/Virgin-Holidays-thumbnail.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/02/grosvenor-house-main-article-image.jpg",
      content:
        "Godel has been shortlisted for the Best Use of Agile category in the DevOps Excellence Awards for the work it did with client Virgin Holidays.\n\nGodel’s category submission was based around the work it did to meet the constantly evolving expectations of its customers in a digital era – delivering faster and consistently higher quality products and services. Godel addressed Virgin’s speed of deployment and implemented agile as a solution to its delivery pace challenges.\n\nGodel and Virgin Holidays will join three other companies who have been nominated in that category at the awards which take place in London Marriott Hotel on Grosvenor Square on Wednesday March 21, 2018."
    });
  })
  .then(() => {
    NewsItem.create({
      title: "GODEL SHORTLISTED IN MEGABUYTE EMERGING STARS SHOWCASE",
      publishedAt: "2018-02-07",
      spoiler:
        "Godel has been shortlisted for an award at the Megabuyte Emerging Stars reception. The award identifies and celebrates the latest batch of top performing scale-up companies in the UK technology sector as ranked according to their Megabuyte Scorecard rating.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/02/West-End-London-thumbnail.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/02/awards-dinner-.jpg",
      content:
        "Godel has been shortlisted for an award at the Megabuyte Emerging Stars reception. The award identifies and celebrates the latest batch of top performing scale-up companies in the UK technology sector as ranked according to their Megabuyte Scorecard rating.\n\nAs well as identifying the UK’s leading 25 technology scale-ups, the awards identify individual excellence across a number of different performance categories.\n\nA company’s performance is determined by a tailored version of the Megabuyte Scorecard – Scorecard Lite, – a proprietary benchmarking methodology, which is designed specifically for scale-up companies.\n\nThe rigour and independence of the Scorecard methodology ensures that inclusion in any Emerging Stars Winning Companies listing is one of the most influential and sought-after accolades in the UK technology sector.\n\nThe event brings together around 50 CEOs from the 2018 Emerging Stars, as well as CEOs of the Megabuyte50 and Quoted25 companies and is held on March 7, 2018 in London."
    });
  })
  .then(() => {
    NewsItem.create({
      title:
        "GODEL REDUCES QA TESTING TIMES FOR OEC COMPANY CLIFFORD THAMES BY A FACTOR OF 24",
      publishedAt: "2018-02-05",
      spoiler:
        "Clifford Thames, an OEC company, sits at the heart of the global automotive aftermarket.  It has an expanding portfolio of web-based platforms that are used throughout the automotive industry. They create and manage the data needed to repair and maintain vehicles for manufacturers, repairers, leasing and fleet companies and their partners.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2016/10/Clifford_Thamessm.png",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/02/CT1.png",
      content:
        "Clifford Thames, an OEC company, sits at the heart of the global automotive aftermarket.  It has an expanding portfolio of web-based platforms that are used throughout the automotive industry. They create and manage the data needed to repair and maintain vehicles for manufacturers, repairers, leasing and fleet companies and their partners.\n\nBy working with Godel Clifford Thames can provide solutions to customers more efficiently helping their customers support their aftersales strategy and increasing their revenue and customer retention.\n\n[Download this technical whitepaper](https://mailchi.mp/godeltech.com/clifford-thames-whitepaper) to explore the unique approach which Godel took to creating a complex new system."
    });
  })
  .then(() => {
    NewsItem.create({
      title: "SPRING FRAMEWORK 5; THE SWISS KNIFE FOR MICROSERVICES",
      publishedAt: "2018-01-30",
      spoiler:
        "Spring Framework 5 is a major release of Pivotal’s framework and along with Spring Boot, Spring Data and Spring Cloud, it’s proving to be the Swiss Knife for delivering microservices. It has lots of features ready to use out of the box, is simple, fast, and efficient and doesn’t have a learning curve of months.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/01/Java-article-thumbnail.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/01/Coding-featured-image-.jpg",
      content:
        "Spring Framework 5 is a major release of Pivotal’s framework and along with Spring Boot, Spring Data and Spring Cloud, it’s proving to be the Swiss Knife for delivering microservices. It has lots of features ready to use out of the box, is simple, fast, and efficient and doesn’t have a learning curve of months. Most importantly, Spring has dedicated a lot of effort to delivering features that can be deployed in the cloud, on AWS, Azure or GCP and provides lots of support – which is music to Godel developers’ ears, as so much of our work is either moving or developing our clients applications in the cloud.\n\nLaunched 15 years ago as a simplified alternative to J2EE development, Spring fast became popular as a lightweight alternative to often over-complicated J2EE solutions. Now it delivers over 20 projects under one roof including Spring Boot, Spring Cloud and Spring Kafka. A key element is infrastructural support at the application level focusing on the ‘plumbing’ of enterprise solutions so that teams can focus on application-level business logic, without unnecessary ties to specific deployment environments. It minimises cumbersome steps in the development process and is designed to allow developers to spend more time writing code and less time navigating complex IT systems.\n\nThis latest release has been four years in the making and is probably the most significant release of Spring Framework so far. It offers the developer community the freedom to choose the right stack for the right job. Choosing between reactive programming and traditional blocking style or imperative development is a nuanced decision, but with the advent of Spring Framework 5, the choice is yours. It is now possible to combine the approaches – flexibility is the most important thing behind this framework and it delivers on its promise. Undoubtedly these attributes are contributing to the growth of Spring Framework and its growth is the reason that we use it as de facto for Java development at Godel.\n\nAccording to Zero Turnaround’s Java Tools and Technologies Landscape report 2016, Spring is dominant with 43% of respondents in its survey stating they use Spring MVC, and 29% stating they use Spring Boot. Spring Boot makes it easy to create stand-alone, production-grade Spring based applications that are easy to ‘just run’. It takes an opinionated view of the Spring platform and third-party libraries so development can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration and once again it is the most popular framework for microservices development, and due to the nature of Uber JAR, is one of the most cloud/container friendly too. The Zero Turnaround Java Web Frameworks index also places Spring mvc and Spring Boot, in first and third places respectively.\n\nIf you’d like to know more about developing microservices with Java tools, please contact [Aliaksandr Karymau](https://www.linkedin.com/in/aliaksandrkarymau/)"
    });
  })
  .then(() => {
    NewsItem.create({
      title:
        "GODEL DELIVERS SCALABLE ‘MARKETPLACE’ FOR RENTALCARS.COM ON THE AWS PLATFORM",
      publishedAt: "2018-01-26",
      spoiler:
        "Godel is delivering scalability on the Amazon Web Services (AWS) platform for Rentalcars.com via the creation of ‘Marketplace’– as described by Andy Thorburn, Head of National Supply, Adam Flynn, Lead Solutions Architect and Chris Kenny, Product Owner for Marketplace by Rentalcars.com in a new video testimonial. Watch the full video here.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2016/11/RC_sm.png",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/01/shutterstock_373307200-e1516958826363.jpg",
      content:
        "Godel is delivering scalability on the Amazon Web Services (AWS) platform for Rentalcars.com via the creation of ‘Marketplace’– as described by Andy Thorburn, Head of National Supply, Adam Flynn, Lead Solutions Architect and Chris Kenny, Product Owner for Marketplace by Rentalcars.com in a new video testimonial. [Watch the full video here](http://www.godeltech.com/case_study/rentalcars-com/).\n\n“Rentalcars.com delivery pace is fast, we do everything fast, we’ve growth quickly as a business and it’s a constant challenge trying to keep pace with that,” explains Andy Thorburn, Head of National Supply at Rentalcars.com.\n\n“The vision for Marketplace is simple, we wanted to make it easier for smaller car rental companies to engage with us, so that we can offer customers a broader selection of places to rent cars from. There were technical challenges with that and we’re removing those with Marketplace.”\n\nAdam Flynn, Lead Solutions Architect at Rentalcars.com also comments: “In terms of technology, it’s been the single most complex integration project during my eight years with Rentalcars.com.\n\n“AWS has been beneficial because it’s allowed us to live in splendid isolation of everything else we have at Rentalcars. So it’s that start up mentality of a completely greenfield project allowing us to spin up some environments very quickly.\n\n“From the outset we wanted everything defined as code so all infrastructure is now repeatable which has allowed us to build a platform that will let us innovate at pace. It’s laid the foundations for a DevOps culture. Within Marketplace they started with a fairly traditional infrastructure but now that’s progressed through the project we have a nice balance between Dev and Ops.\n\n“We’ve been able to start with a relatively low cost environment with the flex of the cloud to grow and expand.”\n\nGodel’s development work has been instrumental to the project and the team at Rentalcars.com is keen to point out what a team effort the project has been.\n\n“Godel really bought into what we were trying to achieve with Marketplace and as a business. They’ve gone the extra mile for me – nothing has ever been too much trouble. They adapted their processes to our requirements,” Chris Kenny, Product Owner for Marketplace by Rentalcars.com\n\nAndy Thorburn sums up by commenting: “One of the things that worked well was being able to flex the size of the team to appoint where we could achieve highest possible velocity for the things we were working on at that time.\n\n“It was only about six weeks into the project when I felt that everyone who was working on this (Marketplace), gets it and really wants to do a good job on it. Godel is professional, productive and personable.”"
    });
  })
  .then(() => {
    NewsItem.create({
      title:
        "ANOTHER RECORD YEAR FOR GODEL AS TURNOVER INCREASES 53% TO £13.8 MILLION IN FY2017",
      publishedAt: "2018-01-16",
      spoiler:
        "Godel, the nearshore software development company, has reported its annual turnover has reached £13.8 million for the year to December 2017. This is a 53% increase in turnover on FY2016 when revenues reached over £9 million.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/01/manchester-thumbnail.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/01/Manchester-city-tower-.jpg",
      content:
        "Godel, the nearshore software development company, has reported its annual turnover has reached £13.8 million for the year to December 2017. This is a 53% increase in turnover on FY2016 when revenues reached over £9 million.\n\nThe company has won a string of awards in 2017 including, the Hiscox Sunday Times Tech Track award for Best Management Team, a European Software Testing Award, been included in the Forbes top 500 global software companies, acknowledged as a fast growing company in the Deloitte Fast 500 EMEA and has won many other industry awards. It was also included in the Hiscox Sunday Times Tech Track top 100 tech companies listing for the first time.\n\n“This year has really put Godel on the map, with clients and prospects, but also within our industry being recognised by our partners and industry peers,” explains Neil Turvin, CEO, Godel.\n\n“Demand for our software development skills by large UK brands like Virgin Holidays, Experian and The White Company continues, as does the need to grow their teams so they can scale their businesses rapidly to keep up with the demand that our increasingly digital world brings.”\n\nIn 2017 Godel invested £500k in enhancing its dedicated Cloud and DevOps division, created new management roles in DevOps and Quality Assurance to support it and has been awarded several Microsoft and Amazon Web Services partner accreditations. Employee count also grew by 50% and is expected to do so again in 2018.\n\n“We have an extremely strong forecast heading into 2018 covering a wide range of different technologies including .Net, Java, PHP, cloud, business intelligence, AI and machine learning as well as automation and quality assurance projects – this is on top of significantly growing the existing customer base,” explains Turvin.\n\n“It’s been a truly meteoric year for the company – we’ve hired some of the best people and invested in training and accreditations – but we’ve stuck to our mantra of doing the right thing by clients and doing software development properly, and that is at the heart of our success.”\n\nOff the back of its success, Godel, which has software development centres of excellence in Belarus, has donated £50,000 to the Chernobyl Children Charity which will result in it being able to improve facilities for children and adults in need."
    });
  })
  .then(() => {
    NewsItem.create({
      title:
        "GODEL IS AWARDED STANDARD CONSULTING PARTNER STATUS BY AMAZON WEB SERVICES",
      publishedAt: "2018-01-05",
      spoiler:
        "Godel has been awarded Standard Consulting Partner status by Amazon Web Services thanks to its continuing work to move clients’ software to the cloud on the Amazon platform.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/01/AWS-acceditation-logo.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2018/01/Cloud-computing-header.jpg",
      content:
        "Godel has been awarded Standard Consulting Partner status by Amazon Web Services thanks to its continuing work to move clients’ software to the cloud on the Amazon platform.\n\nGodel is now one of a select group of partners who demonstrate a high level of expertise and consultative service in supporting cloud-based solutions on AWS.\n\n“Godel has a rapidly growing number of accredited AWS professionals in its development teams, and beyond that a wealth of developers with both open-source and Microsoft engineering skills who can develop for the AWS platform,” explains John Bailey, cloud partner manager, Godel.\n\n“We’ve been focussed on achieving the next tier of partner accreditation for the last six months in line with increased demand for cloud skills from many of our customers. We’ve worked with a number of clients across different sectors, achieving technical, professional and associate accreditations.\n\n“We will continue to work hard to achieve the next levels of certification so that we can truly deliver the best software development on the AWS platform for our customers.”\n\nThis is the second certification in as many weeks for Godel, having also achieved a Microsoft Gold Partner status for the Cloud Platform certification, recognising Godel’s expertise in the Azure platform."
    });
  })
  .then(() => {
    NewsItem.create({
      title: "HOW WILL SOFTWARE DEVELOPMENT EVOLVE IN 2018?",
      publishedAt: "2017-12-30",
      spoiler:
        "Last year, Godel gave four predictions on what would most impact the software development landscape throughout 2017. Now that 2018 has arrived, we expect change to take place at an even more accelerated pace. With the scene set for rapid technological advancements, Godel’s technical leadership team has predicted what will take place within software development in 2018 – and how organisations’ IT strategies will be shaped as a result.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/12/TN.png",
      content:
        "Last year, Godel gave four predictions on what would most impact the software development landscape throughout 2017. Now that 2018 has arrived, we expect change to take place at an even more accelerated pace. With the scene set for rapid technological advancements, Godel’s technical leadership team has predicted what will take place within software development in 2018 – and how organisations’ IT strategies will be shaped as a result.\n\n![HOW WILL SOFTWARE DEVELOPMENT EVOLVE IN 2018?](http://www.godeltech.com/wp-content/uploads/sites/2/2017/12/8-Technology-Predictions-01-2.png)\n\n[Download the infographic](http://www.godeltech.com/wp-content/uploads/sites/2/2017/12/8-Technology-Predictions.pdf)"
    });
  })
  .then(() => {
    NewsItem.create({
      title:
        "GODEL INVESTS £500K IN NEW CLOUD AND DEVOPS DIVISION AND BECOMES MICROSOFT GOLD PARTNER FOR CLOUD PLATFORM",
      publishedAt: "2017-12-14",
      spoiler:
        "Nearshore software development organisation Godel has invested £500k in enhancing its dedicated Cloud and DevOps division and has been awarded Microsoft Gold Partner status for Cloud Platform to add to its existing Gold certification for Application Development.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/12/microsoft-gold-certification.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/12/500k-microsoft.png",
      content:
        "Nearshore software development organisation Godel has invested £500k in enhancing its dedicated Cloud and DevOps division and has been awarded Microsoft Gold Partner status for Cloud Platform to add to its existing Gold certification for Application Development.\n\nThe investment is being channelled into a new Head of DevOps role plus a team, an R&D team and the professional training & development of a significant number of its Cloud, DevOps and development staff in Microsoft Azure, Amazon Web Services and Google Cloud Platform, as well as in intelligent applications and cognitive services.\n\nThe new division will enhance Godel’s existing cloud competencies and provide the organisation with extended capability to deliver dedicated software development teams where skills currently don’t exist or can’t be acquired fast enough by clients in-house. The Godel development teams work closely with customers to deliver a range of services including migration of applications into the cloud, platform as a service, microservices, AI and machine learning, automation, business intelligence and testing.\n\n“Increasingly our customers are working with us to move legacy applications or develop new applications for the cloud – brands like Experian and Rentalcars.com,” explains John Bailey, cloud partner manager, Godel.\n\n“This investment made into our talented teams means that we can deliver on a set of offerings for clients by having cross functional teams that focus on delivering the latest technologies, in partnership with our clients.”\n\nThe investment will also help Godel to build partner relationships with the main platform vendors, gain accreditations and formalise offers around its cloud services. Godel is delivering a 12-month strategy to use its experience and gain further partner status’ by gathering customer references, meeting revenue thresholds and gaining authorised technical & professional accreditations.\n\n“We’ve already made leaps and bounds into being able to offer cloud and DevOps to customers – we have the warts and all experience but this investment puts us on a path to supplementing this experience with formal accreditations and an increasingly skilled workforce. We will be able to deliver customers a truly cross-functional team that not only delivers world-class leading software but also can implement it to best effect when meeting business objectives,” concludes John Bailey."
    });
  })
  .then(() => {
    NewsItem.create({
      title: "GODEL WINS EUROPEAN SOFTWARE TESTING AWARD 2017",
      publishedAt: "2017-12-06",
      spoiler:
        "Godel has added another award to its trophy cabinet this week by winning a European Software Testing Award in the retail category for the work it has done with automotive company Clifford Thames, an OEC company.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/12/ESTA-thumbnail.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/12/ESTA-featured-image-.jpg",
      content:
        "Godel has added another award to its trophy cabinet this week by winning a European Software Testing Award in the retail category for the work it has done with automotive company Clifford Thames, an OEC company.\n\nClifford Thames challenged the Godel team to work with their team to create a system for one of the largest organisations in the automotive aftermarket that would deliver an innovative view on car maintenance related information to the end user via the VIN number of each car.\n\nThe system had to accumulate the catalogued information received from the list of sources in different formats on a regular basis, process it, and simplify it to be accepted by the third-party system responsible for UI – created and run by the third party. The new system would allow the user to receive all the data about his car parts and replacement schemes.\n\nJudges considered award entrants based on a number of factors:\n\n * Evidence of working closely with stakeholders to deliver the project on time and within budget\n\n * Demonstration of a successful software testing project utilising a best practice method/technique\n\n * Verification of project goals, importance, achievements and successful results\n\n * Evidence and evaluation of overcoming project challenges/obstacles\n\n * Detailed discussion around project methodology and justification of resource choices\n\n * Evidence of commitment to industry best practices and standards\n\n“Godel takes a consultative approach to working with clients and provides the capabilities and skills to help retailers digitise legacy systems and move their business to the cloud,” explains Neil Turvin, CEO, Godel.\n\n“It’s great to see the recognition for a project that was ground-breaking in terms of QA and testing in many ways.”"
    });
  })
  .then(() => {
    NewsItem.create({
      title: "DEVOPS IN THE CLOUD DEMYSTIFIED",
      publishedAt: "2017-12-05",
      spoiler:
        "We asked Godel’s new Head of DevOps, Sergey Sverchkov, how DevOps in the cloud can help businesses. Here’s his take on the steps organisations can take to make it a success.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/12/Sergey-Sverchkov-thumbnail.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/12/Sergey-DevOps-featured-image-.jpg",
      content:
        "We asked Godel’s new Head of DevOps, Sergey Sverchkov, how DevOps in the cloud can help businesses. Here’s his take on the steps organisations can take to make it a success.\n\n**DevOps in the cloud: What does it mean and how can it help your business?**\n\nDevOps is a set of practices and skills that help business to evolve quickly in the modern era. Defined semantically, it’s the combination of software development skills and set practices for running and maintaining a solution without an impact on business availability for clients, the company, employees and partners.\n\nIt requires the blending of all those skills into one role.  Developers are keen to implement new features and ideas, whereas the support or operation team’s main duty is to provide 24/7 availability of business systems and minimise the risks for different kinds of losses. Companies of all sizes face these challenges, so developing an approach for adapting products and services is essential for sustainable business growth.  It’s not enough to just create the product – it needs ecosystem of services around the core products.\n\nTo keep up with the pace of change requires focus on the most important elements: products, clients, new ideas and return on investments – and the cloud delivers answers to business IT needs. No need to buy or rent and maintain hardware and servers, storage, networking (unless you’re the cloud provider), instead start as small as you can and grow with your business needs. The cloud is not only about infrastructure-as-a-service now, it provides managed services for applications, and support for various types of deployment – virtual machines, containers, or bundled applications running in platform-as-a-service.   But the complexity comes with the freedom and agility provided by the cloud.\n\nDevOps practice is about automating deployment, maintenance, monitoring and alerts reaction for any kind of services within the IT infrastructure of a business. Automation is the key point, i.e. when you have one virtual machine or application instance and no 24/7 requirement – you can do the production rollout manually (which happens quite frequently for small business), but when you have dozens of applications, databases and distributed systems – automation is a must.   And as the business grows and demands for IT services are evolving, operations must change too. DevOps is crucial for business agility and success.\n\nTo be able understand and even evaluate all options between cloud providers requires time and knowledge.  As always there is no just one-fit-all choice – it depends on business needs. And this is where cloud experts help to address the variety of cloud services.\n\n**How does DevOps in the cloud differ from other types of DevOps?**\n\nPublic clouds provide, not only virtual machines, storage and networking, they also create a set of managed services for addressing different kinds of business needs. Managed services are transparent for the consumer (it can be an application or a user), e.g. you create and use it and don’t worry about the underlying complexity for running these services. DevOps engineers must understand how the services work, what they’re used for and how to automate creation and management of them. So, DevOps in the cloud is somewhat more complex, however, there are also automation tools developed by cloud providers like Amazon AWS Cloud Formation, Google Cloud Platform and Microsoft Azure to describe and manage services through templates. These templates are code pieces that are versioned and tracked in source code repositories, to tackle infrastructure definition as the code.  With the private cloud, solution automation is more complex, but of course there are tools that address automation for private cloud as well in different ways (Terraform, Puppet, Chef, Ansible).\n\n**How does DevOps in the cloud help an organisation? What are the main benefits, and why?**\n\nAs I already mentioned, automation of IT services to meet business objectives is the key factor for success. And the development process is just one of the pieces for delivering a solution to the customer. Development artifact is followed by a set of testing processes and deployment, through to production, which ideally should be fully automated and with zero downtime. From this perspective DevOps practice is not only about benefits but more about addressing the real business needs and keeping up the pace of change.\n\n**What are the successful steps organisations need to take to make DevOps in the cloud a success?**\n\nThere are several major steps in the journey to successful DevOps practice in the cloud. The key points are:\n\n * Clearly define business goals – why are you moving to the cloud?   Then consider the myriad of other factors governing the decision.\n\n * Flexible options for paying for cloud resources.\n\n * Getting rid of hardware planning and administration (which is not the case for private cloud in the datacenter).\n\n * The ability to use managed services (Databases, Messaging, Analytics, AI, etc.).\n\n * The ability to scale up and down. It is still an option to run the website in colocation or datacenter with no demand for scaling resources for increasing traffic.\n\n * Evaluate cloud providers: geographic distribution, cost of basic services (compute, networking, storage), service certification for security compliance (PCI DSS, HIPAA, etc.), cost and levels of support, free tier availability.\n\n * Plan the budget that you can spend for running IT services in the cloud on a scale for at least one year (add 30% to the basic calculation, as it’s rarely accurate enough at the start).\n\n * Design the architecture of solutions in the cloud.  Evaluate what it takes to run a specific service or application as cloud-ready.  A good starting point for that evaluation is the 12 factors of cloud-native development.\n\n * Plan and estimate migration work and costs (that can be quite significant depending on the amount of legacy systems and integration).\n\n * Find the right team to do the migration to the cloud or train your own team.\n\n**What are the best practices for DevOps in the cloud, and why?**\n\nThere are many practices that run successfully in the cloud. It’s worth mentioning that cloud is not the silver bullet for business challenges, and there is no one-fit-all choice.   But cloud allows you to abstract from hardware, networking, and maintenance complexities, and build the infrastructure in minutes. Not every legacy system can be easily migrated to the cloud, and scalability comes from the design and architecture principles.  For example, traditional databases are single instance and can’t scale out with adding new machines.  So, from this perspective best practice comes from the right team that has previous experience and knows all the hidden issues.  Even the development approach needs to change to be successful in the cloud.\n\n**What are the most important things an organisation should know about DevOps in the cloud?**\n\nCloud is about changing the culture of delivering solutions.   It takes time to learn and setup the culture and practices within the organisation. Cloud is about the right people and different processes. But all these changes definitely pay off in the long run.\n\n**How can organisations best supports DevOps in the cloud efforts?**\n\nHire the best people in-house and externally – cloud experts.\n\n**How will DevOps in the Cloud change in the next 12-18 months?**\n\nIt’s clear that the DevOps culture will evolve, addressing new automation challenges and covering new cloud services. Containers and orchestrations, microservices cloud-native development and usage of managed services will be the mainstream. In turn, that will change the culture of development with organisations. As with any culture shift it’s all about the right people."
    });
  })
  .then(() => {
    NewsItem.create({
      title:
        "GODEL’S ELENA PRILUTSKAYA TALKS ABOUT A CONTEXT-DRIVEN APPROACH TO QUALITY ASSURANCE",
      publishedAt: "2017-12-04",
      spoiler:
        "Long-standing Godel quality assurance engineer Elena Prilutskaya recently presented a seminar on the subject of context-driven testing at Leeds Tester Gathering – an event run for testers, by testers. Elena explains the principles of the concept, and how she, along with all Godel software development and quality assurance teams, are able to adapt to all manner of contextual differences within our partnerships.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/12/Lena-P.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/12/lena-context-driven-testing-featured-image-.jpg",
      content:
        "Long-standing Godel quality assurance engineer Elena Prilutskaya recently presented a seminar on the subject of context-driven testing at Leeds Tester Gathering – an event run for testers, by testers. Elena explains the principles of the concept, and how she, along with all Godel software development and quality assurance teams, are able to adapt to all manner of contextual differences within our partnerships.\n\nQuality assurance plays a vital part of the software delivery process, as it is integral to the building, releasing and improving of any software project. For businesses, software delivery has to evolve in pace with rapidly changing stakeholder demands, which means that quality assurance functions must be able to adapt to contextual changes in requirements.\n\nI have worked in quality assurance for nine years, for different clients in different domains, each with their own requirements. In my time, what I’ve grown to understand is that you need to take responsibility for making your own decisions and choose the best techniques, rather than blindly following testing ‘best practices’. Godel champions this approach as very important in delivering the best results for its clients. I always found the level of confidence Godel places in its quality assurance engineers to be very high.\n\nContext-driven testing is an approach which focuses on the value of varied user needs. The end user of a software project and their requirements is defined as the most important factor. The concept doesn’t state to ignore best practices, in fact it advises you to play with them – the value of any testing practice depends heavily on the context.\n\nWhen prioritising the context of a project and choosing the best testing approach to take, there are essentially four types of context-based testing to consider: context oblivious, context specific, context imperial and context driven.\n\nFirstly, context oblivious is when we are unaware of the relationship between the way you approach testing, and your reason for choosing these approaches. It’s done without any thought for the match between testing practices and testing problems. Context-specific is when you’re faced with a set of problems in the project, and you have a set of solutions ready to use. The problems don’t change, so you don’t choose to adapt your solution accordingly.\n\nContext imperial is when you know the best practices, and you are trying to apply them to all situations. You don’t try to play with them. For example, if you don’t have a specification, but you still need to test, a context imperial approach would lead to the refusal to test until the specification is received. Why not try and test beforehand?\n\nFinally, context-driven testing is learning about practices; decomposing and recomposing them to fit in the way you need. To be context-driven, it’s important to consider the needs and goals of the project, existing assets and liabilities, risks and requirements. The skills to apply mainly involve asking questions and exploring the current situation, focusing on the unique context of the project to tailor an individual approach.\n\nThe parallels between context-driven testing and the pillars of agile development are significant; both place the value of individuals over tools, both prioritise collaboration and responding to change – or context – and view them as a shared necessity. However, context-driven testing is not limited to agile teams, and its values can be applied in all manner of software development environments.\n\nTo analogise the concept, look at driving. It seems like in each country, the principles are the same, right? You’ll sit down behind the wheel and go. But, you need to look at the context. I am from Belarus, where if we cross the street in the wrong place we will be fined. So when I came to the UK for the first time, I was absolutely shocked by what looked like chaos on the streets! I couldn’t begin to understand how all the traffic was able to avoid the crowds of pedestrians crossing the roads here, there and everywhere.\n\nOver time, however, I began to consider the context of the situation. Really, the UK’s roads are organised, and there were rules in place – just slightly different to the rules in Belarus. To sit behind the wheel and drive in the UK, I had to become context-driven and apply only the most relevant best practices.\n\nHaving worked on a number of different projects at Godel, I have a wealth of experience in applying context-driven values to my work. Godel quality assurance engineers fully integrate with an organisation’s in-house software development function – which means that the ability to adapt to different organisations’ cultures is a key part of Godel’s own culture.\n\nFor four years I was part of a Godel project, working with a UK organisation to build and test a very complex system. Functionality requirements were constantly changing and delivery priorities shifted a lot. We had no specifications at all – only Jira story cards. Also, while we did have business analysts, they were business-oriented rather than technical.\n\nSo when approaching testing within this project it was very important to look at the context rather than follow standard best practices. Firstly, our quality assurance sprints were one week behind the development teams’ sprints. The contextual reason for this was that our requirements came in the form of Jira story cards from business-oriented business analysts. For the developers this meant that the development process would often be long due to the complexities of each requirement, which in turn would delay testing. Naturally our client wanted completed functionalities at the end of sprints, and so we worked by testing end-to-end, which was much easier than testing separately.\n\nThe developers in this project undertook functional tests – it was great! At the time, there was no automated quality assurance function, so to be sure that we had good quality code this was chosen as the best practice based for the context. We also worked to replacefunctional tests written by our developers with automation regression testing in order to save time and deliver to the client faster. Also to save time we didn’t use test cases – instead we wrote BDD acceptance test criteria and Jira cards which our AQA function could then use as necessary.\n\nAgain taking the context of the project into account, it was vital that there was very strong communication between the team. The lack of a technical BA led us to appoint one of the quality assurance team members to take up this role and write requirements to help the developers understand how the system should behave from a technical perspective.\n\nThe client is very happy with the work we provide – since Godel teams provide a unique approach to each client and each project, we are able to apply the best techniques for their unique requirements every time.\n\nTo explore how our clients feel about their partnerships with Godel and how our unique approach to software delivery works for each of them, visit www.godeltech.com/industries/"
    });
  })
  .then(() => {
    NewsItem.create({
      title: "DOES THE GROWTH OF KOTLIN SIGNAL A DECLINE IN JAVA?",
      publishedAt: "2017-11-28",
      spoiler:
        "According to recent figures by Oracle, there are 12 million developers running Java, 38 billion active Java Virtual Machines and 21 billion cloud-connected VMs – so we can assume that Java shows no signs of declining in development importance. However, much is being discussed about the growth of Kotlin, the open source language from JetBrains that targets the Java Virtual Machine (JVM), Android, JavaScript and Native. Google recently put its support behind Kotlin when it announced earlier this year that it was adding the programming language to it Android operating system – and since then, there has been a big adoption among developers.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/11/K-logo.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/11/Kotlin-full-logo.jpg",
      content:
        "According to recent figures by Oracle, there are 12 million developers running Java, 38 billion active Java Virtual Machines and 21 billion cloud-connected VMs – so we can assume that Java shows no signs of declining in development importance. However, much is being discussed about the growth of Kotlin, the open source language from JetBrains that targets the Java Virtual Machine (JVM), Android, JavaScript and Native. Google recently put its support behind Kotlin when it announced earlier this year that it was adding the programming language to it Android operating system – and since then, there has been a big adoption among developers.\n\nJetBrains says Kotlin is more concise than Java, requiring about 40 per cent fewer lines of code and thus making it better for developers to use. It’s shorter, lighter and more understandable and is fast becoming the go-to for Android developers to use, and is also more type-safe and supports functional programming constructs. However, it does pose some interesting issues for CTOs not least in finding the right Java skills for internal development teams.\n\n**Issues for CTOs**\n\nFor CTOs, Kotlin creates risks; it’s currently a new language and that means that it’s unproven. It also means that best practice processes haven’t been established and there is a learning curve for internal development teams to go through. I liken this to a Swiss Army Knife – there are many combinations with potentially the same outcome, but those combinations need ironing out to achieve maximum effectiveness – which components are used and in what order to get the best from of the product for the job at hand? There are no shortcuts to finding the answers – except to get help from those who have already asked the questions before you, and created the best practice processes to adopt.\n\nOf course the flip side is that there is also risk if CTOs don’t choose to update their in-house development skills as new languages like Kotlin grow in popularity. Hiring the best skills means attracting those developers who want to put new techniques to use – if they don’t have that opportunity, then it ultimately becomes more difficult to hire young talent – the talent goes somewhere else. Whilst programming languages like Kotlin are relatively early in their growth and development (V1.0 is currently available), organisations are finding it easier to outsource to a development partner that already has the skills to supplement an in-house team and has already established many of the processes required to attract the best talent for the job.\n\n**The next five steps CTOs should take**\n\n1. Start by researching internally amongst your own developers – especially the android developers – those who are already aware of Kotlin. You probably already have specialists who have started learning Kotlin and may have used it before.\n\n2. To introduce Kotlin, organise an internal hackathon where your developers must perform a useful task using Kotlin and then discuss the pros and the cons of the language. Choose the best potential project to start with.\n\n3. Start small – due to full Java interoperability Kotlin can be used within any Java project to develop a small piece of functionality like a library, module or service.\n\n4. Begin a pilot Kotlin project and pay detailed attention to development experience: follow agile development practices including code reviews, regular technical retrospective, technical wiki with code samples and snippets for example. Build your project on several Kotlin resources like Kara web framework or RxKotlin for example.\n\n5. After pilot project completion organise a final retrospective to discuss what was good and bad and agree further steps with Kotlin.\n\nIf you’d like to know more about Godel’s Java or Kotlin development skills, please [contact Aliaksandr Karymau](http://www.godeltech.com/get-in-touch/)."
    });
  })
  .then(() => {
    NewsItem.create({
      title:
        "GODEL PREPARES DEVELOPERS FOR GDPR: THE BIGGEST SHAKE UP IN EUROPEAN DATA PROTECTION AND PRIVACY IN A DECADE",
      publishedAt: "2017-11-17",
      spoiler:
        "Godel is preparing its workforce for GDPR training that will initially see around 14 divisional heads of staff prepared for the changes that come into effect in May 2018. Godel’s senior management including QA, software development, business analysis, project management and data science professionals will then transfer their newly acquired knowledge to their teams via internal GDPR workshops – including every new starter to the business.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/11/GDPR-preperation-thumbnail-.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/11/GDPR-main-article-img-.jpg",
      content:
        "Godel is preparing its workforce for GDPR training that will initially see around 14 divisional heads of staff prepared for the changes that come into effect in May 2018. Godel’s senior management including QA, software development, business analysis, project management and data science professionals will then transfer their newly acquired knowledge to their teams via internal GDPR workshops – including every new starter to the business.\n\n“GDPR is the biggest shakeup in data protection in over a decade and will affect how to navigate the software development lifecycle as well as also impacting Godel’s commercial and marketing teams – like other businesses,” explains Neil Turvin, CEO, Godel Tech.\n\n“We see this training as completely necessary in order to protect business continuity for ourselves as well as our clients and strengthen our reputation as a development partner who puts quality at the heart of our offering.”\n\nGDPR requires substantial work to assess the risks and implement new controls before it enters into law in May 2018. The course will equip Godel’s employees with a solid knowledge of the practical implications of the changes.\n\nTraining will begin on November 23, 2017."
    });
  })
  .then(() => {
    NewsItem.create({
      title:
        "GODEL WINS BEST MANAGEMENT TEAM AT SUNDAY TIMES HISCOX TECH TRACK 2017 AWARDS",
      publishedAt: "2017-11-09",
      spoiler:
        "Godel picked up the Best Management Team award at the 17th annual Sunday Times Hiscox Tech Track 100 national awards dinner. The award comes off the back of a listing in the Tech Track 100 fastest growing private technology companies back in September.",
      coverImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/11/thumnaill-img.jpg",
      spoilerImage:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/11/featured-img.jpg",
      content:
        "Godel picked up the Best Management Team award at the 17th annual Sunday Times Hiscox Tech Track 100 national awards dinner. The award comes off the back of a listing in the Tech Track 100 fastest growing private technology companies back in September.\n\nThe Tech Track 100 league table ranks the UK’s private tech, media and telecoms (TMT) companies with the fastest-growing sales.\n\nThe award, sponsored by BDO was presented by Tony Spillett, national head of technology and media, to Chloe Barrett and Neil McMurdo, senior members of the Godel team.\n\nThe event, held at The Brewery in London celebrates some of the UK’s fastest growing companies, and the 290 guests at the dinner included founders and senior directors from leading tech companies such as Farfetch, LADBible, Immunocore, LoveCrafts and Zopa.\n\nGuest speakers on the night were Jon Reynolds MBE, co-founder and chief executive of SwiftKey, Nicole Eagan, chief executive of Darktrace, and Will Shu, co-founder and chief executive of Deliveroo. Each company received a certificate with their ranking, and sponsors presented a number of special awards."
    });
  })
  .then(() => {
    Industry.create({ tag: "retail", title: "retail" }).then(
      model => (industries.retail = model)
    );
  })
  .then(() => {
    Industry.create({ tag: "travel", title: "travel" }).then(
      model => (industries.travel = model)
    );
  })
  .then(() => {
    Industry.create({ tag: "automotive", title: "automotive" }).then(
      model => (industries.automotive = model)
    );
  })
  .then(() => {
    Industry.create({ tag: "isv", title: "isv" }).then(
      model => (industries.isv = model)
    );
  })
  .then(() => {
    Industry.create({ tag: "e-commerce", title: "e-commerce" }).then(
      model => (industries.eCommerce = model)
    );
  })
  .then(() => {
    Industry.create({ tag: "finance", title: "finance" }).then(
      model => (industries.finance = model)
    );
  })
  .then(() => {
    Industry.create({ tag: "energy", title: "energy" }).then(
      model => (industries.energy = model)
    );
  })
  .then(() => {
    Industry.create({ tag: "manufacturing", title: "manufacturing" }).then(
      model => (industries.manufacturing = model)
    );
  })
  .then(() => {
    Industry.create({
      tag: "professional",
      title: "professional services"
    }).then(model => (industries.professional = model));
  })
  .then(() => {
    Industry.create({ title: "telecoms" }).then(
      model => (industries.telecoms = model)
    );
  })
  .then(() => {
    Industry.create({ title: "online/tech" }).then(
      model => (industries.online = model)
    );
  })
  .then(() => {
    Industry.create({ title: "health" }).then(
      model => (industries.health = model)
    );
  })
  .then(() => {
    Industry.create({ title: "construction" }).then(
      model => (industries.construction = model)
    );
  })
  .then(() => {
    Technology.create({
      tag: "microsoft",
      title: "microsoft",
      pageTitle: "MICROSOFT TECHNOLOGIES",
      technologiesList:
        "### Programming Languages\n.NET 4.0+, .NET Core, C#\n\n ### Data Access Technologies\nEntity Framework 6+, ADO.NET, Dapper.NET, NHibernate;\n\n ### Application Layer Technologies\nMVC, IoC, DI, MVVM, MVP, WWF;\n\n ### Services Layer Technologies\nASP.NET WEB API 2, REST, JSON, MicroServices, WCF, Web Services;\n\n ### Presentation Layer WEB Technologies\nASP.NET MVC 4+, ASP.NET Core, JavaScript/TypeScript, jQuery/jQuery UI, HTML 5, ReactJS, AngularJS/Angular2+, Bootstrap, CSS3/SASS/LESS;\n\n ### Cache Layer Technologies\nRedis, Microsoft App Fabric, NCache, MemCached;\n\n ### Cloud Services Technologies\nMicrosoft Azure, Amazon AWS;\n\n ### Integration Technologies\nMicrosoft BizTalk, RabitMQ, MSMQ, NServiceBus\n\n ### Testing & Code Quality Control Tools\nMSTest, NUnit, XUnit, NMock, Moq, Rhino, Selenium/WebDriver, SpecFlow , SoapUI, Sonar;\n\n ### Databases\nMS SQL, MySQL, PostgreSQL, Mongo DB\n\n ### Application Servers\nIIS 6+\n\n ### IDEs\nMS Visual Studio, VS Code\n\n ### Build Tools\nTFS, TeamCity, Jenkins ",
      pageSpoiler:
        "Godel are regularly recognised by Microsoft for technical excellence. We have been awarded with Gold partnership status across application development, cloud, data and DevOps, putting us within the top 1% of Microsoft Gold Partners worldwide."
    }).then(model => {
      return (technologies.microsoft = model);
    });
  })
  .then(() => {
    Technology.create({
      tag: "java",
      title: "java",
      pageTitle: "JAVA TECHNOLOGIES",
      technologiesList:
        "### Programming Languages\nJava, Groovy, Kotlin\n\n ### Core Technologies\nJava 8+ with functional programming, Spring IO Platform, Microservices (Uber JAR, Spring Boot, Dropwizard.io), cloud (AWS, GCP, Azure) both IAAS and PAAS (Lambdas, Kinesis, Redshift etc.), reactive programming (RxJava, Spring Framework 5, Ratpack.io etc.), distributed systems (Spring Cloud, Consul, Apache ZooKeeper etc.), live monitoring (Grafana, Graphite, Prometheus), solid TDD/BDD approach, container-based development and CI/CD (Docker, Jenkins, Harbor etc), Netty.io, Grizzly, Underthow.io.\n\n ### TDD/BDD:\nJunit, TestNG, Mockito, Powermock, Wiremock, JBehave, Cucumber, Geb, Spock, Hamcrest, Karma, JasmineJS]\n\n ### Microservices:\nSpring Boot, Dropwizard.io, Spring MVC/Retry, RxJava, Netflix OSS (Zuul/Eurika/Hystrix/Ribbon/Feign), Swagger/OpenAPI, Docker/Kubernetes, Consul\n\n ### Containerization:\nDocker Engine, Docker Compose, Kubernetes, Amazon ECS.\n\n ### Cloud:\nAmazon (EC2, ECS, Elastic Beanstalk, Kenesis, S3, SES, SQS, Lambda, RDS, DynamoDB, CloudFormation, CloudWatch etc.), Google Cloud Platform.\n\n ### Web Services Technologies:\nJAX-RS, JAX-WS, Apache Axis 1-2, Apache CXF, Glassfish Jersey 1-2, RESTEasy, Spring-WS\n\n ### Logging & Monitoring:\nDropwizard Metrics, Spring Cloud Sleuth, StatsD+Grafana, ELK, Zipkin, Hystrix Metrix + Hystrix Dashboard, Graphite, Prometheus, NewRelic, AppDynamics\n\n ### JavaScript/HTML/CSS:\nAngularJS 1-4, ReactJS, Ember, BackboneJs, KnockoutJS, Semantics, Canvas, Websockets, Web Storage, Sass, Less, PostCSS, Autoprefixer, Modernizr\n\n ### Databases:\nOracle, MS SQL Server, PostgreSQL, MongoDB, Cassandra, DynamoDB, MySQL, MariaDB, Neo4J, Liquibase, Flyway\n\n ### Queueing technology:\nApacheMQ, RabbitMQ, MSMQ, HornetQ, ZeroMQ, AWS SQS\n\n ### HTTP and Application Servers:\nTomcat, Netty, WebSphere, GlassFish, JBoss, Wildfly, Weblogic, Resin\n\n ### Source Control/Continuous Delivery:\nGIT (Atlassian Stash, BitBucket, GitLab), SVN, TFS, Mercurial, Perforce, Jenkins, Hudson, Teamcity, Bamboo\n\n ### Code quality tools:\nSonar, PMD, FindBugs, Cobertura, CheckStyle\n\n ### Project tracking and bug tracking systems:\nAtlassian Jira, Atlassian Confluence, TFS, Redmine\n\n ### Build Tools:\nMaven, Gradle, SBT, Ant/Ivy\n\n ### IDE and tools:\nArtifactory, Nexus, Intellij IDEA, Eclipse\n\n ### Operating systems:\nWindows, Linux, Mac",
      pageSpoiler:
        "Godel’s first ever project was written using Java technology, and since then the team has continued to expand on their experiences and skills. Godel’s Java division is a force to the reckoned with."
    }).then(model => (technologies.java = model));
  })
  .then(() => {
    Technology.create({
      tag: "php",
      title: "php",
      pageTitle: "PHP TECHNOLOGIES",
      technologiesList:
        "### Generic\nphp-5, OOP, phpunit, SPL (Standard PHP Library), php 7.\n\n ### Web design\nhtml5, css3, JavaScript, JQuery, JQuery-ui\n\n ### Application servers\nLASP (Linux + Apache + SQL-server + PHP ), WASP (Windows + Apache + SQL-server + PHP ), IIS, Nginx+fastCGI+PHP, Lighttpd+fastCGI+PHP\n\n ### Caching\nOPCache, Memcache, APC\n\n ### Templating\nTWIG, Smarty\n\n ### Maps\nGeoIP, Google maps API, mapserver, mapscript\n\n ### Frameworks\nCakePHP, Zend framework, Symfony, Laravel, Yii2, ZendFramework 2.\n\n ### CMS\nJoomla, Drupal,Magento\n\n ### Databases\n MySQL, MsSQL, dBase, DB++, Mongo, Ingres, Oracle, Paradox, PostgreSQL, SQLite, Sybase\n\n ### ORM\n Doctrine, ActiveRecord.\n\n ### Audio formats manipulation\n ID3 tags, (ID3v1 and ID3v2), OggVorbis, OpenAL\n\n ### Authentication services\nKerberis 5, Radius server, LDAP Cryptography & security: OpenSSL, Mcrypt, Mhash, GnuPG, ssh2, SNMP(v1 & v2)\n\n ### Image processing\nGD, ImageMagick, Exif\n\n ### Search\nSphinx, OpenSearchServer\n\n ### Mail services\nSMTP, POP3, IMAP, NNTP\n\n ### Notification/messengers\nXMPP (Jabber, Gtalk), SMS\n\n ### File formats\nPDF, PostScript, JSON, XML, Yaml, MS Excel, Open Document Formats, SHP, DXF\n\n ### Development tools\nPhpDocumentor, PhpCodeSniffer\n\n ### Continuous Delivery Technologies\nJenkins, TeamCity.",
      pageSpoiler:
        "Godel’s first ever project was written using Java technology, and since then the team has continued to expand on their experiences and skills. Godel’s Java division is a force to the reckoned with."
    }).then(model => (technologies.php = model));
  })
  .then(() => {
    Technology.create({
      tag: "qa",
      title: "qa-tech",
      pageTitle: "QA TECHNOLOGIES",
      technologiesList:
        "### Types of testing\nAutomated testing, Functional testing, Performance testing, Security Testing, Mobile Testing\n\n ### Types of QA services\nFull QA support during a development cycle including the most cost, time and resource effective test approach and test strategy preparation taken into account current business needs of a particular customer; QA execution and control; Automation testing including QA consultancy in terms of how to build automation testing from scratch and/or how to embed it into existing development framework; Performance testing\n\n ### Types of software\nWeb Applications, API/Services, Desktop Applications, Mobile Applications\n\n ### Programming/ Scripting Languages\nJava, C#, Ruby\n\n ### Testing Tools\nTestNG/JUnit/NUnit, Selenium/WebDriver, Cucumber/JBehave, SoapUI, TestComplete, JMeter, Specflow, Appium\n\n ### Databases\nMS SQL, MySQL, PostgreSQL, Oracle, DB2, Mongo DB\n\n ### Application Servers\nTomcat, Jetty Servlet Container, IIS 6+, JBoss 4+\n\n ### IDEs\nIdea, MS Visual Studio, Eclipse\n\n ### Build Tools\nMaven, Gradle, Ant, MSBuild\n\n ### Operating Systems\nWindows, Linux, Mac\n\n ### Project / Test Mgmt Systems (to integrate)\nJira, Rally, TestRail, TestLink, Test Manager, etc\n\n ### Source Control\nGIT, SVN, TFS\n\n ### Continuous Delivery Technologies\nJenkins, TeamCity, TFS/VSTS, Bamboo",
      pageSpoiler:
        "Our Quality Assurance team are ISTQB Accredited, utilising their experience to cover a wide spectrum of manual and automated testing from functionality testing, regression testing, to load and performance testing."
    }).then(model => (technologies.qa = model));
  })
  .then(() => {
    Technology.create({
      tag: "bi",
      title: "bi-tech",
      pageTitle: "BUSINESS INTELLIGENCE TECHNOLOGIES",
      technologiesList:
      "### Database Engines\nOracle, Microsoft SQL Serve\n\n ### OLAP Cubes\nCognos, Microsoft SQL Server - Analysis Services\n\n ### ETL\nVB, C#, Microsoft SQL Server Integration Services\n\n ### Reporting\nSpotfire, Microsoft SQL Server, Tableau, Cognos, Sharepoint",
      pageSpoiler:
      "Godel’s BI consultants have many years’ experience crossing multiple technologies and platforms; we have worked with some of the industry’s leading consultancy and product development companies on the development of BI software tools and leading platforms."
    }).then(model => (technologies.bi = model));
  })
  .then(() => {
    Technology.create({
      tag: "js",
      title: "js",
      pageTitle: "FRONT-END AND JAVASCRIPT TECHNOLOGIES",
      technologiesList:
      "### Frameworks and Libraries\nReact, AngularJS, Angular, Ember.js, Vue.js, Aurelia, Backbone, vanilla.js\n\n ### Back-end\nNode.js, Meteor, Koa.js, Socket.io, Express, Passport.js, pm2/forever, winston/morgan\n\n ### Cross-Platform Application Development\nReact Native, Electron, Cordova (PhoneGap, Ionic)\n\n ### Areas\nSPA, offline-first, mobile-first, responsive/adaptive web design, i18n, a11y, PWA\n\n ### Workflow, Build and Deploy\nGrunt, gulp, Webpack, Docker, AWS, Azure, Heroku, git\n\n ### Testing Frameworks and Tools\nJasmine, Mocha, Enzyme, Cucumber, Webdriver.io, Nightwatch, Sinon\n\n ### State-management Tools\nFlux (incl. Alt, Reflux), Redux (with Saga, Thunk), MobX\n\n ### Styling\nLESS, SASS, Stylus, POSTCSS (Autoprefixer), bootstrap\n\n ### Templating Languages\nHandlebars.js, Pug, Mustache\n\n ### Visualisation\nD3.js, three.js, A-Frame\n\n ### Helpers and Tools\nBabel, Modernizr, Lodash, Moment.js, WebSockets, node, npm/yarn, flow, TypeScript, RxJS, JQuery, Relay/GraphQL, JSX\n\n ### Linters\nESLint, CSSLint, HTMLLint\n\n ### IDEs and Code Editors\nWebStorm, Visual Studio Code, Atom, Sublime Text, vim",
      pageSpoiler:
      "JavaScript technologies are the most in-demand IT skills for UK organisations. Godel's JavaScript division is working with many of these organisations to deliver mission-critical front and back-end projects."
    }).then(model => (technologies.js = model));
  })
  .then(() => {
    Technology.create({
      title: "mssql"
    }).then(model => (technologies.mssql = model));
  })
  .then(() => {
    Technology.create({
      title: "wpf"
    }).then(model => (technologies.wpf = model));
  })
  .then(() => {
    Technology.create({
      title: "test complete"
    }).then(model => (technologies.testComplete = model));
  })
  .then(() => {
    Technology.create({
      title: "apach tomcat"
    }).then(model => (technologies.apach = model));
  })
  .then(() => {
    Technology.create({
      title: "spring source tool"
    }).then(model => (technologies.spring = model));
  })
  .then(() => {
    Technology.create({
      title: "postgresql"
    }).then(model => (technologies.postgresql = model));
  })
  .then(() => {
    Technology.create({
      title: "maven"
    }).then(model => (technologies.maven = model));
  })
  .then(() => {
    Technology.create({
      title: "jira"
    }).then(model => (technologies.jira = model));
  })
  .then(() => {
    Technology.create({
      title: "jsf 2"
    }).then(model => (technologies.jsf2 = model));
  })
  .then(() => {
    Technology.create({
      title: "c#"
    }).then(model => (technologies.c = model));
  })
  .then(() => {
    Technology.create({
      title: "azure"
    }).then(model => (technologies.azure = model));
  })
  .then(() => {
    Technology.create({
      title: "aqa"
    }).then(model => (technologies.aqa = model));
  })
  .then(() => {
    Technology.create({
      title: "liferay"
    }).then(model => (technologies.liferay = model));
  })
  .then(() => {
    Service.create({
      title: "development"
    }).then(model => (services.development = model));
  })
  .then(() => {
    Service.create({
      title: "qa"
    }).then(model => (services.qa = model));
  })
  .then(() => {
    Service.create({
      title: "project management"
    }).then(model => (services.pm = model));
  })
  .then(() => {
    Service.create({
      title: "cloud"
    }).then(model => (services.cloud = model));
  })
  .then(() => {
    Service.create({
      title: "bi"
    }).then(model => (services.bi = model));
  })
  .then(() => {
    Service.create({
      title: "agile"
    }).then(model => (services.agile = model));
  })
  .then(() => {
    Service.create({
      title: "devops"
    }).then(model => (services.devops = model));
  })
  .then(() => {
    Service.create({
      title: "digital"
    }).then(model => (services.digital = model));
  })
  .then(() => {
    Service.create({
      title: "Automated quality assurance"
    }).then(model => (services.autoQA = model));
  })
  .then(() => {
    Model.create({
      title: "dedicated"
    }).then(model => (models.dedicated = model));
  })
  .then(() => {
    Model.create({
      title: "augmentation"
    }).then(model => (models.augmentation = model));
  })
  .then(() => {
    Model.create({
      title: "project-based"
    }).then(model => (models.projectBased = model));
  })
  .then(() => {
    Model.create({
      title: "product-development"
    }).then(model => (models.productDevelopment = model));
  })
  .then(() => {
    CaseStudy.create({
      tag: "marketing-delivery",
      title: "MARKETING DELIVERY",
      agents:
        "Jeremy Evans, Managing Director; Simon Penny, Operations Director and Gee Kettle, Project Manager",
      duration: "1 year +",
      description:
        "Founded in 2007 Marketing Delivery operate exclusively in the automotive sector, keeping car, bike and van dealerships in touch with their customers. Marketing Delivery deliver bespoke customer communications programmes to improve conversion, retention and reputation with measurable results. Working with approximately 350 franchised motor dealers in the UK they bring cost effective marketing activities to the forefront of dealer marketing.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2017/10/MD_logo.png",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2017/12/CT2.jpg',
      bannerFilter: 'blue',
      videoId: 'fSZNXkvMAAg',
      caseStudy:
        "Consumers are constantly changing how they digest information, and the ways which organisations communicate with consumers is always evolving.\n\nAutomotive eCRM and social media agency Marketing Delivery provide marketing solutions to dealerships using clever technology and data to deliver personalise customer communications that can improve customer conversion and generate incremental sales.\n\nThe solutions are created from Marketing Delivery’s own portfolio of products, plus those of carefully selected partners. Adapting these third party software products to the Marketing Delivery way of working can be challenging and the decision was made to create a platform of their own.",
      engagementDescription:
        "Godel supplied a dedicated team of full time software developers based in its development centre in Minsk, Belarus to augment the in-house Marketing Delivery team by 57% more resource.\n\n“Our business is growing quickly and we want to have access to the skill set to be able to deliver development as fast as it’s required,” explains Jeremy Evans, MD, Marketing Delivery.\n\n“We’ve done our research and we can see lots of new ideas on the horizon to help our automotive clients better communicate with their customers digitally via social channels – we’d like to realise these plans.\n\nThe bottom line is that when we hire developers in-house, their resource is quickly eaten up with other things almost overnight. We decided to establish a completely separate research and Development team with Godel so we could move our technology forward and help us continue our path of growth”"
    })
      .then(model => {
        model.addIndustries([industries.professional, industries.automotive]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.microsoft]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa, services.pm]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "We decided to establish a completely separate research and Development team so we could move our technology forward and explored that opportunity with Godel."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: 'virgin-holidays',
      title: 'VIRGIN HOLIDAYS',
      onHomePage: true,
      agents:
        "Sue Dickinson, Head of Trading Systems; Mark O'Neill, Agile Development Manager",
      duration: "1 year +",
      description:
        "Established in 1985, Virgin Holidays is an award-winning travel company offering bespoke international travel experiences from unbelievable destinations such as Bali and Las Vegas. Founded on the Virgin principles of excellent customer service, value, reliability, responsibility and a sense of fun, it has used its entrepreneurial heritage and passion for innovation to benefit customers and communities around the world.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2017/10/Virgin_logo.png",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2016/11/virgin-fi.png',
      bannerFilter: 'red',
      videoId: 'hPXZBYGTHR0',
      caseStudy:
        "Virgin Holidays has chosen Godel as its software development partner to work with the leisure company’s in-house teams to deliver increasing customer experience and aid the bookings process via virginholidays.co.uk. The Godel team members will be seeded into Virgin Holiday’s teams to follow their processes and work together towards the same online customer conversion goals.\n\nGodel will complement in-house skills within the agile digital development teams working together to contribute to an ever-improving online customer experience. These iterative changes to virginholidays.co.uk deliver a stream of marginal gains that lead to higher online conversion rates. The result is that more customers who visit the website to search for a holiday, book one.\n\n“Godel was our choice of partner because the team understands agile working practices at an advanced level,” explains Sue Dickinson, Head of Trading Systems, Virgin Holidays. “Working with the Godel team is starting to deliver real benefits to us and we love their passion for finding ways to deliver great software faster, leading to real customer and commercial value. They help us to bring to life our mission to make friends and build well across all our customer touch points.”",
      engagementDescription:
        "Godel is providing Java and web developers as well as Quality Assurance automation to complement the skills internally working in a continuous delivery style with cross-functional teams including UX, design and data insights – all of which helps Virgin Holidays to provide an excellent online customer experience as well as delivering at the backend to fulfil the bookings.\n\n“The world of software moves at a frenetic pace like travel so the idea of continuous improvement is one that the teams take on board and Godel have very much been part of delivering those improvements. There have been some very specific and impressive changes around improving our test cycles…which have a direct impact on how quickly things can be released to our customers.” Concludes Sue."
    })
      .then(model => {
        model.addIndustries([industries.travel, industries.eCommerce]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.java]);
        return model;
      })
      .then(model => {
        model.addServices([
          services.development,
          services.qa,
          services.autoQA,
          services.pm
        ]);
        return model;
      })
      .then(model => {
        model.addModels([models.augmentation]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "It was essential for Virgin Holidays to find a partner that would maintain the high quality of output of their in-house teams."
        });
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Onboard the digital transformation journey with Virgin Holidays"
        });
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Working with the Godel team is starting to deliver real benefits to us and we love their passion for finding ways to deliver great software faster, leading to real customer and commercial value."
        });
        return model;
      });
  })

  .then(() => {
    CaseStudy.create({
      tag: "rentalcars",
      title: "RENTALCARS.COM",
      onHomePage: true,
      agents:
        "Andy Thorburn, Head of National Supply, Chris Kenny, Product Owner, Adam Flynn, Solutions Architect",
      duration: "1 year +",
      description:
        "Founded in 2004, Rentalcars.com is the world's biggest online car rental service, arranging car hire in 163 countries and 40 languages. The website provides a hassle-free way of renting a car and their approach to car rental is quick and simple making the customers experience feel as personal as driving their own car.",
      logo:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/10/RClogo.png",
      photo:
        'http://www.godeltech.com/wp-content/uploads/sites/2/2017/10/rentalcars.png',
      bannerFilter: 'blue',
      videoId: 'pQfZVWOpmx0',
      caseStudy:
        "Rentalcars.com has collaborated with Godel to deliver a platform which enables smaller car rental suppliers to connect with Rentalcars.com's large customer base. Godel is working alongside Rentalcars.com's in-house development team as part of a ring-fenced resource, working as an augmented team to deliver the project.\n\n“The vision for Marketplace is simple. We wanted to make it easier for smaller car rental companies to engage with us so that we can offer our customers a broader selection of places to rent cars from.” explains Andy Thorburn, Head of National Supply, Marketplace by Rentalcars.com.\n\nWith high-level technical and non-functional requirements, the Rentalcars.com Marketplace project required a skilled, dedicated team of developers to deliver at the required velocity. By augmenting its in-house team with Godel, Rentalcars.com has been able to accelerate its delivery pace and build a platform which meets demands from both its suppliers and customers.",
      engagementDescription:
        "The combined in-house and Godel team will work on a business travel application, a travel finance app that tracks payments made against suppliers’ travel bookings, and a risk and safety compliance application. Godel has delivered an allocations system that automates the billing for customers who bulk purchase seats, for example ski or cruise tours operators.\n\nThe software development team has dealt with the complicated rules centred around billing and management of these bookings, and has successfully integrated it with other internal booking and account systems.\n\nAndrew Aucott, General Manager, Business Intelligence at Jet2.com and Jet2holidays said: “We are one of the fastest growing airlines in the UK, so the volume of changes to our software is increasing all the time and the demands are becoming greater. As we grow we require more software development, and Godel’s expertise supports our in-house development team to ensure that we provide the very best software to customers and our own teams alike.”\n\nThe software, known as ‘Safety HUB’, has been developed by Godel and can be used to log everything that happens surrounding a flight. Since this application went live over 1000 users within the company are now able to track ‘incidents’ within its fleet of aircraft.\n\nThe technology can, for example, detect issues with an aircraft in the hanger, transportation or fuelling of planes, passenger or maintenance issues and even birds hitting the fuselage.\n\nThe application can be accessed by Jet2.com crew, employees, and maintenance staff and provides a repository for all issues – no matter how small or large - that can be recorded much more easily via a mobile device from any location or geography."
    })
      .then(model => {
        model.addIndustries([
          industries.travel,
          industries.eCommerce,
          industries.automotive
        ]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.java, technologies.php]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa]);
        return model;
      })
      .then(model => {
        model.addModels([models.augmentation, models.productDevelopment]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Rentalcars.com has won multiple awards and is now the world’s biggest online car rental service empowering travellers at 50,000+ locations worldwide."
        });
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "What's worked well is quickly getting to a point where I felt as if we had an emotional attachment between the project and the Godel team. Often on outsourcing projects we don’t see that. Often with insourcing projects we don’t actually see that level of emotional engagement."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "jet2-com",
      title: "JET2.COM / JET2 HOLIDAYS",
      agents: "Andrew Aucott, General Manager, Business Intelligence",
      duration: "1 year +",
      description:
        "Jet2.com is the fourth largest airline in the UK. The airline operates over 340 scheduled routes from 9 UK airports to 60 holiday destinations in the Mediterranean, the Canary Islands, European Leisure Cities and beyond. Having flown over 50 million customers to more than 50 destinations, Jet2 has grown rapidly since it was established and continues to strengthen established routes as well as offer new destinations.\n\nLeading leisure airline and package holiday specialist, Jet2.com and Jet2holidays has appointed software developer Godel to support its ongoing growth and development, by increasing and improving its software delivery capacity to provide the best user experience for customers and employees alike.",
      logo: "/img/jet2-logo.svg",
      photo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2017/10/jet2.png",
      bannerFilter: "red",
      caseStudy:
        "By working with Godel, the company will be able to develop software to support this ongoing growth, improving the search and booking experience for customers, and enhancing the company’s business intelligence, particularly around analytics and reporting.\n\nGodel is working with the in-house team at Jet2, based in Leeds, to develop software that supports the company as it makes the search and booking experience as effortless and efficient as possible, across all platforms whether the customer uses a PC, tablet or mobile phone.\n\nGodel will also integrate the company’s business intelligence with travel, finance, risk and safety compliance applications.",
      engagementDescription:
        "The combined in-house and Godel team will work on a business travel application, a travel finance app that tracks payments made against suppliers’ travel bookings, and a risk and safety compliance application. Godel has delivered an allocations system that automates the billing for customers who bulk purchase seats, for example ski or cruise tours operators.\n\nThe software development team has dealt with the complicated rules centred around billing and management of these bookings, and has successfully integrated it with other internal booking and account systems.\n\nAndrew Aucott, General Manager, Business Intelligence at Jet2.com and Jet2holidays said: “We are one of the fastest growing airlines in the UK, so the volume of changes to our software is increasing all the time and the demands are becoming greater. As we grow we require more software development, and Godel’s expertise supports our in-house development team to ensure that we provide the very best software to customers and our own teams alike.”\n\nThe software, known as ‘Safety HUB’, has been developed by Godel and can be used to log everything that happens surrounding a flight. Since this application went live over 1000 users within the company are now able to track ‘incidents’ within its fleet of aircraft.\n\nThe technology can, for example, detect issues with an aircraft in the hanger, transportation or fuelling of planes, passenger or maintenance issues and even birds hitting the fuselage.\n\nThe application can be accessed by Jet2.com crew, employees, and maintenance staff and provides a repository for all issues – no matter how small or large - that can be recorded much more easily via a mobile device from any location or geography."
    })
      .then(model => {
        model.addIndustries([industries.travel, industries.eCommerce]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.microsoft]);
        return model;
      })
      .then(model => {
        model.addServices([
          services.development,
          services.qa,
          services.bi,
          services.pm
        ]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "High customer volumes allow Jet2.com to serve many destinations daily or several times a week. Customers have a great choice of durations, with year-round sun and city destinations and winter ski flights."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "the-white-company",
      title: "THE WHITE COMPANY",
      agents: "Alex Clark, Software Development and Delivery Manager",
      duration: "6 months +",
      description:
        "The White Company is a luxury lifestyle retailer. Established in 1993, they have been creating stylish, beautifully designed products, principally in white, ever since. From hand-finished bed linen to luxurious sheepskin jackets, the company offer a vast range of timeless products. Attention to detail is evident in everything they create and collections are designed to last.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2017/10/TWC_logo.png",
      photo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2017/10/TWC_bed.png",
      bannerFilter: "green",
      caseStudy:
        "The White Company choose Godel as its nearshore software development partner to help deliver its multi-channel e-commerce software platform. Successful companies are redefining their e-commerce platforms and processes in response to more empowered customers.\n\nThe Godel team completed a pilot phase earlier than scheduled, delivering numerous development tasks and consistently delivering on both performance and quality. “We kicked off a three month pilot phase with Godel addressing multiple development tasks to assess the capabilities of the team,” explains Alex Clark, Software Development and Delivery Manager, The White Company.\n\n“All the key performance indicators were met a month early and it very quickly became obvious that Godel could help The White Company rapidly scale and expand to further our future software development roadmap.”",
      engagementDescription:
        "An agile Godel development squad has worked collaboratively with The White Company’s in-house squads to contribute to an ever-improving online customer experience built in SAP Hybris' multi-channel e-commerce software.\n\n“As a fast-growing business, we have lots of demands and requirements of the SAP Hybris platform in order to deliver the best customer service across all our digital channels,” explains Alex Clark.\n\n“We needed functionality delivered cost-effectively but with high quality and best practice brought to the fore – Godel provides that. It’s been a very simple process for us with a transparent and clear route to where we are now.”"
    })
      .then(model => {
        model.addIndustries([industries.retail, industries.eCommerce]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.java, technologies.js]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa, services.pm]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "The White Company made the decision to build its ecommerce platform in SAP Hybris, and looked for a development partner which could help with extending the functionality and delivery speed for this project."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "graham-brown",
      title: "GRAHAM & BROWN",
      agents: "Paul Martin, Head of IT",
      duration: "3 months +",
      description:
        "Graham & Brown are the UK leaders in unique, exceptional quality wallpaper. With an immense range of wallpaper designs perfect for feature walls or the whole room, there is a fitting pattern for everybody. Established in 1946 Graham and Brown’s wallpaper revolution began as people were desperate for things to brighten up their homes. Graham and Brown have gone from strength to strength with stores worldwide and plenty of recognition for their creativity.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2017/10/gb_logo.png",
      photo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2017/10/GB.png",
      bannerFilter: "green",
      caseStudy:
        "Graham & Brown, the wallpaper manufacturer, has chosen to scale its in-house software development team by working with nearshore software development partner Godel, working on projects including integrating a courier system to enable the manufacturer to have multiple delivery options for its direct business, and streamline orders and inventory with business customers.\n\n“We previously used just one supplier to deliver our business applications and had .NET expertise in-house, but going forward we’re moving from one supplier to an in-house supplemented approach working with an experienced team from Godel,” explains Paul Martin, Head of IT, Graham & Brown.\n\n“We’re based in Blackburn, Lancashire and finding the right software development skills in this location is challenging when we need to rapidly scale with the right abilities – Godel can help us to do that and achieve our business goals.",
      engagementDescription:
        "During the selection phase the team at Godel took the time to really understand Graham & Brown's business and current challenges. Paul had experience of working with nearshore companies before, and had been recommended Godel by peers in his industry.\n\nFor business customers, working with Godel will bring about the changes necessary to deliver software integration with customers like The Range, streamlining order processes, inventory and driving efficiency savings by making the process faster and more efficient through electronic data interchange."
    })
      .then(model => {
        model.addIndustry(industries.manufacturing);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.microsoft]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa, services.pm]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Introducing technology into the process means Graham & Brown can stay at the forefront of what their customers want most, but also can tailor their services to meet those demands."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "clifford-thames",
      title: "CLIFFORD THAMES",
      agents: "Scott Christie, Group Chief Technology Officer",
      duration: "1 year +",
      description:
        "Established in 1948 Clifford Thames sits at the heart of the global automotive aftermarket. Creating and managing the data needed to repair and maintain vehicles for many major vehicle manufacturers including Ford, General Motors, Jaguar Land Rover, Hyundai, Renault and the VW group.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2017/07/cliffordThamesLogo_RGB.png",
      photo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2017/07/carlineup.png",
      bannerFilter: "crimson",
      caseStudy:
        "Clifford Thames, an OEC Company has offices in the UK, and in 7 countries covering Europe, Asia Pacific and North America.\n\nWith over 50 years of experience in the international automotive industry, the group is well placed to deliver global solutions focused on growing their customers business through the creation and management of data content and the deployment of SaaS industry platforms.",
      engagementDescription:
        "By working with Godel Clifford Thames can provide solutions to customers more efficiently helping their customers support their aftersales strategy and increasing their revenue and customer retention.\n\nClifford Thames selected Godel as one of its leading outsourced software development partners in 2016 supplementing in-house teams through a period of phenomenal growth.\n\n“We have a very close and honest relationship with Godel which is serving us well – we don’t tell the team what to do, we very much take their suggestions and adopt them as best practice in some cases – they challenge us every step of the way,” explains Scott Christie, Group Chief Technology Officer, Clifford Thames."
    })
      .then(model => {
        model.addIndustries([industries.isv, industries.automotive]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.java]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa, services.bi]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })

      .then(model => {
        model.createQuote({
          text:
            "By working with Godel Clifford Thames can provide their solutions to its customers more efficiently, helping them support their aftersales strategies which increases their revenues and customer retention rates."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "earthport",
      title: "EARTHPORT",
      agents: "Robert Conway, Head of Software Development",
      duration: "1 year +",
      description:
        "The payments industry is often viewed as a commodity business by analysts with the exception of cross-border payments, which is an attractive and competitive sector. Although many existing solutions are seen as complicated and inefficient, Earthport are generating a lot of interest as their secure and easy-to-use solution can reduce client costs, improve payments quality and boost relationships with suppliers.",
      logo: "/img/earthport-logo.svg",
      photo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/payment.png",
      bannerFilter: "blue",
      caseStudy:
        "Due to untold demand from clients Earthport looked to expand their workforce and engaged with Godel to work alongside their existing team on the Earthport Payments network.\n\nEarthport provides clients with access to a global Payment Network, maintaining local banking partnerships, through which client business is settled directly via local clearing to banked beneficiaries in over 60 countries.\n\nRobert Conway, Head of Software Development at Earthport says:\n\n“Earthport's delivery pace as you imagine in fintech is incredibly fast, we are responding to clients needs in a very competitive market. I think that many Fintech’s and indeed many companies will always look to outsourcing or partnering with companies nearshore to help them achieve the talent they require.”",
      engagementDescription:
        "“Innovations are at the centre of everything we do. We have worked with Godel to deliver a number of key initiatives. They can be truly innovative pieces such as distributed ledger or pieces of work where we are looking to make efficiencies internally to improve our overall customer experience. Being able to work with Godel on a range of projects has been beneficial for us.” continued Robert.\n\nAmong the FinTech50, Earthport is a regulated Financial Institution under the auspices of the UK’s Financial Conduct Authority, transforming the future of cross-border payments. Our clients are among the most admired brands globally and rely on Earthport to support their trade, commerce and remittance operations.\n\nEarthport has over 200 employees and is headquartered in London with regional offices in New York, Miami, Dubai and Singapore, and sales support in Madrid, Frankfurt, Houston, Kuala Lumpur, San Francisco, Dallas, and Washington DC."
    })
      .then(model => {
        model.addIndustries([industries.finance]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.java]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa, services.bi]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Earthport’s office is located in central London where over-inflated contractor rates are too high and there is still competition to hire permanent good Java developers."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: 'trainline',
      title: 'TRAINLINE',
      onHomePage: true,
      agents: 'Mark Holt, Chief Technology Officer',
      duration: '1 year +',
      description:
        "The first quarter of 2016 saw UK rail passenger journeys reach 412.5 million, nearly 5% higher than the previous stats of the same time period in 2015. The rail travel sector must be more efficient, and meet the demands of technology and ‘experience savvy’ travellers who want to be constantly connected via mobile devices.\n\nThe total value of sales generated from rail ticket fares and other rail travel related expenditure in the United Kingdom is expected to reach approximately £11 billion by the end of 2017.",
      logo: "/img/trainline-logo.svg",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/trainline-reception.jpg',
      bannerFilter: 'green',
      videoId: 'IKtMHlAX644',
      caseStudy:
        "By value of tickets sold, Trainline is the No. 1 independent online rail ticket retailer in the UK. They allow customers to view, compare and buy train tickets from all train companies to all UK destinations. Their apps have been downloaded 7.4 million times already and this number continues to grow as mobile ticketing shapes UK rail travel.\n\nTrainline wanted to upgrade their legacy server infrastructure and move to Amazon public cloud, a move which would give them access to unlimited supercomputing power. As a result their software platform required a substantial amount of modernisation but they didn’t have the bandwidth to handle this solely in-house, so they looked at different options to deliver this project.\n\nTrainline is a tech brand renowned for having a great tech platform and a talented collection of people all working to make brilliant products for clients, but a shortage of talent means that they cannot hire good developers quickly enough.",
      engagementDescription:
        "Having previous experience with software partners, Trainline wanted to develop a relationship with a nearshore partner due to the benefits compared to traditional offshore companies.\n\n“Godel were a good choice for us, they positioned themselves as being different than anybody else, and we felt confident in them. Godel have an abundance of experience in working with UK companies and integrating their nearshore model, they put in place really good Video Conferencing facilities that allow the teams to take part in daily standups which was very important for us for reaching a great result.” explained Mark Holt, Chief Technology Officer at Trainline.\n\nThe Godel team worked alongside Trainline’s in-house development team with the cloud migration journey to Amazon Web Services (AWS).\n\nWhen asked to describe working with Godel in three words, Mark said: “Agile, Helpful, Innovative”.\n\nTrainline have a highly robust and scalable technology platform dedicated to online rail travel and a focus on customer-driven innovation. They are well-placed to provide the most compelling online and mobile products for our customers, as they begin to use their considerable experience in the UK market to grow a European presence."
    })
      .then(model => {
        model.addIndustries([
          industries.retail,
          industries.travel,
          industries.online
        ]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.microsoft]);
        return model;
      })
      .then(model => {
        model.addServices([services.development]);
        return model;
      })
      .then(model => {
        model.addModels([models.augmentation]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Since it was established in 1997, Trainline has developed a robust and scalable core IT platform with a strong focus on customer-driven innovation."
        });
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Cloud migration drives Trainline's rapid 900-fold improvement in agility"
        });
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "We wanted to develop additional experience with a nearshore partner, Godel were a good choice for us and and we felt confident that we could bring them in and work with them effectively."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "laterooms",
      title: "LATEROOMS.COM",
      agents: "Alastair Brown, Directory of Delivery",
      duration: "1 year +",
      description:
        "LateRooms.com are moving leaps and bounds in the online travel industry to build the best place in the world for people to book hotels. Based in the heart of Manchester the leading online accommodation specialist is inspired to be the best, pushing the boundaries of innovation to offer an unrivaled customer experience.\n\nBusinesses, particularly fast growing online businesses like LateRooms.com, face numerous challenges in sourcing the best software development talent – statistics within the UK IT market suggest that there is a huge shortage of available software developers with the best being highly sought after.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/05/laterooms-logo.png",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/LR-website.png',
      bannerFilter: 'violet',
      videoId: 'Hpwv0XS4xo8',
      caseStudy:
        "With an enormous selection of hotels from across the globe Laterooms enables their customers to read genuine guest reviews and book 24/7 online or over the phone. Rooms can be booked on the day of the stay or up to a year in advance at one of the advertised 200,000+ properties.\n\nTo allow the organsiation to meet new requirements and bring new and innovative ideas to life LateRooms.com looked for a software development partner to add to their highly skilled in house team.\n\nLateRooms.com already had a quality engineering culture working across a wide range of technologies delivering multiple releases a day. So when looking at partners it was important that they too hit the same high level which was set by the LateRooms.com internal team.\n\nAfter Godel were selected as LateRooms.com development partner the dedicated team worked on two different areas of the business - acquisition and aggregation of hotel stock.\n\nAlastair Brown, Director of Delivery at LateRooms.com describes how Godel performed:\n\n“We have a great employee based capability and a great level of skills in house, so it was hard to find a partner to match what we already have. My expectations were significantly exceeded. I found level of quality in skills and level of delivery focus I haven`t previously seen”.",
      engagementDescription:
        "Godel’s dedicated team worked with the engineering team at LateRooms.com integrating three different platforms into a system. This was designed and built to allow each of the platforms to share content bringing all of the content to a single place.\n\n“Working with Godel we can absorb peaks and troughs in demand, so I can get skills quickly. I have a high level of trust in it being good quality and I have a high level of trust that any operational issues will be resolved together.” continued Alastair.\n\nGodel developers were noticed by LateRooms.com at the Manchester Hackathon after the 4 man team were awarded 1st prize by the judges for their entry to ‘The Explorer Challenge’. If you would like to know more about the challenge, read our blog post here.\n\nLateRooms.com is an award winning company that is no stranger at the British Travel Awards – most recently being shortlisted for both ‘Best Hotel Booking Website’ and ‘Best Travel Retailer for Customer Service’."
    })
      .then(model => {
        model.addIndustries([
          industries.travel,
          industries.eCommerce,
          industries.online
        ]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.microsoft]);
        return model;
      })
      .then(model => {
        model.addServices([services.development]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "UK-based booking site LateRooms.com are continually looking at ways to innovate their mobile and web platforms which are used by their clients. Working in such an extremely competitive environment, they need to be flexible and responsive to the market trends."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "dunnhumby",
      title: "DUNNHUMBY",
      agents: "Dave Beck, Test Manager",
      duration: "1 year +",
      description:
        "There are huge shifts happening in the retail industry driven by the uptake of mobile technology, the growth of social platforms and increased human-connectedness. For retailers to build their competitive advantage they need to understand the consumer, whilst finding ways to improve their price image and overall value proposition.\n\nPrice and promotion are two of the most important levers that a retailer can pull. But doing this right isn’t easy: competition is fierce as discounters and pure online retailers grow, and price transparency is greater than ever. To build loyalty, it’s crucial to strengthen customer price perception without reducing prices so low that you limit financial growth — or worse.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/Dunnhumby_logo.png",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/Dunnhumby-image.png',
      bannerFilter: 'crimson',
      videoId: '0PNujUZDRHI',
      caseStudy:
        "Dunnhumby provide strategic process, proprietary insights, engagement approach and cutting-edge software that removes the guesswork from pricing and promotions to create sustained pricing power for retailers. Pricing power that grows customer loyalty and long-term profit.\n\nDave Beck, Test Manager at Dunnhumby needed a long-term quality assurance partner to support his team: “We have used traditional methods to recruit people for our team, using internal recruitment teams and external agencies but that hasn’t been that successful – it takes a long time to find the right candidate and we needed a quicker solution.”\n\nGodel were able to demonstrate a high level of skill in both manual and automated quality assurance which impressed Dunnhumby. The team started small, and has grown as the relationship has developed, with Godel team members permanently based in their Manchester office.\n\n“Working with Godel has given us the extra flexibility across all aspects of quality assurance. They have helped us when we have needed people, and the resources they have provided have helped us to not only improve our products but given us the extra man-power to meet tight deadlines.” continued Dave.",
      engagementDescription:
        "According to a recent vendor overview from industry analyst Robert Hetu of Gartner Inc., “Algorithmic unified price optimization remains an opportunity for retail CIO’s as they prepare for digital business.” Dunnhumby have seen evidence of that among retailers, especially in fast-moving consumer goods such as grocery and speciality retail.\n\nThe Dunnhumby Price and Promotion software accurately models, forecasts and optimises retail prices for regular and promotional pricing by using an intuitive, fast, merchant-friendly tool which integrates price modelling and optimisation into the daily work-flow of a merchant. Providing this information allows their clients to build stronger customer loyalty.\n\nDunnhumby is present in 26 markets and analyses the shopping transactions of 350 million customers. The scale of Dunnhumby’s customer base provides them with unmatched visibility on customer behaviour internationally."
    })
      .then(model => {
        model.addIndustries([industries.isv, industries.retail]);
        return model;
      })
      .then(model => {
        model.addTechnologies([
          technologies.microsoft,
          technologies.mssql,
          technologies.wpf,
          technologies.testComplete
        ]);
        return model;
      })
      .then(model => {
        model.addServices([services.qa]);
        return model;
      })
      .then(model => {
        model.addModels([models.augmentation]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "There are times when deadlines loom, recruiting staff doesn’t happen swiftly enough and companies need that partner to help provide the resources."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "morson-group",
      title: "MORSON GROUP",
      agents: "Stinus Andersen, Business Systems Manager",
      duration: "6 months",
      description:
        "Each year Morson requests feedback from its users which allows them to better understand their users. From the feedback gathered Morson learned that they need an online presence, as this would give their users access anytime and from anywhere.\n\nPeople are an organisation's greatest asset and so Morson strive to be the best in their sector by sourcing the best opportunity for each candidate and by maintaining communication throughout their placement. Morson’s capabilities provide cross-sector opportunities for candidates having developed good working relationships with many UK and worldwide industry leaders.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/Morson-logo.png",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/Morson.png',
      bannerFilter: 'red',
      videoId: 'zM1-XOf9ctg',
      caseStudy:
        "Morson required a portal application that would enable the two main subsidiaries of the group to provide a fully accessible service for both its business and customer base. The Morson subsidiaries are Morson International, a global provider of specialist engineering and technical personnel, and Morson Projects Limited, a comprehensive service providing outsourced engineering and project management design services.\n\n“We wanted to create a new, cutting edge portal which will become an easy to use tool enabling contractors to view job assignments, submit authorised timesheets, e-sign contracts and related documents while also being able to update their personal details, read news, FAQ’s and other information.” explained Stinus Andersen, Business Systems Manager at Morson International.\n\n“There will be many benefits to both our business and our customers by implementing an online portal; it allows us to reduce costs by making the process more effective, giving Morson a competitive advantage over our competitors.”",
      engagementDescription:
        "After finding nothing in the marketplace which met all the requirements and functionality, Morson Group started to look at companies which would be able to develop a solution to meet all of their criteria.\n\n“We looked at a number of companies but knew very quickly that Godel understood our business, coupled with their attitude on quality and unique delivery approach it set them apart from the rest. The account management team in the UK were there to step in if we ever needed any additional guidance, and our working relationship with the development team in Minsk was great. We definitely felt like one team. I am confident that the project was developed right, tested to destruction and the team ensured that everything was properly documented.” concluded Stinus.\n\nMorson group is made up of three main subsidiaries; Morson International, Morson Projects and Vital Human Resources. The group is a unique blend of engineering recruitment and design consultancy which have helped engineers around the world find their perfect job, and organisations find the right people for their business since 1969.\n\nMorson Group also provide leading engineering and design solutions to major capital projects using the latest technology and systems. Services can range from complete ‘turnkey’ project management through to detailed design exercises."
    })
      .then(model => {
        model.addIndustries([industries.travel, industries.eCommerce]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.microsoft]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa, services.pm]);
        return model;
      })
      .then(model => {
        model.addModels([models.projectBased]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Morson Group (Morson) wanted to create a new, cutting edge portal that would provide an effective communication channel with their contractors. Having looked for products in the marketplace it was clear that there wasn’t one which met all of their criteria so Morson looked to create a custom solution."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "name-your-number",
      title: "NAME YOUR NUMBER",
      duration: "1 year +",
      description:
        "Name your Number recently utilised Godel’s skills and experience to help complete a major international project. NYN work with mobile phone operators worldwide, helping them to monetise their phone number pool. NYN’s Chief Technical Officer explained:\n\n“We help mobile operators utilise their entire number pool and make it available to the whole of the addressable market. To do this we provide an interface to their POS system in-store and an online tool that enables customers to enter information such as date of birth, name, memorable important number, hobby and their job. Our application then searches their database of numbers and presents the customer with a list of numbers that match these criteria. The operator can then charge a premium for these numbers as they are of value to the customer.”",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/NYN.png",
      photo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/NYN-Image.png",
      bannerFilter: "red",
      caseStudy:
        "NYN had initially gone live with their application using in-house resources and an external organisation. But, during 2009 work on a new project in Europe with a major client they realised that they did not have the capability to meet the demand both in terms of resources and technical expertise.\n\n“We knew we needed to find a partner that could help us with this” said NYN’s Chief Technical Officer, “and fortunately Godel were a known entity to our managing director and the senior management team.”\n\nGodel is a leading provider of high quality software development services for businesses in the UK, Europe and North America. It was this expertise that provided a perfect fit for NYN’s requirements as their Chief Technical Officer explains. “Firstly, they were the right size. They were large enough to have the resources and technical expertise to meet the peaks of our demand but at the same time were small enough that our project really mattered to them. Finding this right level is always difficult when you are partnering with an external organisation on mission-critical software applications. It also meant that we could engage with their senior people whenever we required.\n\n“Secondly, we needed to move quickly and Godel were adaptable enough to pick up the project ‘mid-flight’ and take it forward. We were working to challenging timescales and with evolving requirements and our partner needed to buy-in to these demands.\n\n“And last, but not least, they have got a very good, commonsense methodology that helps to guarantee project success.”",
      engagementDescription:
        "Godel started work on the project in October and were critical in ensuring the project went live at the start of the year as planned. “Their flexible approach enabled us to build a team that exactly met our requirements in a short timescale. It simply would not have been possible to recruit the staff and meet the deadline otherwise”, said NYN’s CTO. “What’s more, it was cost-effective to do it this way!”\n\nWith the project now completed NYN’s relationship with Godel has evolved as the Chief Technical Officer explained. “Initially, they were brought on board to help with a specific project. But, I was so impressed with their capabilities that I have now retained them to work with us on the design and development of our next generation product.”\n\nGodel CEO Neil Turvin concluded, “We understand that resource requirements change during a project - that is why our flexible approach enabled NYN to tailor the dedicated team to exactly match their initial project requirements and then, after this was completed, to work with us on new product development.\n\n“By enabling additional resources to be quickly and easily added or removed, we ensure that our dedicated teams deliver the highest possible resource efficiency to our clients. Furthermore, the knowledge and understanding of NYN's markets and customers that Godel staff have acquired is not lost for future projects. This provides all the benefits of recruiting staff internally without the usual costs and time delays – the best of both worlds!”"
    })
      .then(model => {
        model.addIndustries([industries.telecoms]);
        return model;
      })
      .then(model => {
        model.addTechnologies([
          technologies.mssql,
          technologies.apach,
          technologies.spring
        ]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa, services.pm]);
        return model;
      })
      .then(model => {
        model.addModels([models.projectBased]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Organisations that are dependent on software technology to provide a competitive edge often find themselves with a dilemma. The demands placed on internal resources by project requirements frequently exceed their technical and resource capabilities leading to the need for additional staff. At this point the decision must be made whether to recruit this additional capability full-time or seek to partner with a specialist external organisation that can provide the high level of expertise required."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "feefo",
      title: "FEEFO",
      agents: "James Mancz, Head of Software Development",
      duration: "1 year +",
      description:
        "Feefo stands out from the crowd as being an ‘organic-growth’ organisation with no investment from Private Equity or Venture Capital firms to accelerate its growth rate.\n\nThe company is able to boast several awards, most recently they were named on the Sunday Times Hiscox Tech Track 100.",
      logo: "/img/feefo-logo.svg",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/feefo-office.jpg',
      bannerFilter: 'yellow',
      videoId: 'SA5NQFkT0-A',
      caseStudy:
        "Feefo believe that only authentic reviews are worth collecting: genuine feedback that has been matched to a transaction. Since 2010, Feefo have advocated transparency and trust in reviews. Now over 3000 have come to rely on the power of the Feefo platform to connect with their customers, drive business to their website and gain real, actionable insights.\n\nThe feedback collected by Feefo provides valuable business insights to businesses who want to hear the genuine voice of their customers. As a closed-feedback platform, only those customers who have made an online or store purchase or transaction are invited to leave a review, putting Feefo at the forefront of establishing trust in the reviews sector.",
      engagementDescription:
        "Feefo continue to innovate by responding to the needs of businesses, consumer expectations and the ever-changing requirements from search engines. James Mancz, Head of Software Development, made the decision to supplement his in-house team to fulfil the ongoing demands of the business.\n\n“We have an in-house development team here in Petersfield, but we wanted to on-board a partner who would be able to provide additional technical resource to support us fulfilling our exciting roadmap as quickly as possible. When we started to look at partners it was important for us to find a solution that was flexible and, most importantly, able to deliver code to the same high standards that we achieve internally.”"
    })
      .then(model => {
        model.addIndustries([industries.professional]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.java]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Thousands of brands trust Feefo to independently collect reviews from their customers – and those customers know that Feefo reviews are the real deal."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "first-utility",
      title: "FIRST UTILITY",
      agents: "Keith Sterling, Head of Software Development",
      duration: "1 year +",
      description:
        "First Utility wanted to change the face of the industry by fighting on behalf of the consumer. Not content for things to stay as they are, First Utility challenged the status quo to make energy simpler, fairer and cheaper.\n\nHaving already reduced switching times from five, to just over two weeks with their ‘Fix the Switch’ campaign, First Utility are committed to giving clients insights into their energy usage through the latest technology.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/05/First-Utility-logo.png",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/Gas.png',
      bannerFilter: 'crimson',
      videoId: 'yjxDcZEAsZo',
      caseStudy:
        "To move fast with consumer demands First Utility run development in an agile manner so test automation is key. The First Utility platform which delivers the main functions to the business such as billing, tariff management, and client management consists of a number of components.\n\nMany are controlled by First Utility however there are some which are developed by 3rd parties. Unable to control the development speed of the 3rd parties, First Utility looked at other ways in which they would be able to speed up deployments.\n\nGodel were selected as an automated testing partner working on the mission-critical billing system. Keith Sterling, Head of Software Development at First Utility said: “Our collaboration with Godel is the ideal strategic partnership; it supports our growth by allowing us to get new developments and products to market faster whilst increasing our software quality. At First Utility we are continually looking at ways in which we can put our customers first and ways in which we can cut costs to keep more money in their pockets,”",
      engagementDescription:
        "Since the first engagement Keith and his team have been utilising other services provided by Godel and now run multiple teams providing development, quality assurance, automated quality assurance and business analysis – skills which they couldn’t recruit fast enough to keep up with the pace of demand.\n\n“We have high standards for staff, as any large organisations do. and we are competing with other geographical organisations so you have to work hard to find the right people. We do find them but not at the pace that we would like to.”\n\nEmpowered by saving their clients money, First Utility have challenged the norm to make the energy industry better by challenging the ‘big six’ and offering their clients more control to help them spend less.\n\nFirst Utility are now the biggest independent energy supplier in the UK, they do not generate electricity, instead purchasing it from international markets. They are the only energy company to have been in The Sunday Times’ Virgin Fast Track 100 for the past four years."
    })
      .then(model => {
        model.addIndustries([industries.energy]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.java]);
        return model;
      })
      .then(model => {
        model.addServices([
          services.development,
          services.qa,
          services.autoQA,
          services.bi
        ]);
        return model;
      })
      .then(model => {
        model.addModels([models.augmentation]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Using the latest technology and working on the most cutting-edge tools First Utility are always working to make cost savings which they can then pass onto consumers."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      title: "AO.COM",
      logo:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2016/05/ao-logo.png"
    }).then(model => {
      model.addIndustries([industries.eCommerce]);
    });
  })
  .then(() => {
    CaseStudy.create({
      title: "CMS",
      logo:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/01/CMS.png"
    }).then(model => {
      model.addIndustries([industries.finance]);
    });
  })
  .then(() => {
    CaseStudy.create({
      title: "ExtraEnergy",
      logo:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2016/05/extraenergy.png"
    }).then(model => {
      model.addIndustries([industries.energy]);
    });
  })
  .then(() => {
    CaseStudy.create({
      title: "Manheim",
      logo:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/10/manheim_logo.png"
    }).then(model => {
      model.addIndustries([industries.automotive]);
    });
  })
  .then(() => {
    CaseStudy.create({
      title: "Intelliflo",
      logo:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2016/05/Intelliflo_logo.png"
    }).then(model => {
      model.addIndustries([industries.isv]);
    });
  })
  .then(() => {
    CaseStudy.create({
      title: "123Insight",
      logo:
        "http://www.godeltech.com/wp-content/uploads/sites/2/2017/10/123_logo.png"
    }).then(model => {
      model.addIndustries([industries.manufacturing]);
    });
  })
  .then(() => {
    CaseStudy.create({
      tag: "cts",
      title: "CLOUD TECHNOLOGY SOLUTIONS",
      agents: "Paul Lees, Technical Director & James Doggart, CEO",
      description:
        "Over recent years changes in working practices have necessitated a more flexible way of providing access to critical IT resources. The ability to be able to use applications such as email, spreadsheets and word processing from any device anywhere is now the norm – and with this comes bigger strains and responsibilities on IT departments.\n\nCloud Technology Solutions are a leading provider of Google Apps for Work solutions which can transform organisations and give them the flexibility required. Although having a solution for many clients, Cloud Technology Solutions faced a different challenge – resourcing. Selecting Godel as their strategic partner gave them access to cost effective and flexible software development and quality assurance talent.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/05/cts.png",
      duration: "1 year +",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/CTS-bus.jpg',
      bannerFilter: 'green',
      videoId: 'oLBmqSXpRDI',
      caseStudy:
        "As one of Europe’s leading Google enterprise partners, Cloud Technology Solutions have helped over two million users across the globe to leverage the business advantages of Google Apps as well as offer clients the benefits of its own products which include CloudMigrator and CloudPages.\n\nJames Doggart, CEO at Cloud Technology Solutions on choosing Godel: “Our offerings around Google Apps and our own cloud products such as Cloudmigrator and Cloudpages are seeing us make huge strides in the market and establishing ourselves as the go-to company for Google related services.\n\n“We needed to identify a software delivery partner who could provide us with high quality resources that could integrate seamlessly with our own development team. Our in-house team’s technical competence is second to none and after working alongside our Godel team for the pilot, we quickly understood that the capabilities of our new extended development team, working hand in hand with our own in-house team would enable Cloud Technology Solutions as a company to move forward with our exciting product releases.”",
      engagementDescription:
        "Cloud Technology Solutions are trusted by many well-known businesses, government and education establishments around the world to help them take full advantage of the Google Apps for Work collaborative cloud environment.\n\nSince they were established in 2008 Cloud Technology Solutions have helped near 5 million users move to the cloud.\n\nPaul Lees, Technical Director at Cloud Technology Solutions talks about the long-term partnership with Godel:\n\n“We are very ambitious at Cloud Technology Solutions, and we are coming up with new ideas all the time but unfortunately our ambitions and ideas didn’t match our in-house resources. Our customers drive us to create new features and their evolving demands mean that we need to expand our product range.\n\nIntroducing Godel as our delivery partner has helped us to add new features and expand our products and enter into new markets.”"
    })
      .then(model => {
        model.addIndustries([
          industries.isv,
          industries.online,
          industries.health
        ]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.microsoft]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Led by a group of positive, friendly and ambitious people who all have a passion for cloud solutions and technologies, combined with their Godel partnership Cloud Technology Solutions have become one of the fastest growing cloud-based companies in the world."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "caci",
      title: "CACI",
      agents: "Simon Kelly, Operations Director",
      description:
        "Targeted advertising is essential for organisations wanting to remain competitive. It allows them to have a rich knowledge and engage with their target audiences more accurately and efficiently than ever before.\n\nCACI has a world class reputation for the quality of its data and analytical services and for the customer insight and knowledge it generates for its clients in a variety of industries including financial services, telecoms, retail, media and publishing.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/CACI-logo.png",
      duration: "1 year +",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/CACI.png',
      bannerFilter: 'red',
      videoId: 'y8IKrVejg50',
      caseStudy:
        "CACI is the UK’s leading marketing services company and to enable them to stay ahead of the competition they wanted to increase their software development capacity.\n\nSimon Kelly, Operations Director at CACI looked at the cost effective options available which would allow them to get results quickly, having used outsourcers before he knew that this could be a possible solution. After looking at partners Simon preferred the benefits of using a nearshore software development partner and selected Godel’s dedicated team model.\n\nGodel’s nearshore development team will work alongside CACI’s in-house team, working together and creating new features and products in the portfolio.\n\n“Keeping ahead of the market place with cutting edge software is something that a partner like Godel is able to help us with. It’s scalable, so we can flexibly increase or decrease the team in Minsk should the need arise, and it provides us with a balance between efficiency and resource costs, which allows CACI to keep control over development and project expenditure.” explains Simon.",
      engagementDescription:
        "As an agile business, it was important that the partner CACI selected were confident in agile software delivery. Being able to communicate with their Godel dedicated team via the HD video conferencing equipment meant that the daily stand ups were held during UK core hours and enabled the two teams to create a strong working relationship.\n\nAs the relationship developed, the nearshore team became a natural extension of CACI’s in-house development team and together they had very successful results. Keen to continue delivering the quality features for the portfolio of products CACI agreed a long term partnership which allowed them to retain their Godel team whilst controlling expenditure for a longer period.\n\nDescribing what it’s like to work with Godel, Simon concludes: “Flexibility, in terms of the model. Friendliness, in terms of the relationships. Cost effectiveness, in terms of the actual cost of delivery.”"
    })
      .then(model => {
        model.addIndustries([industries.isv]);
        return model;
      })
      .then(model => {
        model.addTechnologies([
          technologies.java,
          technologies.liferay,
          technologies.postgresql,
          technologies.maven,
          technologies.jira,
          technologies.jsf2
        ]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Using their unique market data and models, CACI helps Britain’s leading businesses acquire, retain and grow profitable customer relationships through a detailed understanding of consumer characteristics and behaviour."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "boden",
      title: "BODEN",
      agents: "David Petronzio, Head of Development",
      description:
        "Boden is a British clothing retailer, with a single store they sell products across the UK, Germany, Austria, France and the USA with around 90% of all orders placed online.",
      description:
        "Boden is a British clothing retailer selling primarily online and mail order through their catalogue.\n\nWith online retail sales continuing to grow the competition for customers is becoming increasingly high. Retailers face constant pressures to be able to deliver the right products to consumers whilst delivering outstanding shopping experiences.\n\nThese demands put great pressure on the technology division for these retailers to stay ahead of the game.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2017/01/Boden.png",
      duration: "1 year +",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/Boden.png',
      bannerFilter: 'yellow',
      videoId: 'DcCKoP4Hxj0',
      caseStudy:
        "Competing in such an aggressive environment Boden faced the challenge of needing more people to meet the demands of the business, but being based in the capital city meant that costs were high.\n\nBoden had difficulties in hiring good developers to match their in house skills set; although using contractors worked well it wasn’t cost effective to continue growing the team that way.\n\n“We didn’t consider outsourcing at first, I have had a previous negative experience. But after meeting with Godel we really liked their model and decided to give it a go. We were used to building software in house and so we had some concerns around giving this responsibility to someone else and kept a very close eye on what our Godel team were producing. Although we quickly realised that we were dealing with some really good developers” – says David Petronzio, Head of Development at Boden.\n\nThe Godel team were chosen to work on several applications which are used by Boden to automate their business processes. These included Supplier Database solution which is used to store supplier details and audits carried out to ensure that the Supplier meets the ethical trade standards, and Stock Management system which allows Boden's staff to define overselling and allocation rules for the markets and channels Boden is selling their goods to.",
      engagementDescription:
        "At the start of the engagement the Godel and Boden teams visited one anothers' offices which allowed them to learn about the businesses and the projects in detail. This time allowed the two teams to build upon their relationships which is key to working together successfully.\n\nThe success of the first Godel dedicated team coupled with Boden’s demand for innovating their digital features has led to the growth of the original team and additional dedicated teams.\n\n“Godel write a good code and we can trust them to deliver. We also like that they don`t try to be the biggest, but try to be the best, just like we do” concludes David.\n\nBoden have a dedicated team committed to ethical trade and through their continuing efforts each year, the company strives to make their business ever more ethically aware and responsible."
    })
      .then(model => {
        model.addIndustries([industries.retail, industries.online]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.microsoft]);
        return model;
      })
      .then(model => {
        model.addServices([services.development]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Boden is a British clothing retailer, with a single store they sell products across the UK, Germany, Austria, France and the USA with around 90% of all orders placed online."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "mitie",
      title: "MITIE",
      agents: "Neil Campbell, Head of Business Solutions",
      description:
        "Mitie teams are responsible for delivering the widest range of facilities management (FM) services including cleaning, landscaping, pest control, front of house, technical engineering maintenance and building services across the UK, Ireland and Europe. They provide clients with higher quality, innovative services that save them money.\n\nIt`s important that Mitie keeps pace with technology to match their innovative services to withstand the competition. Mitie required a new software solution that would consolidate four existing systems; two in-house and two Oracle-based solutions into one application for use across the £85 million turnover property management division of Mitie Group.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/Mitie.png",
      duration: "1 year +",
      photo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/07/^26EEA85A9A2A0D7C924DBB441BE274488B2DECE73EC4454ECF^pimgpsh_fullsize_distr.jpg",
      bannerFilter: "crimson",
      caseStudy:
        "Godel competed against many other larger software development companies to be chosen by the property management division of Mitie Group to develop a web-based, mission-critical software solution that will allow Mitie to coordinate maintenance and materials management across its estate of 400,000 UK properties.\n\nThe main goal of the Mitie project was to develop a bespoke software solution for Mitie’s social housing repair and maintenance services, including the functional areas such as managing work orders, contract and materials management including reactive repair and maintenance, capital and decency work across its estate of social housing the length and breadth of the UK. It will also allow call centre operatives to book jobs with repair and maintenance contractors whilst coordinating access to properties and requests from tenants.\n\n“Working with Godel we are able to build a system from scratch that we estimate will save us £3 million in the next five years through efficiencies made in planning and scheduling time costs, and as we own the IP for the software, will save us thousands in licensing and hosting costs. The solution will also be scalable with our business over time, and will allow us to tailor our services to our clients in a much more personalised way”, – says Neil Campbell, Head of Business Solutions at Mitie.",
      engagementDescription:
        "Mitie Group PLC is a British strategic outsourcing and energy services company, focused on helping clients to run their businesses more effectively and developing people to excel at what they do, challenge how things are done and inspire change.\n\nHeadquartered in Bristol with more than 200 offices throughout the UK and Ireland, they selected Godel due to their Manchester presence and the location of the development centre meant that communication with the team was done in core UK hours.\n\nThe services provided by Godel consist of a full circle of development and quality assurance including test framework creation and automation of the regression testing in human readable format.\n\nHead of Business Solutions Neil Campbell describes working with Godel: “Godel has a willingness and ability to deliver on its promises: the team has the right attitude, openness and honesty backed up with the know-how and ability to develop mission critical software”."
    })
      .then(model => {
        model.addIndustries([industries.professional, industries.construction]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.microsoft]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa, services.pm]);
        return model;
      })
      .then(model => {
        model.addModels([models.projectBased]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Mitie make sure that our people have the right technology and systems to do their job properly. To manage and deliver services, they analyse and act on both their own and their clients’ data to provide the best service and most efficient solutions."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: "co-operative",
      title: "THE CO-OPERATIVE",
      agents: "Lawrence Freeman, Head of Software Development",
      description:
        "The retail industry has never been for the faint of heart. Traditionally, it is a low-margin business, meaning the difference between success and failure is very small. Now, those low margins are coming under greater pressure from increasing costs, reduced spending and competition from online enterprises.\n\nAgainst such a backdrop the use of technology within retail organisations is vital for survival and growth. This requires CIOs to be constantly evaluating new technologies and providing recommendations to the business as to whether these can improve performance and reduce costs.",
      logo:
        "https://www.godeltech.com/wp-content/uploads/sites/2/2016/05/partners_logo6.png",
      duration: "1 year +",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2016/05/description_block_img.jpg',
      bannerFilter: 'blue',
      videoId: 'JutRw7pjCSQ',
      caseStudy:
        "The Co-operative Group appointed Godel as their strategic software development partner for its EPos solution, InControl.\n\nThe Co-operative group hoped to reduce costs with implementing the new EPoS Solution, InControl. The system is deployed in over 4,500 UK retail outlets on 14,500 PoS units and is responsible for processing over 1.5 billion transactions per year with a value of over £200 million per week. Lawrence Freeman, head of software development at the Co-operative Group, says:\n\n“We have experienced rapid growth over the last few years and we have made efforts to ensure the quality of our in-house technologies matched the pace of our expansion.”\n\n“In 2009 we embarked upon the commercialisation of our award-winning PoS software, InControl Evolution, and offered it to other retailers. As a result we have seen a huge surge in demand and needed to identify a software development partner to complement our own in-house team.”",
      engagementDescription:
        "The Co-operative group recognised that once the product went to market they would need expertise quickly to develop, test and support it. The only way to do this was to use a dedicated team model from Godel.\n\n“We required a flexible delivery model which allows us to scale development and quality assurance expertise dependent on the requirements and deadlines identified by the business and, after carrying out a period of due diligence on a number of suppliers, the Co-operative Group chose Godel for a number of compelling reasons.”\n\nContinues Lawrence, “We pride ourselves on only working with suppliers whose values mirror our own and, with its mix of unique delivery model, team expertise, UK presence and use of high definition video conferencing for project communication, we were confident from the outset that Godel would be the right company for the project.”\n\nThe Co-op is the UK’s largest mutual business, owned by over six million consumers and is the UK’s fifth biggest food retailer, the leading convenience store operator and a major financial services provider, operating The Co-operative Bank, Britannia and The Co-operative Insurance.\n\nAmong its other businesses are the number one funeral services provider and Britain’s largest farming operation. The Group operates 4,800 retail trading outlets, employs more than 106,000 people and has an annual turnover of more than £13bn."
    })
      .then(model => {
        model.addIndustries([industries.retail]);
        return model;
      })
      .then(model => {
        model.addTechnologies([technologies.microsoft, technologies.c]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa, services.pm]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "The Co-operative group hoped to reduce costs with implementing the new EPoS Solution, InControl. The system is deployed in over 4,500 UK retail outlets on 14,500 PoS units and is responsible for processing over 1.5 billion transactions per year with a value of over £200 million per week."
        });
        return model;
      });
  })
  .then(() => {
    CaseStudy.create({
      tag: 'experian',
      title: 'EXPERIAN',
      onHomePage: true,
      agents:
        "David Marron; Head of Business Operations, Ade Potts; Managing Director and Simon Coulton; Head of Web Development",
      duration: "1 year +",
      description:
        "Technology must keep pace, and developing a cloud strategy allows organisations to meet business demands. Microservices are being used across all industries to form the basis of large cloud-native applications which can be scaled to millions of users, support multiple platforms, handle complex business rules, can be competitive in a fast moving market, react quickly and out-innovate the competition.",
      logo: "/img/experian-logo.svg",
      photo:
        'https://www.godeltech.com/wp-content/uploads/sites/2/2017/10/cloud.jpg',
      bannerFilter: 'blue',
      videoId: 'kFGhzHjlbVo',
      engagementDescription:
        "Godel fully re-architected Experian Business Express, My Business Profile and Web admin by moving them onto the Microsoft Azure Platform. Ensuring that the existing logic of these applications remained unchanged during the implementation process.\n\nBy fully moving applications to Microsoft Azure, Experian is able to deliver business functionality for customers by taking advantage of its cloud Infrastructure as a Service (IaaS).\n\nDavid Marron, Head of Business Operations at Experian “Godel have always delivered, with the success of this delivery being noticed across the wider Experian business. That is testament to the success and the results that has come from this engagement so far.”"
    })
      .then(model => {
        model.addIndustries([industries.finance]);
        return model;
      })
      .then(model => {
        model.addTechnologies([
          technologies.microsoft,
          technologies.azure,
          technologies.aqa
        ]);
        return model;
      })
      .then(model => {
        model.addServices([services.development, services.qa]);
        return model;
      })
      .then(model => {
        model.addModels([models.dedicated]);
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "With help from Godel's agile delivery team, financial services firm Experian took steps to move its three main applications to the cloud."
        });
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Learn how Godel created a micro-services architecture and deployed it as an IaaS into Azure for Experian"
        });
        return model;
      })
      .then(model => {
        model.createQuote({
          text:
            "Godel have always delivered, with the success of this delivery being noticed across the wider Experian business. That is testament to the success and the results that has come from this engagement so far."
        });
        return model;
      });
  });
