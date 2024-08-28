import requests
from bs4 import BeautifulSoup
from datetime import datetime

year = datetime.now().strftime('%Y')

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

    rows = []
    for child in soup.find_all('table')[1].children:
        row = []
        for td in child:
            try:
                row.append(td.text.replace('\n', ''))
            except:
                continue
        if len(row) > 0:
            rows.append(row)

    #df = pd.DataFrame(rows[1:], columns=rows[0])

        


    print(rows)

