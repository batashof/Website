import React, { Component } from "react";
import "./get-in-touch.css";
import ReCAPTCHA from "react-google-recaptcha";
import validator from "validator";
import { List, Layout, Location, Button } from "../../components";
import sendFormData from "../../services/send-form-data";

export default class GetInTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      nameValid: true,
      emailValid: true,
      messageValid: true,
      name: "",
      email: "",
      phone: "",
      message: "",
      notice: ""
    };

    this.captchaHandler = this.captchaHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
    this.successHandler = this.successHandler.bind(this);
  }

  validateForm() {
    let emailValid = validator.isEmail(this.refs.email.value);
    let nameValid = this.refs.name.value.length > 0;
    let messageValid = this.refs.message.value.length > 0;
    let captchaValid = this.state.captchaValid;

    this.setState({
      emailValid,
      nameValid,
      messageValid
    });

    return emailValid && nameValid && messageValid && captchaValid;
  }

  errorHandler() {
    this.setState({
      notice: "Something went wrong. Please, try again",
      error: true
    });
  }

  successHandler() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
      notice: "Your message was sent successfully. Thanks.",
      error: false
    });
  }

  submitHandler(e) {
    e.preventDefault();

    if (!this.validateForm()) {
      this.setState({
        error: true,
        notice:
          "Validation errors occurred. Please confirm the fields and submit it again."
      });

      return;
    }

    let formData = {
      name: this.state.name,
      message: this.state.message,
      email: this.state.email,
      tel: this.state.phone,
      addressee: "careers@godeltech.com",
      action: "contact-us"
    };

    sendFormData(formData, this.errorHandler, this.successHandler);
  }

  changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
      notice: "",
      [`${name}Valid`]: true
    });
  }

  captchaHandler(response) {
    if (response) {
      this.setState({
        captchaValid: true,
        notice: ""
      });
    }
  }

  errorClass(input) {
    return this.state[`${input}Valid`]
      ? ""
      : " Get-in-touch-enquiry-form__input_has-error";
  }

  defineNoticeClassName() {
    let className = "Get-in-touch-enquiry-form__notice";

    if (!this.state.notice) {
      className += " Get-in-touch-enquiry-form__notice_hide";
    }

    if (this.state.error) {
      className += " Get-in-touch-enquiry-form__notice_error";
    }

    return className;
  }

  render() {
    const key = "6LcyqE0UAAAAABAJM7eFt6ve9CwCpWbOtjQ3Rm3q";

    return (
      <main>
        <Layout width="full" name="Get-in-touch-banner" title="Contact Us" />
        <Layout width="full" name="Locations" title="OUR LOCATIONS">
          <List layout="horisontal">
            <Location
              city="manchester"
              address="27th Floor City Tower  Manchester  England "
              index=" M1 4BT"
              tel="+44 (0) 161 219 8100"
              href="/get-in-touch/manchester/"
            />
            <Location
              city="london"
              address="18 King William Street London England"
              index=" EC4N 7BP"
              tel="+44 (0) 207 099 8100"
              href="/get-in-touch/london/"
            />
            <Location
              city="minsk"
              address="Dzerzhinskogo av, 5-527 Minsk Belarus "
              index=" 220089"
              tel="+44 (0) 161 219 8100"
              href="/get-in-touch/minsk/"
            />
            <Location
              city="brest"
              address="Moskovskaya str. 208-413 Brest, Belarus "
              index=" 224000"
              tel="+44 (0) 161 219 8100"
              href="/get-in-touch/brest/"
            />
            <Location
              city="grodno"
              address="Vulica Lienina 5, Grodno, Belarus"
              index="220089"
              tel="+44 (0) 161 219 8100"
              href="/get-in-touch/grodno/"
            />
          </List>
        </Layout>
        <div />

        <Layout width="full" name="Get-in-touch-enquiry" title="Enquiry Form">
          <form
            className="Get-in-touch-enquiry-form"
            onSubmit={e => this.submitHandler(e)}
            onChange={e => this.changeHandler(e)}
          >
            <label className="Get-in-touch-enquiry-form__label">
              <input
                type="text"
                name="name"
                className={`Get-in-touch-enquiry-form__input${this.errorClass(
                  "name"
                )}`}
                placeholder="Name"
                value={this.state.name}
                ref="name"
              />
            </label>

            <label className="Get-in-touch-enquiry-form__label">
              <input
                type="email"
                name="email"
                className={`Get-in-touch-enquiry-form__input${this.errorClass(
                  "email"
                )}`}
                placeholder="Email"
                value={this.state.email}
                ref="email"
              />
            </label>
            <label className="Get-in-touch-enquiry-form__label">
              <input
                type="tel"
                name="phone"
                className="Get-in-touch-enquiry-form__input"
                placeholder="Phone"
                value={this.state.phone}
              />
            </label>
            <label className="Get-in-touch-enquiry-form__label Get-in-touch-enquiry-form__label_message">
              <textarea
                className={`Get-in-touch-enquiry-form__input${this.errorClass(
                  "message"
                )}`}
                name="message"
                placeholder="Message"
                cols="40"
                rows="10"
                value={this.state.message}
                ref="message"
              />
            </label>
            <label className="Get-in-touch-enquiry-form__label Get-in-touch-enquiry-form__label_captcha">
              <ReCAPTCHA
                onChange={this.captchaHandler}
                ref="recaptcha"
                sitekey={key}
              />
            </label>

            <Button shape="rect" color="green" hover="trans" arrow="none">
              Contact us today
            </Button>
            <span className={this.defineNoticeClassName()}>
              {this.state.notice}
            </span>
          </form>
        </Layout>
        <Layout width="full" name="Get-in-touch-email">
          Prefer to send us an email? No problem; send an email to{" "}
          <a
            className="Get-in-touch-email-link"
            href="mailto:hello@godeltech.com"
          >
            hello@godeltech.com{" "}
          </a>and we can talk.
        </Layout>
      </main>
    );
  }
}
