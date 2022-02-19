package com.example.selAuto.springSelenium.pages.window;


import com.example.selAuto.springSelenium.annotation.page;
import com.example.selAuto.springSelenium.pages.base;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

@page
public class MainPage extends base {

    @FindBy(tagName = "a")
    private List<WebElement> links;

    public void goTo(){
        this.driver.get("https://vins-udemy.s3.amazonaws.com/ds/window/main.html");
    }
    //@TakeScreenshot
    public void launchAllWindows(){
        for (int i = 0; i < links.size(); i++) {
            links.get(i).click();
            this.wait.until(ExpectedConditions.numberOfWindowsToBe(i + 2));
        }
    }

    @Override
    public boolean isAt() {
        return this.wait.until((d) -> !this.links.isEmpty());
    }

}