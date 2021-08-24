package stepDefinitions;


import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;

import static org.testng.Assert.assertEquals;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;


@RunWith(Cucumber.class)
public class stepDefinitions {
	
	public WebDriver driver = null;
	static WebDriver webDriver;
	public String SecurePageUrl="http://the-internet.herokuapp.com/secure";
	public String welcomeMessage="Welcome to the Secure Area. When you are done click logout below.";
	public String errorMessagePwd="Your password is invalid!";
	
	
	
	@Given("^Ready to test$")
    public void ready_to_test() throws Throwable {
		System.out.println("Testing Started");
    }

    @Given("^User is on login page$")
    public void user_is_on_login_page() throws Throwable {
        driver.get("http://the-internet.herokuapp.com/login");
        System.out.println("In Login page");
    }

    @When("^User login into application with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_login_into_application_with_something_and_something(String strArg1, String strArg2) throws Throwable {
    	driver.findElement(By.xpath("//input[@id='username']")).sendKeys(strArg1);   
    	driver.findElement(By.xpath("//input[@id='password']")).sendKeys(strArg2);
    	driver.findElement(By.tagName("button")).click();
    	System.out.println("Login Button is clicked");
    	
    	
    }

    @When("^user enters the Username (.+)and Password (.+)$")
    public void user_enters_the_username_and_password(String username, String password) throws Throwable {
    	driver.findElement(By.xpath("//input[@id='username']")).sendKeys(username);
    	WebElement password1 = driver.findElement(By.xpath("//input[@id='password']")); 
    	driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
    	driver.findElement(By.tagName("button")).click();
    	System.out.println("Login Button is clicked");
    }

    @Then("^User is navigated to \"([^\"]*)\" page$")
    public void user_is_navigated_to_something_page(String strArg1) throws Throwable {
    	String URL = driver.getCurrentUrl();
    	Assert.assertEquals(URL,SecurePageUrl);
    	System.out.println("Secure URL page validated");

    }

    @Then("^User is displayed with the Error message for Invalid password$")
    public void user_is_displayed_with_the_error_message_for_invalid_password() throws Throwable {
    	String errorText=driver.findElement(By.xpath("//div[@id='flash']")).getText();
    	Assert.assertEquals(errorMessagePwd.contains(errorMessagePwd),errorText.contains(errorMessagePwd));
    	System.out.println("Error Message Validated");
    	
    }

    @And("^Initialize browser$")
    public void initialize_browser() throws Throwable {
    	driver = new ChromeDriver();
		driver.manage().window().maximize();
		System.out.println("Chrome Browser Initialized");
    }

    @And("^validate Welcome message display$")
    public void validate_welcome_message_display() throws Throwable {
    	String welcomeText=driver.findElement(By.className("subheader")).getText();
    	Assert.assertEquals(welcomeMessage,welcomeText);
    	System.out.println("Welcome message validated after Login");
    	
    }

    @Given("^User is on Large & Deep DOM page$")
    public void user_is_on_large_deep_dom_page() throws Throwable {
	 driver.navigate().to("http://the-internet.herokuapp.com/large");
	 System.out.println("User is on Large DOM page");
	 
    }

    @When("^user selects the (.+)$")
    public void user_selects_the(String row) throws Throwable {
    	String a = "//div[contains(@id,"+"sibling-"+row +")]";
    	System.out.println(a);
    	WebElement element	= driver.findElement(By.xpath(a));
    	Actions select = new Actions(driver);
    	select.doubleClick(element).build().perform();
    	

    }

    @Then("^choosen row gets selected$")
    public void choosen_row_gets_selected() throws Throwable {
    	System.out.println("Text is selected");
    	   
}
}