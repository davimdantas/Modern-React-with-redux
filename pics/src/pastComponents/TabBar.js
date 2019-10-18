import React from "react";

class TabBar extends React.Component {
  renderContent(itens, action) {
    return itens.map((item, index) => (
      <button className="item" key={index} onClick={() => action(index)}>
        {item}
      </button>
    ));
  }

  render() {
    return (
      <div>
        <div className="ui top attached tabular menu">
          {this.renderContent(this.props.itens, this.props.changeTab)}
        </div>
      </div>
    );
  }
}

// const TabBar = props => {
//   function renderContent(itens) {
//     console.log("itens :", itens);

//     return itens.map((item, index) => (
//       <a className="item" key={index} onClick={props.changeTab(index)}>
//         {item}
//       </a>
//     ));
//   }

//   return (
//     <div>
//       <div className="ui top attached tabular menu">
//         {renderContent(props.itens)}
//       </div>
//     </div>
//   );
// };

export default TabBar;
