$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LargeDOM.feature");
formatter.feature({
  "line": 1,
  "name": "Large \u0026 Deep DOM page validation",
  "description": "",
  "id": "large-\u0026-deep-dom-page-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "TC001_Validate selection of rows",
  "description": "",
  "id": "large-\u0026-deep-dom-page-validation;tc001-validate-selection-of-rows",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User is on Large \u0026 Deep DOM page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user selects the \u003cRow\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "choosen row gets selected",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "large-\u0026-deep-dom-page-validation;tc001-validate-selection-of-rows;",
  "rows": [
    {
      "cells": [
        "Row"
      ],
      "line": 14,
      "id": "large-\u0026-deep-dom-page-validation;tc001-validate-selection-of-rows;;1"
    },
    {
      "cells": [
        "1.3"
      ],
      "line": 15,
      "id": "large-\u0026-deep-dom-page-validation;tc001-validate-selection-of-rows;;2"
    },
    {
      "cells": [
        "13.2"
      ],
      "line": 16,
      "id": "large-\u0026-deep-dom-page-validation;tc001-validate-selection-of-rows;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Ready to test",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Initialize browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ready_to_test()"
});
formatter.result({
  "duration": 390151800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.initialize_browser()"
});
formatter.result({
  "duration": 11443064900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "TC001_Validate selection of rows",
  "description": "",
  "id": "large-\u0026-deep-dom-page-validation;tc001-validate-selection-of-rows;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User is on Large \u0026 Deep DOM page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user selects the 1.3",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "choosen row gets selected",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_is_on_large_deep_dom_page()"
});
formatter.result({
  "duration": 780289300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.3",
      "offset": 17
    }
  ],
  "location": "stepDefinitions.user_selects_the(String)"
});
formatter.result({
  "duration": 183587100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.choosen_row_gets_selected()"
});
formatter.result({
  "duration": 118700,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Ready to test",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Initialize browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ready_to_test()"
});
formatter.result({
  "duration": 137700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.initialize_browser()"
});
formatter.result({
  "duration": 9514445800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "TC001_Validate selection of rows",
  "description": "",
  "id": "large-\u0026-deep-dom-page-validation;tc001-validate-selection-of-rows;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User is on Large \u0026 Deep DOM page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user selects the 13.2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "choosen row gets selected",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_is_on_large_deep_dom_page()"
});
formatter.result({
  "duration": 784922700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.2",
      "offset": 17
    }
  ],
  "location": "stepDefinitions.user_selects_the(String)"
});
formatter.result({
  "duration": 105502900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.choosen_row_gets_selected()"
});
formatter.result({
  "duration": 106100,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Ready to test",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Initialize browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ready_to_test()"
});
formatter.result({
  "duration": 424300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.initialize_browser()"
});
formatter.result({
  "duration": 9576809400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "TC001_Successfull login page validation",
  "description": "",
  "id": "application-login;tc001-successfull-login-page-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User login into application with \"tomsmith\" and \"SuperSecretPassword!\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to \"Secure Area\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "validate Welcome message display",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "duration": 565183700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 34
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 49
    }
  ],
  "location": "stepDefinitions.user_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "duration": 581179200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Secure Area",
      "offset": 22
    }
  ],
  "location": "stepDefinitions.user_is_navigated_to_something_page(String)"
});
formatter.result({
  "duration": 29273500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.validate_welcome_message_display()"
});
formatter.result({
  "duration": 52645000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "TC002_Login Page \"invalid password\" message display validation",
  "description": "",
  "id": "application-login;tc002-login-page-\"invalid-password\"-message-display-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters the Username \u003cusername\u003eand Password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User is displayed with the Error message for Invalid password",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "application-login;tc002-login-page-\"invalid-password\"-message-display-validation;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "application-login;tc002-login-page-\"invalid-password\"-message-display-validation;;1"
    },
    {
      "cells": [
        "tomsmith",
        "SuperSecretPassword"
      ],
      "line": 23,
      "id": "application-login;tc002-login-page-\"invalid-password\"-message-display-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Ready to test",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Initialize browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ready_to_test()"
});
formatter.result({
  "duration": 106200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.initialize_browser()"
});
formatter.result({
  "duration": 9702191900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "TC002_Login Page \"invalid password\" message display validation",
  "description": "",
  "id": "application-login;tc002-login-page-\"invalid-password\"-message-display-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters the Username tomsmithand Password SuperSecretPassword",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User is displayed with the Error message for Invalid password",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "duration": 571906200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 25
    },
    {
      "val": "SuperSecretPassword",
      "offset": 46
    }
  ],
  "location": "stepDefinitions.user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 634161600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_is_displayed_with_the_error_message_for_invalid_password()"
});
formatter.result({
  "duration": 92947200,
  "status": "passed"
});
});