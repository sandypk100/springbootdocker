package com.example.selAuto.springSelenium.pages.google;

import com.example.selAuto.springSelenium.annotation.PageFragment;
import com.example.selAuto.springSelenium.pages.base;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;
@PageFragment
public class SearchResult extends base {

    @FindBy(css ="div.tF2Cxc")
    private List<WebElement> section;

    public int getCount(){

        return this.section.size();
    }

    @Override
    public boolean isAt() {
        return this.wait.until((d) -> !this.section.isEmpty());
    }
}
