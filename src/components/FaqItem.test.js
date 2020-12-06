import React from "react";
import renderer from "react-test-renderer";

import FaqItem from "./FaqItem";

describe("FaqItem", () => {
  it("renders a FAQ item", () => {
    const component = renderer.create(
      <FaqItem
        question="What is the answer to life the universe and everything?"
        answer="42"
      />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

it("is able to handle the edit faq item action", () => {
  expect(
    faq(
      [{
        question: "What is the answer to life the universe and everything?",
        answer: 42
      }], {
        type: "EDIT_FAQ_ITEM",
        index: 0,
        question: "What is the answer to life the universe and everything?",
        answer: 43
      }
    )
  ).toEqual([{
    question: "What is the answer to life the universe and everything?",
    answer: 43
  }]);
});

it("is able to handle the delete faq item action", () => {
  expect(
    faq(
      [{
        question: "What is the answer to life the universe and everything?",
        answer: 42
      }], {
        type: "DELETE_FAQ_ITEM",
        index: 0
      }
    )
  ).toEqual([]);
});