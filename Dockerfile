FROM fabric8/java-alpine-openjdk11-jre
WORKDIR /usr/share/udemy
ADD target/selenium-docker.jar          selenium-docker.jar
ADD target/selenium-docker-tests.jar    selenium-docker-tests.jar
ADD target/libs                         libs
ADD testng-suite.xml                    testng-suite.xml
ENTRYPOINT java -cp selenium-docker.jar:selenium-docker-tests.jar:libs/* -Dbrowser=$browser org.testng.TestNG $module