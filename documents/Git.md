# GIT 

O Git é uma ferramenta para versionamento de código que segue os pontos de "commit", criados pelo usuário. Em outras palavras o Git cria e mantém o histórico dos arquivos dispostos dentro de um diretório "rastreado" pela ferramenta, de acordo com as indicações do usuário.

Todos os arquivos dentro de um diretório rastreado serão versionados, a não ser que seja informada um regra dentro do arquivo [.gitignore](gitignore.io), para que o arquivo seja ignorado pela ferramenta.

<br>

### Lista de comandos mais utilizados na utilização do Git

| Comando  | Descrição |
| :------- | :-------- |
| **git init**      | Configura o diretório atual para ser rastreado pelo Git |
| **git remote**    | Administra repositório remoto |
| **git clone**     | Clona um repositório remoto, disponível na web, trazendo o código para a máquina local |
| **git status**    | Verifica a situação atual do repositório, trazendo a lista de todos os arquivos incluídos, modificados e excluídos |
| **git add**       | Marca as alterações desejadas para o próximo commit <br> Para desmarcar [_git restore --staged_] |
| **git commit**    | Salva as alterações marcadas, criando um novo ponto no histórico de versões |
| **git push**      | Envia as alterações locais para o repositório remoto |
| **git pull**      | Busca as alterações do repositório remoto, atualizando os arquivos locais |
| **git branch**    | Cria, controla e administra as ramificações |
| **git switch**    | Troca de ramificação, basta indicar um [nomeBranch] <br> Se utilizar a tag [-c] [nomeBranch], é criada a ramificação destino antes de trocar |
| **git restore**   | Utilizado para desfazer alterações |
| **git checkout**  | Realiza as funções de _switch_ e _restore_ (Comando antigo)
| **git diff**      | Mostra a diferença entre duas ramificações, duas versões
| **git mergetool** | Inicia ferramenta auxiliar para a solução de conflitos entre versões
| **git log**       | Traz o histórico de commits <br> Utilizando tag [--online], a lista de commits é resumida <br> Utilizando tag [-p], mostra as alterações registradas em cada commit <br> Utilizando tag [--graph], lista commits junto do gráfico de ramificação |
| **git show**      | Mostra commit e as diferenças que foram registradas |
| **git blame**     | Aponta o autor de cada alteração e o commit
| **git revert**    | Revert as alterações realizadas por um commit |
| **git reset**     | Recupera um commit <br> Utilizando flag [--hard], apaga o commit da linha do tempo <br> Obs.: Ideal usar apenas em modo local |
---
<br>
<br>


### Criando versões da aplicação (Tags / Releases)
| Comando       | Descrição |
| :------       | :-------- |
| **git tag**   | Gerencia ponteiro, tag, para identificar um commit especifico (Ex.: v0.1.0) |
---
