import requests
from bs4 import BeautifulSoup

shows = []

URLS = ["https://www.imdb.com/search/title/?title_type=tv_series&view=simple",
        "https://www.imdb.com/search/title/?title_type=tv_series&view=simple&start=51&ref_=adv_nxt",
        "https://www.imdb.com/search/title/?title_type=tv_series&view=simple&start=101&ref_=adv_nxt",
        "https://www.imdb.com/search/title/?title_type=tv_series&view=simple&start=151&ref_=adv_nxt"]


for url in URLS:
    r = requests.get(url, headers={"Accept-Language": "en-US,en;q=0.5"})

    soup = BeautifulSoup(r.content, 'html5lib')

    table = soup.find('div', attrs={'class': 'lister-list'})

    for row in table.findAll('div', attrs={'class': 'col-title'}):
        show = row.find('a').text
        print(show)
        shows.append(show)

with open("tv_shows.txt", "w") as file:
    for show in shows:
        file.write(show + "\n")
