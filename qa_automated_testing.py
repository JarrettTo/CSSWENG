import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

# Remove startup message
options = Options()
#options.add_argument('headless')
options.add_experimental_option('excludeSwitches', ['enable-logging'])

webdriver.Chrome(ChromeDriverManager().install())
url = "http://localhost:3000" # URL of website

def login_test(url, email, password):
    try:
        driver = webdriver.Chrome(options=options)
        # Test name: Login Test
        # Parameters # | url, email, password
        # 1 | open | /auth |
        driver.get(url+"/auth")
        # 2 | type | name=email | string
        driver.find_element(By.NAME, "email").send_keys(email)
        # 3 | type | name=password |
        driver.find_element(By.NAME, "password").send_keys(password)
        # 4 | click | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/main/div[1]/form/button').click() # Submit
        time.sleep(3) # Observe
        driver.close()
    except:
        print("Automation error in Login Testing")

def register_test(url, first_name, last_name, id_number, email, password, conf_password):
    try:
        driver = webdriver.Chrome(options=options)
        # Test name: User Registration Test
        # Parameters # | url, First Name, Last Name, ID #, Email, Password, Confirmation Password
        # 1 | open | /auth | 
        driver.get(url+"/auth")
        # 2 | click | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/main/div[1]/form/button').click() # Sign up 
        # 3 | type | name=firstName | string
        driver.find_element(By.NAME, "firstName").send_keys(first_name)
        # 4 | type | name=lastName | string
        driver.find_element(By.NAME, "lastName").send_keys(last_name)
        # 5 | type | name=id | int
        driver.find_element(By.NAME, "id").send_keys(id_number)
        # 6 | type | name=email | string
        driver.find_element(By.NAME, "email").send_keys(email)
        # 7 | type | name=password | string
        driver.find_element(By.NAME, "password").send_keys(password)
        # 8 | type | name=confirmPassword | string
        driver.find_element(By.NAME, "confirmPassword").send_keys(conf_password)
        # 9 | click | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/main/div[1]/form/button').click() # Submit
        time.sleep(3) # Observe
        driver.close()
    except:
        print("Automation error in Register Testing")

def addEvent_test(url, title, creator, description, date, endDate, expiryDate, venue, maxAttendees, tags, price):
    try:
        driver = webdriver.Chrome(options=options)
        
        # Test name: Add Event Test
        # Parameters # | url, Title, Creator, Description, Starting Date, End Date, Expiry Date, Venue, Maximum Attendees, Tags, Price
        # 1 | open | /auth | 
        driver.get(url+"/auth")
        # 2 | type | name=email | string
        driver.find_element(By.NAME, "email").send_keys("admin@gmail.com")
        # 3 | type | name=password | string
        driver.find_element(By.NAME, "password").send_keys("password")
        # 4 | click | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/main/div[1]/form/button').click()
        # 5 | type | name=title | string
        time.sleep(3) # Wait for loading
        driver.find_element(By.NAME, "title").send_keys(title)
        # 6 | type | name=creator | string
        driver.find_element(By.NAME, "creator").send_keys(creator)
        # 7 | type | XPATH | string
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div/div[2]/div[2]/header/div[3]/form/div[6]/div/textarea[1]').send_keys(description)
        # 8 | type | name=date | string
        driver.find_element(By.NAME, "date").send_keys(date[:10], Keys.TAB, date[11:])
        # 9 | type | name=endDate | string
        driver.find_element(By.NAME, "endDate").send_keys(endDate[:10], Keys.TAB, endDate[11:])
        # 10 | type | name=expiryDate | string
        driver.find_element(By.NAME, "expiryDate").send_keys(expiryDate[:10], Keys.TAB, expiryDate[11:])
        # 11 | type | name=venue | string
        driver.find_element(By.NAME, "venue").send_keys(venue)
        # 12 | type | name=maxAttendees | int
        driver.find_element(By.NAME, "maxAttendees").send_keys(maxAttendees)
        # 13 | type | name=tags | test, string
        driver.find_element(By.NAME, "tags").send_keys(tags)
        # 14 | type | name=price | int
        driver.find_element(By.NAME, "price").send_keys(price)

        # Edit path depending on machine
        # 15 | type | css=div:nth-child(13) > input | C:\fakepath\gift-ga9aeb3f8d_1280.png
        #driver.find_element(By.CSS_SELECTOR, "div:nth-child(13) > input").send_keys("C:fakepath\poster1.jpg")
        # # 16 | type | css=div:nth-child(15) > input | C:\fakepath\red-gc99ddf0c4_1280.png
        #driver.find_element(By.CSS_SELECTOR, "div:nth-child(15) > input").send_keys("C:\fakepath\poster2.jpg")
        # 17 | click | css=.makeStyles-button1-132 > .MuiButton-labeHl | 
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div/div[2]/div[2]/header/div[3]/form/button[1]').click() # Click submit
        time.sleep(3) # Observe
        driver.close()
    except:
        print("Automation error in Add Event Testing")

def edit_test(url, title="", creator="", description="", date="", endDate="", expiryDate="", venue="", maxAttendees="", tags="", price=""):
    try:
        driver = webdriver.Chrome(options=options)
        # Test name: Edit Test
        # Parameters # | url, Title, Creator, Description, Start Date, End Date, Expiry Date, Venue, Maximum Attendees, Tags, Price
        # 1 | open | /auth | 
        driver.get(url+"/auth")
        # 2 | type | name=email | admin@gmail.com
        driver.find_element(By.NAME, "email").send_keys("admin@gmail.com")
        # 3 | type | name=password | password
        driver.find_element(By.NAME, "password").send_keys("password")
        # 4 | click | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/main/div[1]/form/button').click()
        time.sleep(3) # Wait for loading
        # 5 | click | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div/div[2]/div[1]/div/div/div[1]/div/div[1]/button').click()
        # 6 | type | name=title | string
        if title != "":
            driver.find_element(By.NAME, "title").send_keys(Keys.CONTROL + "a" + Keys.BACK_SPACE)
            driver.find_element(By.NAME, "title").send_keys(title)
        # 6 | type | name=creator | string
        if creator != "":
            driver.find_element(By.NAME, "creator").send_keys(Keys.CONTROL + "a" + Keys.BACK_SPACE)
            driver.find_element(By.NAME, "creator").send_keys(creator)
        # 7 | type | XPATH
        if description != "":
            driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div/div[2]/div[2]/header/div[3]/form/div[6]/div/textarea[1]').send_keys(Keys.CONTROL + "a" + Keys.BACK_SPACE)
            driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div/div[2]/div[2]/header/div[3]/form/div[6]/div/textarea[1]').send_keys(description)
        # 8 | type | name=date | string
        if date != "":
            driver.find_element(By.NAME, "date").send_keys(Keys.CONTROL + "a" + Keys.BACK_SPACE)
            driver.find_element(By.NAME, "date").send_keys(date[:10], Keys.TAB, date[11:])
        # 9 | type | name=endDate | string
        if endDate != "":
            driver.find_element(By.NAME, "endDate").send_keys(Keys.CONTROL + "a" + Keys.BACK_SPACE)
            driver.find_element(By.NAME, "endDate").send_keys(endDate[:10], Keys.TAB, endDate[11:])
        # 10 | type | name=expiryDate | string
        if expiryDate != "":
            driver.find_element(By.NAME, "expiryDate").send_keys(Keys.CONTROL + "a" + Keys.BACK_SPACE)
            driver.find_element(By.NAME, "expiryDate").send_keys(expiryDate[:10], Keys.TAB, expiryDate[11:])
        # 11 | type | name=venue | string
        if venue != "":
            driver.find_element(By.NAME, "venue").send_keys(Keys.CONTROL + "a" + Keys.BACK_SPACE)
            driver.find_element(By.NAME, "venue").send_keys(venue)
        # 12 | type | name=maxAttendees | int
        if maxAttendees != "":
            driver.find_element(By.NAME, "maxAttendees").send_keys(Keys.CONTROL + "a" + Keys.BACK_SPACE)
            driver.find_element(By.NAME, "maxAttendees").send_keys(maxAttendees)
        # 13 | type | name=tags | test, string
        if tags != "":
            driver.find_element(By.NAME, "tags").send_keys(Keys.CONTROL + "a" + Keys.BACK_SPACE)
            driver.find_element(By.NAME, "tags").send_keys(tags)
        # 14 | type | name=price | in5
        if price != "":
            driver.find_element(By.NAME, "price").send_keys(Keys.CONTROL + "a" + Keys.BACK_SPACE)
            driver.find_element(By.NAME, "price").send_keys(price)
        # 13 | click | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div/div[2]/div[2]/header/div[3]/form/button[1]').click() # Submit
        time.sleep(3) # Observe
        driver.close()
    except:
        print("Automation error in Edit Testing")

def delete_test(url):
    try:
        driver = webdriver.Chrome(options=options)
        # Test name: Delete Event Test
        # Parameters # | url
        # 1 | open | /auth | 
        driver.get(url+"/auth")
        # 2 | type | name=email | admin@gmail.com
        driver.find_element(By.NAME, "email").send_keys("admin@gmail.com")
        # 3 | type | name=password | password
        driver.find_element(By.NAME, "password").send_keys("password")
        # 4 | click | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/main/div[1]/form/button').click()
        time.sleep(3) # Wait for loading
        # 5 | click | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div/div[2]/div[1]/div/div/div/div/div[2]/button').click() # Delete 
        time.sleep(3) # Observe
        driver.close()
    except:
        print("Automation error in Delete Testing")

def search_test(url, name="", tag=""):
    try:
        driver = webdriver.Chrome(options=options)
        # Test name: Search Test
        # Parameters # | url, Name, Tag
        # 1 | open | /auth | 
        driver.get(url+"/auth")
        # 2 | type | name=email | string
        driver.find_element(By.NAME, "email").send_keys("user@dlsu.edu.ph")
        # 3 | type | name=password | string
        driver.find_element(By.NAME, "password").send_keys("password")
        # 4 | click | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/main/div[1]/form/button').click()
        time.sleep(3) # Wait for loading
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div/div[2]/div[2]/div/div[2]/div[1]/div/input').send_keys(name)
        # 2 | type | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/div/input').send_keys(tag, Keys.ENTER)
        # 3 | click | XPATH
        driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div/div[2]/div[2]/div/div[2]/button').click() # Filter
        time.sleep(3) # Observe
        driver.close()
    except:
        print("Automation error in Search Testing")

# Login Tests
## Admin
login_test(url, "admin@gmail.com", "") # Empty Password Field
login_test(url, "", "password") # Empty Username Field
login_test(url, "admin@gmail.com", "pass") # Incorrect Password
login_test(url, "@gmail.com", "password") # Incorrect Username-1
login_test(url, "admin", "password") # Incorrect Username-2
login_test(url, "admin@gmail.com", "password") # Valid Login
## Normal
login_test(url, "", "password") # Empty Username Field
login_test(url, "user@gmail.com", "") # Incorrect Password
login_test(url, "@gmail.com", "password") # Incorrect Username-1
login_test(url, "user", "password") # Incorrect Username-2
login_test(url, "user@gmail.com", "password") # Valid Login  

# Add Event Tests
addEvent_test(url, "Test Title", "DLSU", "Test description test description. Test description!", "08-11-2023T16:00", "08-11-2023T17:00", "08-11-2023T13:00", "DLSU", "50", "test, tag", "200") # Expected values
addEvent_test(url, "The Sound of Music", "Howard Lindsay and Russel Crouse", "The Sound of Music is a musical with music by Richard Rodgers, lyrics by Oscar Hammerstein II, and a book by Howard Lindsay and Russel Crouse. It is based on the 1949 memoir of Maria von Trapp, The Story of the Trapp Family Singers.", "08-11-2023T16:00", "08-11-2023T17:00", "08-11-2023T13:00", "Theater", "50", "broadway", "200") # Sound of Music
addEvent_test(url, "32!!#$``234/1234/", "!!!@#1231324``` `23/", "12349-DASDJ203I09~231`/", "FDWF03240132/41`2~~", "FDWF03240132/41`2~~", "FDWF03240132/41`2~~", "R032RI-1", "DSAF`/.!", "R032RI-1", "DSAF`/.!") # Unexpected values
addEvent_test(url, "", "DLSU", "Test description test description. Test description!", "08-11-2023T16:00", "08-11-2023T17:00", "08-11-2023T13:00", "DLSU", 50, "test, tag", 200) # No Title
addEvent_test(url, "Test Title", "", "Test description test description. Test description!", "08-11-2023T16:00", "08-11-2023T17:00", "08-11-2023T13:00", "DLSU", 50, "test, tag", 200) # No creator
addEvent_test(url, "Test Title", "DLSU", "", "08-11-2023T16:00", "08-11-2023T17:00", "08-11-2023T13:00", "DLSU", 50, "test, tag", 200) # No Description
addEvent_test(url, "Test Title", "DLSU", "Test description test description. Test description!", "", "08-11-2023T17:00", "08-11-2023T13:00", "DLSU", 50, "test, tag", 200) # No Start Date
addEvent_test(url, "Test Title", "DLSU", "Test description test description. Test description!", "08-11-2023T16:00", "", "08-11-2023T13:00", "DLSU", 50, "test, tag", 200) # No End Date
addEvent_test(url, "Test Title", "DLSU", "Test description test description. Test description!", "08-11-2023T16:00", "08-11-2023T17:00", "", "DLSU", 50, "test, tag", 200) # No Expiry Date
addEvent_test(url, "Test Title", "DLSU", "Test description test description. Test description!", "08-11-2023T16:00", "08-11-2023T17:00", "08-11-2023T13:00", "", 50, "test, tag", 200) # No Venue
addEvent_test(url, "Test Title", "DLSU", "Test description test description. Test description!", "08-11-2023T16:00", "08-11-2023T17:00", "08-11-2023T13:00", "DLSU", 50, "test, tag", "") # No Max Attendees
addEvent_test(url, "Test Title", "DLSU", "Test description test description. Test description!", "08-11-2023T16:00", "08-11-2023T17:00", "08-11-2023T13:00", "DLSU", 50, "", 200) # No Tags
addEvent_test(url, "Test Title", "DLSU", "Test description test description. Test description!", "08-11-2023T16:00", "08-11-2023T17:00", "08-11-2023T13:00", "DLSU", "", "test, tag", 200) # No Price

# Edit Shows Tests
edit_test(url, creator="TEST") # Edit Creator
edit_test(url, title="Test TITLE") # Edit Title
edit_test(url, description="Test description test description. Test description!!") # Edit Description
edit_test(url, date="08-11-2023T16:01") # Edit Start Time
edit_test(url, endDate="08-11-2023T17:01") # Edit End Time
edit_test(url, expiryDate="08-11-2023T13:01") # Edit Expiry Time
edit_test(url, maxAttendees=200) # Edit Max Attendees
edit_test(url, tags="testTag") # Edit Tag
edit_test(url, maxAttendees="R032RI-1") # Edit to Inavlid Max Attendees
edit_test(url, price="DSAF'/'!") # Edit to Inavlid Price

# Delete
delete_test(url)

# Search
search_test(url, name="The Sound of Music") # Existing Name
search_test(url, name="hello") # Non-existing Show
search_test(url, name="") # Remove Name
search_test(url, tag="broadway") # Existing Tag
search_test(url, tag="") # Remove Tag
search_test(url, name="the") # Word From Existing Name
search_test(url, tag="broad") # Incomplete Tag