package com.example.selAuto.bdd;

import com.example.selAuto.springSelenium.annotation.LazyAutowired;
import com.example.selAuto.springSelenium.util.ScreenshotUtil;
import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Scenario;
import org.openqa.selenium.WebDriver;
import org.springframework.context.ApplicationContext;

import java.io.IOException;

public class CucumberHooks {

    @LazyAutowired
    private ScreenshotUtil screenshotService;

    @LazyAutowired
    private ApplicationContext applicationContext;

    @AfterStep
    public void afterStep(Scenario scenario) throws IOException {
        if(scenario.isFailed()){
            scenario.embed(this.screenshotService.getScreenshot(), "image/png", scenario.getName());
        }
    }

    @After
    public void afterScenario(){
        this.applicationContext.getBean(WebDriver.class).quit();
    }

}
