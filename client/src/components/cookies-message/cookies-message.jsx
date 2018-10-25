import React, { Component } from "react";
import BrowserCookies from "browser-cookies";
import "./cookies-message.css";

export default class CookiesMessage extends Component {
  acceptCookies() {
    BrowserCookies.set("cookies_accepted", "true", { expires: 365, path: "/" });
    window.location.reload();
  }

  render() {
    if (!BrowserCookies.get("cookies_accepted")) {
      return (
        <div className="Cookies">
          <div className="Cookies__text">
            This sites uses cookies. You can read our policy here
          </div>
          <div className="Cookies__btn" onClick={() => this.acceptCookies()}>
            Accept
          </div>
        </div>
      );
    }
    return "";
  }
}
