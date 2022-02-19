package com.example.selAuto;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.DataProvider;

@CucumberOptions(
        strict = true,
        features = "classpath:features",
        glue = "com.example.selAuto.bdd",
        plugin = {
                "pretty",
                "html:C:\\Users\\Admin\\selAuto\\cucumber-report.html"
        }
)
public class CucumberRunner extends AbstractTestNGCucumberTests {


        @Override
        @DataProvider(parallel = true)
        public Object[][] scenarios() {
                return super.scenarios();
        }
}

