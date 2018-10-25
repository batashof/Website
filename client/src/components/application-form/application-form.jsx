import React, { Component } from "react";
import { Button } from "../../components";
import "./application-form.css";
import sendFormData from "../../services/send-form-data";
import ReactSVG from "react-svg";
import validator from "validator";

export default class ApplicationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      nameValid: true,
      lastNameValid: true,
      emailValid: true,
      messageValid: true,
      upload: "",
      name: "",
      lastName: "",
      email: "",
      tel: "",
      message: "",
      notice: ""
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
    this.successHandler = this.successHandler.bind(this);
  }

  changeHandler(e) {
    let name = e.target.name;
    let value;

    if (e.target.name === "upload") {
      value = e.target.files[0];
    } else {
      value = e.target.value;
    }

    this.setState({
      [name]: value,
      notice: "",
      [`${name}Valid`]: true
    });
  }

  errorHandler() {
    this.setState({
      notice: "Something went wrong. Please, try again",
      error: true
    });
  }

  successHandler() {
    this.setState({
      upload: "",
      name: "",
      lastName: "",
      email: "",
      tel: "",
      message: "",
      notice: "Your message was sent successfully. Thanks.",
      error: false
    });
  }

  validateForm() {
    let emailValid = validator.isEmail(this.refs.email.value);
    let nameValid = this.refs.name.value.length > 0;
    let messageValid = this.refs.message.value.length > 0;
    let lastNameValid = this.refs.lastName.value.length > 0;

    this.setState({
      emailValid,
      nameValid,
      lastNameValid,
      messageValid
    });

    return emailValid && nameValid && messageValid && lastNameValid;
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
      lastName: this.state.lastName,
      message: this.state.message,
      email: this.state.email,
      tel: this.state.tel,
      upload: this.state.upload,
      addressee: this.props.managerMail,
      position: this.props.position,
      action: "job-application"
    };

    sendFormData(formData, this.errorHandler, this.successHandler);
  }

  errorClass(input) {
    return this.state[`${input}Valid`] ? "" : " Application__input_has-error";
  }

  defineNoticeClassName() {
    let className = "Application__notice";

    if (!this.state.notice) {
      className += " Application__notice_hide";
    }

    if (this.state.error) {
      className += " Application__notice_error";
    }

    return className;
  }

  render() {
    return (
      <section className="Application">
        <div className="Application__wrap">
          <h2 className="Application__title">
            Want to be a part of Godel? Apply now
          </h2>
          <form
            method="POST"
            className="Application__form"
            onSubmit={e => this.submitHandler(e)}
            onChange={e => this.changeHandler(e)}
          >
            <label className="Application__label">
              <input
                type="text"
                name="name"
                className={`Application__input${this.errorClass("name")}`}
                placeholder="Name"
                value={this.state.name}
                ref="name"
              />
            </label>
            <label className="Application__label">
              <input
                type="text"
                name="lastName"
                className={`Application__input${this.errorClass("lastName")}`}
                placeholder="Last name"
                value={this.state.lastName}
                ref="lastName"
              />
            </label>
            <label className="Application__label">
              <input
                type="email"
                name="email"
                className={`Application__input${this.errorClass("email")}`}
                placeholder="Email"
                value={this.state.email}
                ref="email"
              />
            </label>
            <label className="Application__label">
              <input
                type="tel"
                name="tel"
                className="Application__input"
                placeholder="Phone"
                value={this.state.tel}
              />
            </label>
            <label className="Application__label Application__label_message">
              <textarea
                className={`Application__input${this.errorClass("message")}`}
                name="message"
                placeholder="Message"
                cols="40"
                rows="10"
                value={this.state.message}
                ref="message"
              />
            </label>
            <label
              className={
                this.state.upload
                  ? "Application__upload Application__upload_true"
                  : "Application__upload"
              }
            >
              <input
                type="file"
                name="upload"
                className="Application__input Application__input_upload"
              />
              <ReactSVG path="/icons/upload.svg" />
              {this.state.upload ? "CV uploaded - Thanks" : "Upload your CV"}
            </label>
            <Button
              shape="rect"
              color="green"
              hover="trans"
              arrow="right"
              type="submit"
            >
              Submit job application
            </Button>
            <span className={this.defineNoticeClassName()}>
              {this.state.notice}
            </span>
          </form>
        </div>
      </section>
    );
  }
}
