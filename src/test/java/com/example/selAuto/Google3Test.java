package com.example.selAuto;

import com.example.selAuto.springSelenium.pages.google.GooglePage;
import com.example.selAuto.springSelenium.util.ScreenshotUtil;
import com.google.common.util.concurrent.Uninterruptibles;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

@RunWith(SpringRunner.class)
public class Google3Test extends SpringBaseTestNGTest{

    @Autowired
    private GooglePage googlePage;

    @Autowired
    private WebDriver driver;

    @Autowired
    private ScreenshotUtil screenShot;



    @Test
    public void googleTest() throws InterruptedException, IOException {

        this.googlePage.goTo();
        //this.screenShot.takeScreenShot("google");
        Assert.assertTrue(this.googlePage.isAt());
        Uninterruptibles.sleepUninterruptibly(4, TimeUnit.SECONDS);
        this.googlePage.getSearchComponent().search("stars");
        this.googlePage.getSearchComponent().isAt();
        Assert.assertTrue(this.googlePage.getSearchResult().getCount() > 0);
        //this.screenShot.takeScreenShot("googleTest-1"+new Date().getTime());
        this.googlePage.close();


    }


}
