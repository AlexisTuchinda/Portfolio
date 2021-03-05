import React from "react";
import "./Blog.css";
import "../Home/Home.css";
import * as content from "../content";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  displayBlogs() {}

  render() {
    return (
      <div>
        <h2 className={"Banner_Header"}>blogs</h2>
      </div>
    );
  }
}

export default Blog;
