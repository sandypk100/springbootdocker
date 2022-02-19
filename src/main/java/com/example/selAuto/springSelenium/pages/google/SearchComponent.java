package com.example.selAuto.springSelenium.pages.google;

import com.example.selAuto.springSelenium.annotation.PageFragment;
import com.example.selAuto.springSelenium.pages.base;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;
@PageFragment
public class SearchComponent extends base {

    @FindBy(name ="q")
    private WebElement searchBox;

    @FindBy(name = "btnK")
    private List<WebElement> searchBtns;

    public void search(final String keyword){
        this.searchBox.sendKeys(keyword);
        this.searchBox.sendKeys(Keys.TAB);
        searchBtns.stream()
                .filter(e -> e.isDisplayed())
                .findFirst()
                .ifPresent(WebElement::click);





    }

    @Override
    public boolean isAt() {
        return this.wait.until((d) -> this.searchBox.isDisplayed());

    }
}
