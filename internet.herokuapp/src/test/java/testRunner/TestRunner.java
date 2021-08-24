package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features",
		glue="stepDefinitions",
		plugin = {"json:target/cucumber.json","html:target/site/cucumber-pretty"},
	    dryRun= false 
		
		)
public class TestRunner {

}


