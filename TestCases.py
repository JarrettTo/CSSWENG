from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

driver = webdriver.Chrome(ChromeDriverManager().install())
url = "http://localhost:3000/posts" # URL of website

def test_adminLogin(url): #01 - Admin Login
  #Incorrect Login
  driver.get(url)
  driver.set_window_size(974, 1032)
  driver.find_element(By.CSS_SELECTOR, ".MuiButton-root:nth-child(1)").click()
  driver.find_element(By.NAME, "id").send_keys("testuser")
  driver.find_element(By.NAME, "password").send_keys("incorrectpassword")
  driver.find_element(By.CSS_SELECTOR, ".makeStyles-submit-43 > .MuiButton-label").click()

  #Login Valid
  driver.get(url)
  driver.set_window_size(974, 1032)
  driver.find_element(By.CSS_SELECTOR, ".MuiButtonBase-root:nth-child(1) > .MuiButton-label").click()
  driver.find_element(By.NAME, "id").send_keys("testuser")
  driver.find_element(By.NAME, "password").send_keys("testpassword")
  driver.find_element(By.CSS_SELECTOR, ".makeStyles-submit-43 > .MuiButton-label").click()

def test_addEvent(url): #02 - Add Event
  #Unexpected values
  driver.get(url)
  driver.set_window_size(974, 1032)
  driver.find_element(By.NAME, "creator").send_keys("!!!@#1231324``` `23/")
  driver.find_element(By.NAME, "title").send_keys("32!!#$``234/1234/")
  driver.find_element(By.XPATH, "//*[@id=\"root\"]/div/div/div[2]/div[1]/form/div[3]/div/input").click()
  driver.find_element(By.XPATH, "//*[@id=\"root\"]/div/div/div[2]/div[1]/form/div[3]/div/input").send_keys("12349-DASDJ203I09~231`/")
  driver.find_element(By.NAME, "date").send_keys("FDWF03240132/41`2~~")
  driver.find_element(By.NAME, "maxAttendees").send_keys("DSAF`/.!")
  driver.find_element(By.NAME, "tags").send_keys("R032RI-1")
  driver.find_element(By.CSS_SELECTOR, ".MuiButton-sizeLarge > .MuiButton-label").click()

  #Expected values
  driver.get(url)
  driver.set_window_size(974, 1032)
  driver.find_element(By.NAME, "creator").send_keys("DLSU")
  driver.find_element(By.NAME, "title").send_keys("Test Title")
  driver.find_element(By.XPATH, "//*[@id=\"root\"]/div/div/div[2]/div[1]/form/div[3]/div/input").click()
  driver.find_element(By.XPATH, "//*[@id=\"root\"]/div/div/div[2]/div[1]/form/div[3]/div/input").send_keys("Test description test description. Test description!")
  driver.find_element(By.NAME, "date").send_keys("November 8, 2022")
  driver.find_element(By.NAME, "maxAttendees").send_keys("200")
  driver.find_element(By.NAME, "tags").send_keys("test, tag")
  driver.find_element(By.CSS_SELECTOR, ".MuiButton-sizeLarge > .MuiButton-label").click()

test_addEvent(url)
test_adminLogin(url)