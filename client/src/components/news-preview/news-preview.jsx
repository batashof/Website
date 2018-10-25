import React, { Component } from "react";
import "./news-preview.css";

import { Button, Layout, NewsIcons } from "../../components";

class NewsPreview extends Component {
  textCut() {
    let text = this.props.text;
    if (text.length > 190) {
      text = text.substr(0, 190) + "...";
    }
    return text;
  }

  render() {
    return (
      <div className="News-block">
        <NewsIcons
          date={this.props.date}
          news={this.props.news}
          views={this.props.views}
        />
        <Layout
          width="half_position_right"
          name="NewsPreview"
          title={this.props.title}
          text={[this.textCut()]}
          button={
            <Button
              shape="rect"
              color="green"
              hover="trans"
              arrow="right"
              href={this.props.href}
            >
              Read more
            </Button>
          }
        >
          <img className="NewsPreview-img" src={this.props.image} alt="img" />
        </Layout>
      </div>
    );
  }
}
export default NewsPreview;
