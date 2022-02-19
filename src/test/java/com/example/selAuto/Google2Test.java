package com.example.selAuto;

import com.example.selAuto.springSelenium.pages.google.GooglePage;
import com.example.selAuto.springSelenium.util.ScreenshotUtil;
import com.google.common.util.concurrent.Uninterruptibles;
import org.springframework.beans.factory.annotation.Autowired;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class Google2Test extends SpringBaseTestNGTest{

    @Autowired
    private GooglePage googlePage;



    @Autowired
    private ScreenshotUtil screenShot;



    @Test
    public void googleTest() throws InterruptedException, IOException {

        this.googlePage.goTo();
        //this.screenShot.takeScreenShot("google");
        Assert.assertTrue(this.googlePage.isAt());
        Uninterruptibles.sleepUninterruptibly(4, TimeUnit.SECONDS);
        this.googlePage.getSearchComponent().search("dark matter");
        this.googlePage.getSearchComponent().isAt();
        Assert.assertTrue(this.googlePage.getSearchResult().getCount() > 0);
        //-Dthis.screenShot.takeScreenShot("googleTest-2"+new Date().getTime());
        this.googlePage.close();



    }


}
