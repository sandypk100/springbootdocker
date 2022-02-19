package com.example.selAuto.springSelenium.annotation;

import java.lang.annotation.*;

@page
@Documented
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface Window {
    String value() default "";
}
