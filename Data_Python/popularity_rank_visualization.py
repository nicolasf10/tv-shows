from bokeh.plotting import figure, show
import math
import json

with open("./tweets_by_show.json", "r") as json_file:
    data = json.load(json_file)


favorites = {}

for key, value in data.items():
    if len(value) >= 1:
        favorites[key] = 0
        for tweet in value:
            favorites[key] += tweet['favorites']

favorites_show_list = list(favorites)


def order(dictkey):
    return favorites[dictkey]


favorites_show_list.sort(key=order, reverse=True)

favorite_show_rank = []

favorites_show_list = favorites_show_list[1:51]

for show_name in favorites_show_list:
    print(show_name)
    favorite_show_rank.append(favorites[show_name])

favorites_show_list.reverse()
favorite_show_rank.reverse()

print(favorite_show_rank)
# print(favorites_show_list)

f = figure(title="Show Popularity by Tweet",
           x_axis_label="Show", y_axis_label="Favorited Tweets")

f.left[0].formatter.use_scientific = False

for i in range(len(favorite_show_rank)):
    print(favorites_show_list[i])
    f.vbar(i+1, .95, favorite_show_rank[i], 0, color="#55BDCA")
    f.text(i+1.5, 0, [favorites_show_list[i]], math.pi /
           2, text_font_size='7pt', color="#022449")

print("Plot complete")

show(f)
