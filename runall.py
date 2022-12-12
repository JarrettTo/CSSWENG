import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())
url = "http://localhost:3000" # URL of website

def login_test(url, email, password):
    # Test name: Empty Password Field
    # Step # | name | target | value
    # 1 | open | /auth |
    driver.get(url+"/auth")
    print(url+"/auth")
    # 2 | type | name=email | admin@gmail.com
    driver.find_element(By.NAME, "email").send_keys(email)
    # 3 | type | name=password |
    driver.find_element(By.NAME, "password").send_keys(password)
    # 4 | click | css=.MuiButton-contained > .MuiButton-label |
    driver.find_element(By.CSS_SELECTOR, ".MuiButton-contained > .MuiButton-label").click()
    time.sleep(3)

def login_validUserLogin(url):
    # Test name: Valid User Login
    # Step # | name | target | value
    # 1 | open | /auth | 
    driver.get(url+"/auth")
    # 2 | click | name=email | 
    driver.find_element(By.NAME, "email").click()
    # 3 | type | name=email | admin@gmail.com
    driver.find_element(By.NAME, "email").send_keys("admin@gmail.com")
    # 4 | type | name=password | password
    driver.find_element(By.NAME, "password").send_keys("password")
    # 5 | click | css=.MuiButton-contained > .MuiButton-label | 
    driver.find_element(By.CSS_SELECTOR, ".MuiButton-contained > .MuiButton-label").click()
    currentURL = driver.current_url
    print(currentURL)
    if currentURL == "http://localhost:3000/":
        print("ValidUserLogin: Success")
    else:
        print("ValidUserLogin: Fail")

def register_test(url, first_name, last_name, id_number, email, password, conf_password):
    # Test name: User Sign-up With Text in ID Number Field
    # Step # | name | target | value
    # 1 | open | /auth | 
    driver.get(url+"/auth")
    # 2 | click | css=.MuiButton-text > .MuiButton-label | 
    driver.find_element(By.CSS_SELECTOR, ".MuiButton-text > .MuiButton-label").click()
    # 3 | type | name=firstName | -
    driver.find_element(By.NAME, "firstName").send_keys(first_name)
    # 4 | type | name=lastName | TestLastName
    driver.find_element(By.NAME, "lastName").send_keys(last_name)
    # 5 | type | name=id | 12009999
    driver.find_element(By.NAME, "id").send_keys(id_number)
    # 6 | type | name=email | first_last@gmail.com
    driver.find_element(By.NAME, "email").send_keys(email)
    # 7 | type | name=password | testpass
    driver.find_element(By.NAME, "password").send_keys(password)
    # 8 | type | name=confirmPassword | testpass
    driver.find_element(By.NAME, "confirmPassword").send_keys(conf_password)
    # 9 | click | css=.MuiButton-contained > .MuiButton-label | 
    driver.find_element(By.CSS_SELECTOR, ".MuiButton-contained > .MuiButton-label").click()
    time.sleep(3)

# Login Tests
login_test(url, "admin@gmail.com", "") # Empty Password Field
login_test(url, "", "password") # Empty Username Field
login_test(url, "admin@gmail.com", "pass") # Incorrect Password
login_test(url, "@gmail.com", "password") # Incorrect Username-1
login_test(url, "admin", "password") # Incorrect Username-2
login_validUserLogin(url)

# Register Tests
register_test(url, "", "TestLastName", "12009999", "first_last@gmail.com", "testpass", "testpass") # User Sign-up With No First Name
register_test(url, "TestFirstName", "", "12009999", "first_last@gmail.com", "testpass", "testpass") # User Sign-up With No Last Name
register_test(url, "TestFirstName", "TestLastName", "", "first_last@gmail.com", "testpass", "testpass") # User Sign-up With No ID Number
register_test(url, "TestFirstName", "TestLastName", "12009999", "", "testpass", "testpass") # User Sign-up With No Email
register_test(url, "TestFirstName", "TestLastName", "12009999", "first_last@gmail.com", "", "testpass") # User Sign-up With No Password
register_test(url, "TestFirstName", "TestLastName", "12009999", "first_last@gmail.com", "testpass", "") # User Sign-up With No Confirmation Password
register_test(url, "TestFirstName", "TestLastName", "12009999", "first_last@gmail.com", "testpass1", "testpass2") # User Sign-up With Different Password and Confirmation Password
register_test(url, "TestFirstName", "TestLastName", "textIDNumber", "first_last@gmail.com", "testpass", "testpass") # User Sign-up With Text in ID Number
register_test(url, "TestFirstName", "TestLastName", "12009999", "first_last@gmail.com", "testpass", "testpass") # Valid User Sign-up

