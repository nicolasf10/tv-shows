import requests
from requests_oauthlib import OAuth1
import json

BASE_URL = "https://api.twitter.com/1.1/"

# Twitter Keys
api_key = 'HsDmb1ZLwPR9GePpaZE5yeor1'
api_secret = 'DIhiTXhltTVnvTQxJGYJLWzUZHSswm9gqI0tocFl52UgjzgNtx'
access_token_key = '990585719746977800-qHoX23eUJTZ9jaThLGIxuRNwUXoNdhC'
access_token_secret = 'IwV5m3nRU1fcVKOB4jNuczdaeXYdVzLIIYsaeh4Ci9VNq'

auth = OAuth1(api_key, api_secret, access_token_key, access_token_secret)

shows = []

data = {}

with open("./tv_shows.txt", "r") as file:
    for line in file:
        line = line.strip("\n")
        shows.append(line)


for show in shows:
    print(f"Gathering Tweets from the show {show}...")
    show_tweets = []
    p = {"q": show, "count": 50, "result_type": "popular"}
    r = requests.get(BASE_URL+"search/tweets.json", params=p, auth=auth)

    json_string = json.dumps(r.json())
    result = json.loads(json_string)

    if 'statuses' in result:
        for item in result['statuses']:
            single_tweet = {
                'created_at': item['created_at'],
                'id': item['id'],
                'text': item['text'],
                'favorites': item['favorite_count'],
                'user_name': item['user']['name'],
                'user_screen_name': item['user']['screen_name'],
                'location': item['user']['location']
            }
            show_tweets.append(single_tweet)

        data[show] = show_tweets


with open("tweets_by_show.json", "w") as json_file:
    json.dump(data, json_file)
