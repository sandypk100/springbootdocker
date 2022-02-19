package com.example.selAuto.springSelenium.util;

import com.example.selAuto.springSelenium.annotation.PageFragment;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.util.FileCopyUtils;

import java.io.File;
import java.io.IOException;

@PageFragment
public class ScreenshotUtil {

    @Autowired
    private ApplicationContext ctx;

    @Value("${screenshot.path}")
    private File path;

    public void takeScreenShot(String name) throws IOException {

        File Sourcefile=this.ctx.getBean(TakesScreenshot.class).getScreenshotAs(OutputType.FILE);
        FileCopyUtils.copy(Sourcefile,new File(String.valueOf(path+"//"+name+".png")));
    }

    public byte[] getScreenshot(){
        return this.ctx.getBean(TakesScreenshot.class).getScreenshotAs(OutputType.BYTES);
    }
}
