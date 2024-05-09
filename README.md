# Primeiro passo com Tailwind CSS 

Para começar, você precisa instalar o Tailwind CSS. Para isso, é necessário ter o Node.js instalado na sua máquina. Se você já possui o Node.js instalado, siga os passos abaixo:

1. No terminal, execute o seguinte comando:
   
   ```bash
   npm install tailwindcss

Exemplo no terminal:

    npm install tailwindcss
    added 112 packages in 8s
    29 packages are looking for funding

# Observação:
Não é recomendado criar seus arquivos HTML, CSS e JS na raiz do projeto. Por isso, você deve criar uma pasta chamada src.

# Segundo passo:
Execute o comando npx tailwindcss init no terminal do projeto para inicializar o Tailwind CSS.
    ```bash
        npx tailwindcss init
        Created Tailwind CSS config file: tailwind.config.js


# Próximo passo:
Você precisará instalar e configurar o Live Server. Após a instalação, vá para as configurações. Para configurar, clique em "configuração" e, em seguida, em "Extension Settings".

<img src="/src/img/print.png" alt="Live Server" width="400" height="400"/>
Em seguida, escreva "full" na barra de busca para encontrar a opção desejada e marque-a.

<img src="/src/img/print2.png" alt="Live Server" width="400" height="400"/>

Isso é feito para habilitar o auto reload do CSS.
    
#  Próximo passo:
Agora só falta baixar a extensão do Tailwind CSS.

<img src="/src/img/print3.png" alt="Live Server" width="400" height="400"/>

# ORGANIZAÇÃO DO PROJETO INICIAL E TAILWIND CONFIG
Agora devemos criar uma pasta build, aqui onde vai acontece nosso projeto ja podemos criar dentro dele o index.html

em seguida devemos ir no arq tailwind.config.js vamos configurar o content vamos coloca o caminho que vai ser obsevado.

bata coloca dentro do content './build/*.html'

ficara dessa maneira
<img src="/src/img/print4.png" alt="Live Server" width="400" height="400"/>

### agora devemos criar dentro do src um arq input.csse coloca dentro dele isso:

    @tailwind base;
    @tailwind components;
    @tailwind utilities; 

<img src="/src/img/print5.png" alt="Live Server" width="400" height="400"/>


vai aparece esse problema:

<img src="/src/img/print6.png" alt="Live Server" width="400" height="400"/>

isso nao é bem um problema do nosso sistema e sim da IDE
para resolve isso devemos ir nas config do visual stude code ir nos settings e procura por  Unknown At Rules e marca a opcao ignora 

<img src="/src/img/print7.png" alt="Live Server" width="400" height="400"/>

dessa forma: 

<img src="/src/img/print8.png" alt="Live Server" width="400" height="400"/>

agora resolvemos esse erro na pratica nao era um erro e sim um aviso

# Agora como vamos coloca para funcionar
na parte do terminal vamos escreve um comando que vamos usar executar nosso projeto, esse comando vai ter a informação sobre qual é a origem do CSS se olhamos para a documentação vamos olha que esse comando que devemos usar
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

vou fazer uma pequena alteracao da rota para que esta nesse comando irar ficar dessa forma:
    ``` bash
            npx tailwindcss -i ./src/input.css -o ./build/assets/css/app.css --watch

#





# Observação:
Não demos meche nos arq que entao dentro do app.css porque vai ser o css usando pelo o sistema devemos guarda esse comando pois vai ser usando sempre que for usa nossa aplicação eu fiz um arq.txt chamdo notas.txt onde guardei o comando para sempre que for utilizar so ir la e cola
# Agora para finalizar so falta ir la no nosso arquivo html que esta dentro do build e fazer o link do css
 so coloca o link no head do nosso html dessa forma:
</br>
    <link rel="stylesheet" href="assets/css/app.css">
</br>
<img src="/src/img/print9.png" alt="Live Server" width="400" height="400"/>


 
 



