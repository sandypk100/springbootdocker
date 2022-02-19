package com.example.selAuto.springSelenium.aop;

import com.example.selAuto.springSelenium.annotation.TakeScreenshot;
import com.example.selAuto.springSelenium.util.ScreenshotUtil;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Aspect
@Component
public class ScreenshotAspect {

    @Autowired
    private ScreenshotUtil screenshotUtil;

    @After("@annotation(takescreenshot)")
    public void after(TakeScreenshot takescreenshot) throws IOException{

        this.screenshotUtil.takeScreenShot("test");
    }


}
