package com.example.selAuto.springSelenium.pages.google;

import com.example.selAuto.springSelenium.annotation.page;
import com.example.selAuto.springSelenium.pages.base;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

@page
public class GooglePage extends base {

    @Value("${application.url}")
    private String url;

    @Autowired
    private SearchComponent searchComponent;

    public SearchComponent getSearchComponent() {
        return searchComponent;
    }

    public SearchResult getSearchResult() {
        return searchResult;
    }

    @Autowired
    private SearchResult searchResult;





    @Override
    public boolean isAt() throws InterruptedException {
        return this.searchComponent.isAt();
    }

    public void goTo() {
        this.driver.get(url);
        //this.driver.manage().window().maximize();
    }

    public void close(){
        driver.quit();

    }
}
