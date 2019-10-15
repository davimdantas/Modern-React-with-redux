import React from "react";

const TabContent = props => {
  let tab_classes = `ui bottom attached tab segment ${props.is_active}`;
  return (
    <div>
      <div className={tab_classes}>{props.children}</div>
    </div>
  );
};

export default TabContent;
