import { CheckedAnswer, Question } from "@/models";
import { Argon2Utils } from "../Argon2Utils";

describe("Argon2Utils", () => {
  const testAnswer = "TestAnswer";
  const testQuestion = <Question>{
    solutions: [
      "77d9e14101717e80cf9c367459d991d5f4e605fa98c188fadec6a1acc1acf099",
    ],
  };
  describe("isAnswerValid", () => {
    it("returns true if the answer is valid in lower case", async () => {
      expect(await Argon2Utils.isAnswerValid(testAnswer, testQuestion)).toBe(
        true
      );
      expect(await Argon2Utils.isAnswerValid("TESTANSWER", testQuestion)).toBe(
        true
      );
      expect(await Argon2Utils.isAnswerValid("testanswer", testQuestion)).toBe(
        true
      );
    });
    it("returns false if the answer is not valid", async () => {
      expect(await Argon2Utils.isAnswerValid("WrongAnswer", testQuestion)).toBe(
        false
      );
      expect(await Argon2Utils.isAnswerValid("TéstAnswer", testQuestion)).toBe(
        false
      );
      expect(await Argon2Utils.isAnswerValid("Test Answer", testQuestion)).toBe(
        false
      );
      expect(await Argon2Utils.isAnswerValid("T`estAnswer", testQuestion)).toBe(
        false
      );
    });
  });
  describe("checkAnswer", () => {
    it("returns a valid checked answer if the answer is valid", async () => {
      expect(
        await Argon2Utils.checkAnswer(testAnswer, testQuestion)
      ).toStrictEqual(<CheckedAnswer>{ isValid: true, text: testAnswer });
      expect(
        await Argon2Utils.checkAnswer("TESTANSWER", testQuestion)
      ).toStrictEqual(<CheckedAnswer>{ isValid: true, text: "TESTANSWER" });
      expect(
        await Argon2Utils.checkAnswer("testanswer", testQuestion)
      ).toStrictEqual(<CheckedAnswer>{ isValid: true, text: "testanswer" });
    });
    it("returns an invalid checked answer if the answer is invalid", async () => {
      expect(
        await Argon2Utils.checkAnswer("WrongAnswer", testQuestion)
      ).toStrictEqual(<CheckedAnswer>{ isValid: false, text: "WrongAnswer" });
      expect(
        await Argon2Utils.checkAnswer("TéstAnswer", testQuestion)
      ).toStrictEqual(<CheckedAnswer>{ isValid: false, text: "TéstAnswer" });
      expect(
        await Argon2Utils.checkAnswer("Test Answer", testQuestion)
      ).toStrictEqual(<CheckedAnswer>{ isValid: false, text: "Test Answer" });
      expect(
        await Argon2Utils.checkAnswer("T`estAnswer", testQuestion)
      ).toStrictEqual(<CheckedAnswer>{ isValid: false, text: "T`estAnswer" });
    });
  });
  describe("checkAnswers", () => {
    const testQuestions = [
      testQuestion,
      testQuestion,
      testQuestion,
      testQuestion,
    ];
    it("returns an array with the checked answers", async () => {
      expect(await Argon2Utils.checkAnswers([], testQuestions)).toStrictEqual(
        []
      );
      expect(
        await Argon2Utils.checkAnswers(
          ["TestAnswer", "TestAnswer", "WrongAnswer", "TéstAnswer"],
          testQuestions
        )
      ).toStrictEqual(<CheckedAnswer[]>[
        { text: "TestAnswer", isValid: true },
        { text: "TestAnswer", isValid: true },
        { text: "WrongAnswer", isValid: false },
        { text: "TéstAnswer", isValid: false },
      ]);
      expect(
        await Argon2Utils.checkAnswers(
          [undefined, "TestAnswer", undefined, "WrongAnswer"],
          testQuestions
        )
      ).toStrictEqual(<Array<CheckedAnswer | undefined>>[
        undefined,
        { isValid: true, text: "TestAnswer" },
        undefined,
        { isValid: false, text: "WrongAnswer" },
      ]);
    });
  });
});
