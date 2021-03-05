import React from "react";
import "./Home.css";
import "../styles.css";
import * as content from "../content";
import Blog from "../Blog/Blog";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayProjects = this.displayProjects.bind(this);
  }

  displayProjects() {
    return content.Projects.map((item) => (
      <div className={"Projects"}>
        <a href={item.link}>
          <img className={"regImg"} src={item.image} />
        </a>
        <div className={"InnerProject"}>
          <p>
            <b>{item.title}</b>
          </p>
          <p>
            {item.description} <i>{item.details}</i>
          </p>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="Home">
        <div className={"Top"}>
          {/* <h1 className={"Name"}>Alexis Tuchinda</h1> */}
          <img src={content.Logo} className={"logo"} />
          <h1 className={"Name"}>alexis tuchinda</h1>
        </div>

        <div className={"Content"}>
          <div className={"Banner"}>
            <h2 className={"Banner_Header"}>bio</h2>
            <p className={"Body"}>{content.Bio}</p>
            <Blog />
          </div>

          <div>
            <div className={"Center"}>
              <h2 className={"Header"}>projects</h2>
              {this.displayProjects()}
            </div>

            <div className={"Bottom"}>
              <h4 className={"Header"}>also check me out on:</h4>
              <div className={"ExtLinks"}>
                <a href={content.GitHub}>
                  <img className={"extImg"} src={content.GitHub_Logo} />
                </a>
                <a href={content.Trinket}>
                  <img className={"extImg"} src={content.Trinket_Logo} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
