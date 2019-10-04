import React from "react";

const CommentDetail = props_passed_from_parent => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props_passed_from_parent.avatarImage} />
        {/* <img alt="avatar1" /> */}
      </a>
      <div className="content">
        <a href="/" className="author">
          {props_passed_from_parent.author}
        </a>
        <div className="metadata">
          <span className="data">{props_passed_from_parent.timeAgo}</span>
        </div>
        <div className="text"> {props_passed_from_parent.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
