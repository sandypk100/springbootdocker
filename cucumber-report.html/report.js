$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/search.feature");
formatter.feature({
  "name": "Google search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "I want to search on google site",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
    }
  ]
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \"\u003ckeyword\u003e\" as a keyword",
  "keyword": "When "
});
formatter.step({
  "name": "I should see search results page",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see at least \u003ccount\u003e results",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword",
        "count"
      ]
    },
    {
      "cells": [
        "quantuam physcics",
        "2"
      ]
    },
    {
      "cells": [
        "stars",
        "5"
      ]
    },
    {
      "cells": [
        "dark matter",
        "87"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I want to search on google site",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
    }
  ]
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.launchSite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"quantuam physcics\" as a keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.clickSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 2 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.verifyResults(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to search on google site",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
    }
  ]
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.launchSite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"stars\" as a keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.clickSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 5 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.verifyResults(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to search on google site",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
    }
  ]
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.launchSite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"dark matter\" as a keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.clickSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 87 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.example.selAuto.bdd.GoogleSteps.verifyResults(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:969)\r\n\tat org.testng.Assert.assertTrue(Assert.java:43)\r\n\tat org.testng.Assert.assertTrue(Assert.java:53)\r\n\tat com.example.selAuto.bdd.GoogleSteps.verifyResults(GoogleSteps.java:35)\r\n\tat ✽.I should see at least 87 results(classpath:features/search.feature:8)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "I want to search on google site");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/visa-registration.feature");
formatter.feature({
  "name": "User visa registration feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "I should be able to submit visa form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@visa"
    }
  ]
});
formatter.step({
  "name": "I am on VISA registration form",
  "keyword": "Given "
});
formatter.step({
  "name": "I select my from country \"\u003cfromCountry\u003e\" and to country \"\u003ctoCountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter my dob as \"\u003cdateOfBirth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter my name as \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter my contact details as \"\u003cemail\u003e\" and \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the comment \"\u003ccomments\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I submit the form",
  "keyword": "And "
});
formatter.step({
  "name": "I should see get the confirmation number",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fromCountry",
        "toCountry",
        "dateOfBirth",
        "firstName",
        "lastName",
        "email",
        "phone",
        "comments"
      ]
    },
    {
      "cells": [
        "Isle of Man",
        "Mali",
        "2011-05-31",
        "Kraig",
        "Wiza",
        "Kraig@nobody.com",
        "1-000-884-1373",
        "comment1"
      ]
    },
    {
      "cells": [
        "Lithuania",
        "Mexico",
        "2001-01-01",
        "Houston",
        "Kertzmann",
        "Houston@nobody.com",
        "284.864.6580",
        ""
      ]
    },
    {
      "cells": [
        "Somalia",
        "Greece",
        "2004-07-02",
        "Ruthie",
        "Stamm",
        "Ruthie@nobody.com",
        "1-209-813-9712",
        "comment2"
      ]
    },
    {
      "cells": [
        "Christmas Island",
        "French Southern Territories",
        "2019-04-05",
        "Shonna",
        "Nolan",
        "Shonna@nobody.com",
        "(162) 387-0305",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "I should be able to submit visa form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@visa"
    }
  ]
});
formatter.step({
  "name": "I am on VISA registration form",
  "keyword": "Given "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.launchSite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I select my from country \"Isle of Man\" and to country \"Mali\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.selectCountry(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my dob as \"2011-05-31\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterDob(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my name as \"Kraig\" and \"Wiza\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterNames(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my contact details as \"Kraig@nobody.com\" and \"1-000-884-1373\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterContactDetails(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter the comment \"comment1\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterComment(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I submit the form",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.submit()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see get the confirmation number",
  "keyword": "Then "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.verifyConfirmationNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I should be able to submit visa form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@visa"
    }
  ]
});
formatter.step({
  "name": "I am on VISA registration form",
  "keyword": "Given "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.launchSite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I select my from country \"Lithuania\" and to country \"Mexico\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.selectCountry(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my dob as \"2001-01-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterDob(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my name as \"Houston\" and \"Kertzmann\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterNames(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my contact details as \"Houston@nobody.com\" and \"284.864.6580\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterContactDetails(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter the comment \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterComment(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I submit the form",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.submit()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see get the confirmation number",
  "keyword": "Then "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.verifyConfirmationNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I should be able to submit visa form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@visa"
    }
  ]
});
formatter.step({
  "name": "I am on VISA registration form",
  "keyword": "Given "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.launchSite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I select my from country \"Somalia\" and to country \"Greece\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.selectCountry(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my dob as \"2004-07-02\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterDob(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my name as \"Ruthie\" and \"Stamm\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterNames(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my contact details as \"Ruthie@nobody.com\" and \"1-209-813-9712\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterContactDetails(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter the comment \"comment2\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterComment(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I submit the form",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.submit()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see get the confirmation number",
  "keyword": "Then "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.verifyConfirmationNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I should be able to submit visa form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@visa"
    }
  ]
});
formatter.step({
  "name": "I am on VISA registration form",
  "keyword": "Given "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.launchSite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I select my from country \"Christmas Island\" and to country \"French Southern Territories\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.selectCountry(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my dob as \"2019-04-05\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterDob(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my name as \"Shonna\" and \"Nolan\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterNames(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my contact details as \"Shonna@nobody.com\" and \"(162) 387-0305\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterContactDetails(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter the comment \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.enterComment(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I submit the form",
  "keyword": "And "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.submit()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see get the confirmation number",
  "keyword": "Then "
});
formatter.match({
  "location": "com.example.selAuto.bdd.VisaSteps.verifyConfirmationNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});