Feature: Large & Deep DOM page validation
 Background:
    Given Ready to test
    And Initialize browser
  
    Scenario Outline: TC001_Validate selection of rows 
    
     Given User is on Large & Deep DOM page
     When user selects the <Row>
     Then choosen row gets selected
     
      Examples: 
      
      |Row	|
      |1.3	|
      |13.2	|
      