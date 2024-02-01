import type { Config } from "jest";
import nextJest from "next/jest.js";
import { pathsToModuleNameMapper } from "ts-jest";
import tsconfig from "./tsconfig.json";

const createJestConfig = nextJest({
  dir: "./",
});

const moduleNameMapper = pathsToModuleNameMapper(
  tsconfig.compilerOptions.paths,
  { prefix: "<rootDir>/" }
);

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper,
};

export default createJestConfig(config);
