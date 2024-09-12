# Regex 
Expressões regulares servem para realizar buscas de forma mais eficiente, podendo buscar de forma literal e por padrões.

## Regex no Terminal (grep)

No Linux
> grep regex caminho-arquivo.txt
> sed 's/regex/novo-texto/g' caminho-arquivo.txt
> awk

No Windows
> findstr /r "regex" arquivo.txt
> Get-Content arquivo.txt | ForEach-Object { if ($_ -match "regex") {$_} }

Sites:
- (Regex101)[https://regex101.com/]

