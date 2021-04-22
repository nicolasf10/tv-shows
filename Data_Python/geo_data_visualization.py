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


with open("./tweets_by_show.json", "r") as json_file:
    data = json.load(json_file)

latitudes = []
longitudes = []

for key, value in data.items():
    print(f"Gathering location for {key}")
    for tweet in value:
        coordinates = get_coordinates(tweet['location'])
        if coordinates:
            latitudes.append(coordinates[0])
            longitudes.append(coordinates[1])

print(latitudes)
print(longitudes)

output_file("gmap.html")

map_options = GMapOptions(lat=10, lng=0,
                          map_type="roadmap", zoom=2)

p = gmap("AIzaSyBAP4s8W-wUIrx0oT05lxJg08BXWtXQVTs",
         map_options, title="Geo Data on Tweets About TV Shows", width=1000, height=600)

source = ColumnDataSource(
    data=dict(lat=latitudes,
              lon=longitudes)
)

p.circle(x="lon", y="lat", size=5, fill_color="blue",
         fill_alpha=0.8, source=source)

show(p)
