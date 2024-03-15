// legoCompleteness.test.js
import { expect, test } from "vitest";
import { checkLEGOCompleteness } from "./main.js";


test("checkLEGOCompleteness function - All parts present", () => {
  const description = "This LEGO figure has a pair of legs, a torso a head, a hat and a spanner";
  const expected = ["complete"];
  const actual = checkLEGOCompleteness(description);
  expect(actual).toEqual(expected);

});

// Test when missing torso and headpiece
test("checkLEGOCompleteness function - Missing torso and headpiece", () => {
 const description = "This LEGO figure has a pair of legs, a head and a spanner";
 const expected = ["torso", "headpiece"];
 const actual = checkLEGOCompleteness(description);
 expect(actual).toEqual(expected);
});

// Test when missing accessory
test("checkLEGOCompleteness function - Missing accessory", () => {
 const description = "This LEGO figure has a pair of legs, a torso, a head, a hat";
 const expected = ["accessory"];
 const actual = checkLEGOCompleteness(description);
 expect(actual).toEqual(expected);
});

// Test when missing all components except legs
test("checkLEGOCompleteness function - Missing all components except legs", () => {
 const description = "This LEGO figure has a pair of legs";
 const expected = ["torso", "head", "headpiece", "accessory"];
 const actual = checkLEGOCompleteness(description);
 expect(actual).toEqual(expected);
});

test("checkLEGOCompleteness function - Missing all components except headpiece", () => {
  const description = "Here is a hat";
  const expected = ["legs", "torso", "head", "accessory"];
  const actual = checkLEGOCompleteness(description);
  expect(actual).toEqual(expected);
});

test("checkLEGOCompleteness function - Missing all components except torso", () => {
  const description = "This LEGO figure has a torso";
  const expected = ["legs", "head", "headpiece", "accessory"];
  const actual = checkLEGOCompleteness(description);
  expect(actual).toEqual(expected);
});

test("checkLEGOCompleteness function - Missing all components except head", () => {
  const description = "This LEGO figure has a head";
  const expected = ["legs", "torso", "headpiece", "accessory"];
  const actual = checkLEGOCompleteness(description);
  expect(actual).toEqual(expected);
});

// Test when missing all components except headpiece
test("checkLEGOCompleteness function - Missing all components except headpiece", () => {
  const description = "Here is some lego hair";
  const expected = ["legs", "torso", "head", "accessory"];
  const actual = checkLEGOCompleteness(description);
  expect(actual).toEqual(expected);
});

test("checkLEGOCompleteness function - All components missing", () => {
  const description = "This is just a block of LEGO";
  const expected = ["legs", "torso", "head", "headpiece", "accessory"];
  const actual = checkLEGOCompleteness(description);
  expect(actual).toEqual(expected);
});