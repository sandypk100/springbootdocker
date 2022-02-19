package com.example.selAuto.springSelenium.config;


import com.example.selAuto.springSelenium.annotation.LazyConfiguration;
import com.example.selAuto.springSelenium.annotation.ThreadScopeBean;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Profile;

import java.net.URL;

@LazyConfiguration
@Profile("remote")
public class RemoteWebDriverConfig {

    @Value("${selenium.grid.url}")
    private URL url;

    @ThreadScopeBean
    @ConditionalOnProperty(name = "browser", havingValue = "chrome")
    public WebDriver remoteChromeDriver(){


        DesiredCapabilities caps =  DesiredCapabilities.chrome();
       ChromeOptions options = new ChromeOptions();
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        /*options.setExperimentalOption("excludeSwitches", Arrays.asList("disable-popup-blocking"));
        //caps.setCapability("se:recordVideo",true);
        //cap.setCapability("se:recordVideo",true);*/
        caps.setCapability(ChromeOptions.CAPABILITY, options);
        return new RemoteWebDriver(this.url, caps);
    }

    @ThreadScopeBean
    @ConditionalOnProperty(name = "browser", havingValue = "firefox")
    public WebDriver remoteFirefoxDriver(){
        return new RemoteWebDriver(this.url, DesiredCapabilities.firefox());
    }


}










