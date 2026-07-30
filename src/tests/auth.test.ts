import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("getApiKey", () => {
  const validHeaders = {
    authorization: "ApiKey thisisanapikey",
  };
  const emptyAuthHeaders = {
    authorization: "",
  };
  const invalidHeaders = {};
  const invalidAutHeader1 = {
    authorization: "notApiKey thiisnotanapikey",
  };
  const invalidAutHeader2 = {
    authorization: "thisisinvalidkey",
  };

  test("return null for empty headers", () => {
    expect(getAPIKey(emptyAuthHeaders)).toBe(null);
  });

  test("return null for headers missing auth header", () => {
    expect(getAPIKey(invalidHeaders)).toBe(null);
  });

  test("return null for headers with invalid auth header", () => {
    expect(getAPIKey(invalidAutHeader1)).toBe(null);
  });

  test("return api key ", () => {
    expect(getAPIKey(invalidAutHeader2)).toBe(null);
  });

  test("return null for headers with invalid auth header less than two words", () => {
    expect(getAPIKey(validHeaders)).toBe("thisisanapikey");
  });
});
