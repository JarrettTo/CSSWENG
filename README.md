# Dependencies

 - Selenium
  `pip install selenium & pip install webdriver-manager`
- [Selenium IDE (Optional)](https://www.selenium.dev/selenium-ide/)  - Useful for recording macros to make coding the test cases easier

## How to run

    python TestCases.py

## How to create a Test Case script

1. Record macros using Selenium IDE
2. Export as Python file
3. Copy the entire function of the exported code `def <function_name>` and paste it in TestCases.py
4. Edit the function to `def <function_name>(url)`
5. Remove `self.` for each line and replace `self.driver.get("<URL>) ` to `driver.get(url)`

## To do

Print if a test case is successful or not.
