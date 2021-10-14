import requests
import json
import moment

r = requests.post("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fd500b81fcd74cb5b304b00539a8a6f0", data={})
data = json.loads(r.text)
array = []
output = []

for i in data['list']:
    if not int(i['dt_txt'].split('-')[2].split(' ')[0]) % 2:
        i['dt_txt'] = "{} : {}ªC".format(moment.date(i['dt_txt']).format("ddd, D MMM YYYY"), i['wind']['speed'])
        array.append(i)
        output.append(i['dt_txt'])

print(json.dumps(array, indent=2))
print(output)