import React from "react";
import TabBar from "./TabBar";
import TabContent from "./TabContent";
import AppJSX from "./jsx/index";
import AppComponents from "./components_section/index";
import AppSeasons from "./seasons/index";
import AppSplash from "./splash/AppSplash";
import AppVideo from "./videos/AppVideo";
import Current from "../current/Current";
class Past extends React.Component {
  state = { tabSelected: 0 };
  pastComponents = [<Current />, <AppVideo />, <AppSplash />, <AppJSX />, <AppComponents />, <AppSeasons />];
  // pastComponents = [<Current />];

  changeTab = index => {
    this.setState({ tabSelected: index });
  };

  renderTabs() {
    return this.pastComponents.map((item, index) => (
      <TabContent
        key={index}
        is_active={this.state.tabSelected === index ? "active" : ""}

      // is_active={this.state.tabSelected === index}
      >
        {this.state.tabSelected === index ? item : null}
      </TabContent>
    ));
  }

  render() {
    return (
      <div>
        <TabBar
          itens={["current", "Videos", "Splash", "jsx", "Components", "Seasons"]}
          changeTab={this.changeTab}
        // changeTab={this.changeTab}
        />
        {this.renderTabs()}

        {/* 
        <TabContent is_active={this.state.tabSelected == 0 ? "active" : ""}>
          <Current />
        </TabContent>
        <TabContent is_active={this.state.tabSelected == 1 ? "active" : ""}>
          <AppJSX />
        </TabContent>
        <TabContent is_active={this.state.tabSelected == 2 ? "active" : ""}>
          <AppComponents />
        </TabContent>
        <TabContent is_active={this.state.tabSelected == 3 ? "active" : ""}>
          <AppSeasons />
        </TabContent> */}
      </div>
    );
  }
}

export default Past;
