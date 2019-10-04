import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const options = {
  hour: "2-digit",
  minute: "2-digit"
};
const App = () => {
  return (
    <div className="ui container comments" style={{ marginTop: "15px" }}>
      <ApprovalCard>Are you sure you want to do this?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.date.recent().toLocaleTimeString("en-US", options)}
          avatarImage={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatarImage={faker.image.avatar()}
          comment={faker.lorem.sentence()}
          timeAgo={faker.date.recent().toLocaleTimeString("en-US", options)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo={faker.date.recent().toLocaleTimeString("en-US", options)}
          avatarImage={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo={faker.date.recent().toLocaleTimeString("en-US", options)}
          avatarImage={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
