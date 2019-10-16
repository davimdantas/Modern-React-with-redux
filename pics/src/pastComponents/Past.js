import React from "react";
import TabBar from "./TabBar";
import TabContent from "./TabContent";
import AppJSX from "./jsx/index";
import AppComponents from "./components_section/index";
import AppSeasons from "./seasons/index";
import App from "../components/App";
class Past extends React.Component {
  state = { tabSelected: 0 };
  pastComponents = [<App />, <AppJSX />, <AppComponents />, <AppSeasons />];
  // pastComponents = [<App />];

  changeTab = index => {
    this.setState({ tabSelected: index });
  };

  renderTabs() {
    return this.pastComponents.map((item, index) => (
      <TabContent
        key={index}
        is_active={this.state.tabSelected === index ? "active" : ""}
      >
        {item}
      </TabContent>
    ));
  }

  render() {
    return (
      <div>
        <TabBar
          itens={["current", "jsx", "Components", "Seasons"]}
          changeTab={this.changeTab}
          // changeTab={this.changeTab}
        />
        {this.renderTabs()}

        {/* 
        <TabContent is_active={this.state.tabSelected == 0 ? "active" : ""}>
          <App />
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
