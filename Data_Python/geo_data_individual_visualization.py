import json
from geopy.geocoders import Nominatim
from bokeh.io import output_file, show
from bokeh.models import ColumnDataSource, GMapOptions
from bokeh.plotting import gmap


def get_coordinates(location):
    if location == "":
        return None
    try:
        address = location
        geolocator = Nominatim(user_agent="Nicolas Fuchs")
        coordinate = geolocator.geocode(address)
        return(coordinate.latitude, coordinate.longitude)
    except:
        return None


latitudes = {}
longitudes = {}

colors = ["blue", "red", "yellow", "green", "brown",
          "orange", "purple", "black", "pink", "grey"]

# Gathering the 10 most popular shows
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

most_popular = favorites_show_list[:9]

for s in most_popular:
    print(f"Gathering location for {s}")
    for tweet in data[s]:
        coordinates = get_coordinates(tweet['location'])
        if coordinates:
            if s in latitudes:
                latitudes[s].append(coordinates[0])
                longitudes[s].append(coordinates[1])
            else:
                latitudes[s] = [coordinates[0]]
                longitudes[s] = [coordinates[1]]

print(latitudes)
print(longitudes)

output_file("gmap2.html")

map_options = GMapOptions(lat=10, lng=0,
                          map_type="roadmap", zoom=2)

p = gmap("AIzaSyBAP4s8W-wUIrx0oT05lxJg08BXWtXQVTs",
         map_options, title="Geo Data on Tweets About Individual TV Shows", width=1000, height=600)

for i in range(len(most_popular)):
    source = ColumnDataSource(
        data=dict(lat=latitudes[most_popular[i]],
                  lon=longitudes[most_popular[i]])
    )
    p.circle(x="lon", y="lat", size=5, fill_color=colors[i], line_color=None,
             fill_alpha=0.8, source=source)

show(p)
