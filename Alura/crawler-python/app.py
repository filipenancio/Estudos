import requests
from bs4 import BeautifulSoup
from datetime import datetime

year = int(datetime.now().strftime('%Y'))

print(year)

class Act:
    def __init__(self, name, maxValue):
        self.name = name
        self.maxValue = maxValue

    def toString(self):
        return f"{self.name} : {self.maxValue}" 
    
setAct  = ['ggbr4']

for act in setAct:

    url = 'https://www.dadosdemercado.com.br/acoes/'+act+'/dividendos'

    response = requests.get(url)

    htmlContent = response.text

    soup  = BeautifulSoup(htmlContent, 'html.parser')

    title = soup.title.text

    soma = 0.
    for child in soup.find_all('table')[1].children:
        for td in child:
            try:
                arr = td.text.replace('\u202f',' ').replace('%', ' %').split('\n')
                arr.pop(0)
                arr.pop(4)
                y = int(arr[0])
                if y > (year-5):
                    #soma += float(arr[1])
                    print(arr)
            except:
                continue
           


    

