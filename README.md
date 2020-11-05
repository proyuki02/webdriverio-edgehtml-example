# webdriverio-edgehtml-example

- Sync Mode
- TypeScript
- Selenium Standalone Service
- Microsoft Edge Legacy

## Test with Chrome

    npm i
    npm run test

## Test with Edge Legacy

### Setup

@see: https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/

Execute the following command at the command prompt with administrator privileges:

    DISM.exe /Online /Add-Capability /CapabilityName:Microsoft.WebDriver~~~~0.0.1.0

### Run

    npm run test:edge
