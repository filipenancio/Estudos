import requests
from bs4 import BeautifulSoup
from datetime import datetime

year = int(datetime.now().strftime('%Y'))
month = int(datetime.now().strftime('%m'))
time = 4 + (month/12)
expect = 0.06

print(year)

class Act:
    def __init__(self, name, maxValue):
        self.name = name
        self.maxValue = maxValue

    def toString(self):
        return f"{self.name} : {self.maxValue}" 
    
#setAct  = ['bbdc3', 'bbdc4', 'fiqe3', 'ggbr4', 'intb3', 'klbn11', 'sapr11', 'taee11', 'wege3']
setAct = ['bbse3', 'vivt3', 'egie3', 'itub3']

for act in setAct:

    url = 'https://www.dadosdemercado.com.br/acoes/'+act+'/dividendos'

    response = requests.get(url)

    htmlContent = response.text

    soup  = BeautifulSoup(htmlContent, 'html.parser')

    title = soup.title.text

    soma = 0.
    valor = 0.

    for child in soup.find_all('table')[1].children:
        for td in child:
            try:
                arr = td.text.replace('\u202f',' ').replace('%', ' %').split('\n')
                arr.pop(0)
                arr.pop(4)
                y = int(arr[0])
                if y > (year-time):
                    soma += float(arr[1].replace(',','.'))
                    if y==year: valor = float(arr[2][3:].replace(',','.'))
                    print(arr)
            except:
                continue
    
    print(act + ' - R$ ' + str(valor) + ' >> R$ %.2f' %(soma/time/expect))
           


    

