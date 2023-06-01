import {
  getEnv,
  isDevelopment,
  isTest,
  isProduction,
  isStaging,
} from "./config";

describe("config", () => {
  describe("getEnv", () => {
    it("gets the environment (string)", () => {
      const result = getEnv();
      expect(result).toEqual("test");
    });
  });

  describe("isDevelopment", () => {
    it("checks if it is the dev env (boolean)", () => {
      const result = isDevelopment();
      expect(result).toEqual(false);
    });
  });

  describe("isTest", () => {
    it("checks if it is the test env (boolean)", () => {
      const result = isTest();
      expect(result).toEqual(true);
    });
  });

  describe("isStaging", () => {
    it("checks if it is the staging env (boolean)", () => {
      const result = isStaging();
      expect(result).toEqual(false);
    });
  });

  describe("isProduction", () => {
    it("checks if it is the prod env (boolean)", () => {
      const result = isProduction();
      expect(result).toEqual(false);
    });
  });
});
