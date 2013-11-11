Feature: 
	In order to get the sum of two numbers
	As a math beginner
	I want to see the sum of two numbers

	Scenario: Add two numbers
		Given I visit the calculator page
		And I fill in '50' for 'first'
		And I fill in '70' for 'second'
		When I press 'add'
		Then I should see '120' as the 'answer'
		Then my database should have an 'answer' with value '120'