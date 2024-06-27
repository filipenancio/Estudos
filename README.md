# _Estudos - S.O. Windows_

Repositório para estudos.

## Ambiente Windows
*Instalar ferramenta `Git`

*Instalar `Oh My Posh`, costumização terminal Windows
```shell
link: https://ohmyposh.dev/docs/installation/prompt

winget install JanDeDobbeLeer.OhMyPosh -s winget
$env:Path += ";C:\Users\user\AppData\Local\Programs\oh-my-posh\bin"

notepad $PROFILE
oh-my-posh init pwsh --config 'C:\Users\filipe.venancio\Documents\WindowsPowerShell\huvix.omp.json' | Invoke-Expression

New-Item -Path $PROFILE -Type File -Force

oh-my-posh font install --user
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

*Instalar IDE (VSCode, Eclipse, ou outra)

*Instalar linguagem (Python, Node, Java, ou outra)

*Instalar gerenciador de ferramentas/pacotes/libs (NPM, JDKMan, Maven, Gradle, Chocolatey, ou outra)

