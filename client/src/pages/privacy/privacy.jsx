import React from "react";
import "./privacy.css";
import { Link } from "react-router-dom";
import { Layout } from "../../components";

function PrivacyPage() {
  return (
    <Layout name="Privacy" width="full" title="PRIVACY">
      <p className="Privacy__text Privacy__text_centered">
        This policy (together with our terms of use{" "}
        <Link className="Privacy__link" to="/">
          www.godeltech.com
        </Link>{" "}
        and any other documents referred to on it) sets out the basis on which
        any personal data we collect from you, or that you provide to us, will
        be processed by us. Please read the following carefully to understand
        our views and practices regarding your personal data and how we will
        treat it. We keep certain basic information when you visit our website
        and recognise the importance of keeping that information secure and
        letting you know what we will do with it.
      </p>
      <p className="Privacy__text">
        Godel Technologies Europe Limited (“We”) are committed to protecting and
        respecting your privacy.
      </p>
      <p className="Privacy__text">
        For the purpose of the Data Protection Act 1998 (the{" "}
        <strong className="Privacy__text Privacy__text_bold">Act</strong>), the
        data controller is Godel Technologies Europe Limited of Floor 27 City
        Tower, Piccadilly Plaza, Manchester, M1 4BT (registration number
        817674207).
      </p>
      <p className="Privacy__text">
        This policy only applies to our site, if you leave our site via a link
        or otherwise, you will be subject to the policy of that website
        provider. We have no control over that policy or the terms of the
        website and you should check their policy before continuing to access
        the site.
      </p>
      <h3 className="Privacy__subtitle">Information we may collect from you</h3>
      <p className="Privacy__text">
        We may collect and process the following data about you:
      </p>
      <ul className="Privacy__list">
        <li className="Privacy__list-item">
          Information that you provide by filling in forms on our site{" "}
          <Link className="Privacy__link" to="/">
            www.godeltech.com
          </Link>{" "}
          (<strong className="Privacy__text Privacy__text_bold">
            our site
          </strong>). This includes information provided at the time of
          registering to use our site, subscribing to our service or requesting
          further services. We may also ask you for information when you report
          a problem with our site.
        </li>
        <li className="Privacy__list-item">
          If you contact us, we may keep a record of that correspondence.
        </li>
        <li className="Privacy__list-item">
          We may also ask you to complete surveys that we use for research
          purposes, although you do not have to respond to them.
        </li>
        <li className="Privacy__list-item">
          Details of your visits to our site including, but not limited to,
          traffic data, location data, weblogs, operating system, browser usage
          and other communication data, whether this is required for our own
          billing purposes or otherwise and the resources that you access.
        </li>
      </ul>
      <h3 className="Privacy__subtitle">Cookie policy</h3>
      <p className="Privacy__text">
        Whilst navigating Godel Technologies’ website, you consent to our use of
        both session cookies and persistent cookies, both being small text files
        which provide information about your visit to our website. At this time
        cookies used on our site will not identify you with specific
        personalized details.
      </p>
      <h4 className="Privacy__point">Cookies we use and why we use them:</h4>
      <p className="Privacy__text">
        We use analytical cookies to learn how users engage with our site and
        improve your experience through analysis of this data. These cookies
        allow third party web analytics services to collate and display data
        collected by the analytical cookies.
      </p>
      <p className="Privacy__text">
        Any data collected from our website’s users is secured as per our own
        and the third parties’ data protection policies.
      </p>
      <p className="Privacy__text">
        No personal data collected from our website’s users through analytics
        cookies. Third party tools used for our website analytics:
      </p>
      <ul className="Privacy__list">
        <li className="Privacy__list-item">
          Google Analytics to identify and analyse our visitors’ behaviours and
          demographics.
        </li>
        <li className="Privacy__list-item">
          Communigator to identify our vistitors’ demographics.
        </li>
        <li className="Privacy__list-item">
          LinkedIn insight tag to identify and analyse engagement with our
          social media content.
        </li>
      </ul>
      <h4 className="Privacy__point">Control our use of cookies</h4>
      <p className="Privacy__text">
        You can clear your cache of cookies in any browser by visiting its
        settings. For further information visit{" "}
        <a href="http://aboutcookies.org/" className="Privacy__link">
          aboutcookies.org
        </a>. Be aware that clearing your cache of cookies may negatively impact
        your experience on Godel Technologies’ and other websites you visit.
      </p>
      <h3 className="Privacy__subtitle">Storing Your Personal Data</h3>
      <p className="Privacy__text">
        In operating our website it may become necessary to transfer data that
        we collect from you to locations outside of the European Union for
        processing and storing. By providing your personal data to us, you agree
        to this transfer, storing or processing. We do our upmost to ensure that
        all reasonable steps are taken to make sure that your data is treated
        stored securely.
      </p>
      <p className="Privacy__text">
        Unfortunately the sending of information via the internet is not totally
        secure and on occasion such information can be intercepted. We cannot
        guarantee the security of data that you choose to send us
        electronically, Sending such information is entirely at your own risk.
      </p>
      <h3 className="Privacy__subtitle">Disclosing Your Information</h3>
      <p className="Privacy__text">
        We will not disclose your personal information to any other party other
        than in accordance with this Privacy Policy and in the circumstances
        detailed below:
      </p>
      <ul className="Privacy__list">
        <li className="Privacy__list-item">
          In the event that we sell any or all of our business to the buyer.
        </li>
        <li className="Privacy__list-item">
          Where we are legally required by law to disclose your personal
          information.
        </li>
        <li className="Privacy__list-item">
          To further fraud protection and reduce the risk of fraud.
        </li>
      </ul>
      <h3 className="Privacy__subtitle">Contacting Us</h3>
      <p className="Privacy__text">
        Please do not hesitate to contact us regarding any matter relating to
        this Privacy Policy at{" "}
        <a href="mailto:enquires@godeltech.com" className="Privacy__link">
          enquires@godeltech.com
        </a>{" "}
        or Godel Technologies Europe Ltd, Floor 27 City Tower, Piccadilly Plaza,
        Manchester, M1 4BT.
      </p>
    </Layout>
  );
}

export default PrivacyPage;
