# freedom-netshoes-front-end-recruitment
Este sistema foi desenvolvido em Aurelia CLI Framework.
Para que a instalação seja feita é necessário ter o NodeJs 6+ instalado na máquina.
Uma vez instalado, é necessário inserior a seguinte linha de comando   npm install aurelia-cli -g  para que as dependências do Aurelia Cli sejam instaladas.

Após a instalação das dependências do Aurelia, vamos instalar as dependências do NPM inserindo a seguinte linha de comando (npm install npm@latest -g) no prompt de comando, para que os pacotes dos módulos necessários para o sistema rodar sejam instalados. Para isso, salve os arquivos baixados do repositório do git (https://github.com/xamarc/freedom-netshoes-front-end-recruitment) em uma pasta local, abra nesta mesma pasta o prompt de comando e execute a seguinte linha de comando (npm install).

Assim que a instalação for concluída, execute a seguinte linha de comando   au run. Pronto, o sistema será carregado e para acessá-lo será preciso colocar o seguinte endereço no navegador (localhost:9000).

Para parar o processo todo é preciso teclar Ctrl + C com o prompt de comando aberto. Escolha S para confirmar o interrompimento do sistema.

Está é a versão de desenvolvedor do sistema.
Para que seja gerada uma versão de produção, é necessário inserir no prompt a linha de comando   au build --env prod

Basta copiar para o servidor os seguintes arquivos e pastas:

index.html
favicon.ico
assets/
scripts/
public/data/products.json


 
