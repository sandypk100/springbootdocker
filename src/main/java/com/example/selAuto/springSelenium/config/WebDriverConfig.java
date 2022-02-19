package com.example.selAuto.springSelenium.config;

import com.example.selAuto.springSelenium.annotation.LazyConfiguration;
import com.example.selAuto.springSelenium.annotation.ThreadScopeBean;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.Scope;

import java.io.File;
@LazyConfiguration
@Profile("!remote")
public class WebDriverConfig {

    @Value(("${default.timeout:30}"))
    private int timeout;

    @ThreadScopeBean
    @Scope("browserscope")
    @ConditionalOnProperty(name = "browser",havingValue = "chrome")
    public WebDriver chromeDriver(){

        WebDriverManager.chromedriver().setup();
        return new ChromeDriver();
    }

    @ThreadScopeBean
    //@Primary -- this will solve the issue of which bean to instantiate when there are more than one type of same bean
    //@ConditionalOnProperty(name = "browser",havingValue = "firefox")
    @ConditionalOnMissingBean //if property is mentioned explicitly then it is used otherwise this bean is used
    //ConditionalOnMissingBean should be the last bean in the file
    public WebDriver firefoxDriver(){

        //WebDriverManager.firefoxdriver().setup();
        System.setProperty("webdriver.gecko.driver","D:\\Downloads\\geckodriver.exe");
        File pathBinary = new File("C:\\Program Files\\Mozilla Firefox\\firefox.exe");
        FirefoxBinary firefoxBinary = new FirefoxBinary(pathBinary);
        DesiredCapabilities desired = DesiredCapabilities.firefox();
        FirefoxOptions options = new FirefoxOptions();
        desired.setCapability(FirefoxOptions.FIREFOX_OPTIONS, options.setBinary(firefoxBinary));
        WebDriver firefoxDriver = new FirefoxDriver(options);
        return firefoxDriver;
    }


}
