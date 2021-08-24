Feature: Application Login
 Background:
    Given Ready to test
    And Initialize browser
  
  Scenario: TC001_Successfull login page validation
  
    Given User is on login page
     When User login into application with "tomsmith" and "SuperSecretPassword!"
     Then User is navigated to "Secure Area" page 
      And validate Welcome message display
  
  Scenario Outline: TC002_Login Page "invalid password" message display validation
  
    Given User is on login page
     When user enters the Username <username>and Password <password>
     Then User is displayed with the Error message for Invalid password
      
  
    Examples: 
  
      | username | password             | 
      | tomsmith | SuperSecretPassword  | 
  
  