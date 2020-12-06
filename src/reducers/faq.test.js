import faq from "./faq";

describe("faq", () => {
  it("is able to handle the add faq item action", () => {
    expect(
      faq([], {
        type: "ADD_FAQ_ITEM",
        question: "What is the answer to life the universe and everything?",
        answer: 42
      })
    ).toEqual([{
      question: "What is the answer to life the universe and everything?",
      answer: 42
    }]);
  });
});