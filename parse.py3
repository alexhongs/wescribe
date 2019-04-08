import requests
from bs4 import BeautifulSoup
import re

print(1)

url = "https://www.amazon.com/amazonprime?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0&primeCampaignId=primeMobileSignupWhite&renderingType=mobile&showLandingPage=1"

url = "http://www.alexhongs.com"
page = requests.get(url)
#print(page.status_code)
#print(page.text)

soup = BeautifulSoup(page.text, 'html.parser')
pattern = "baxter"


#This simply gets all divs in order. Redundant parent/child class information
for tag in soup.find_all(re.compile("div")):
	print(tag.class)
	print("\n\n\n\n") 

#Need to figure out extracting unique information.
	
#texts = [e.get_text() for e in divs]
#pattern = "/month"
#count = 0
#for t in texts:
#	if pattern in t:
		
#		print("\n",count,t)
#		count+=1

#print("\n\nWeb   Content\n\n"+soup.prettify())


    
