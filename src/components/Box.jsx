import React from "react";
import Speaker from "./Speaker";

function Box() {
  return (
    <div className="box">
      <div className="box1">Box 1</div>
      <Speaker
        className="image"
        img="data:image/jpeg;base64,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"
        name="Speaker 1"
        time="9:45"
        comment="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable."
      />
      <Speaker
        className="image"
        img="data:image/jpeg;base64,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"
        name="Speaker 2"
        time="06:35"
        comment="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable."
      />
      <Speaker
        className="image"
        img="data:image/jpeg;base64,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"
        name="Speaker 3"
        time="04:40"
        comment="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable."
      />
    </div>
  );
}

export default Box;