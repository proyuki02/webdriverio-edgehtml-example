import { Config } from "webdriverio";
import { config as defaultConfig } from "./default.wdio.conf";

const drivers = {
  MicrosoftEdge: {
    binary: "C:\\Windows\\System32\\MicrosoftWebDriver.exe",
  },
};

const config: Config = {
  ...defaultConfig,

  capabilities: [
    {
      maxInstances: 1,
      browserName: "MicrosoftEdge",
    },
  ],
  services: [
    [
      "selenium-standalone",
      {
        installArgs: { drivers },
        args: { drivers },
      },
    ],
  ],
};

export { config };
