import "./SeasonDisplay.css";
import React from "react";
import faker from "faker";

const getSeason = (lat, month) => {
  // console.log("month :", month);
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else return lat > 0 ? "winter" : "summer";
};

const season_config = {
  winter: {
    text: "Burrr, it's  chilling",
    icon_name: "snowflake"
  },
  summer: {
    text: "Lets Hit the beach",
    icon_name: "sun"
  }
};

const SeasonDisplay = props => {
  // console.log("props :", props);
  const season = getSeason(props.lat, faker.date.future().getMonth());
  const { text, icon_name } = season_config[season];
  // console.log("season_def :", season_config);
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${icon_name}`} />
      <h1>{text}</h1>
      <i
        className={`icon-right massive icon ${season_config[season].icon_name}`}
      />
    </div>
  );
};

export default SeasonDisplay;
