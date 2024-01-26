References : 
[restack documentation](https://www.restack.io/docs/metabase-knowledge-metabase-windows-installation)

[official documentation on building ](https://www.metabase.com/docs/latest/developers-guide/build)

[official documentation to develop using vscode dev container](https://www.metabase.com/docs/latest/developers-guide/visual-studio-code)


## Prerequisites to install 
1. [Clojure (https://clojure.org)](https://clojure.org/guides/getting_started) - install the latest release by following the guide depending on your OS
    
2. [Java Development Kit JDK (https://adoptopenjdk.net/releases.html)](https://adoptopenjdk.net/releases.html) - you need to install JDK 11 ([more info on Java versions](https://www.metabase.com/docs/latest/installation-and-operation/running-the-metabase-jar-file))
    
3. [Node.js (http://nodejs.org/)](http://nodejs.org/) - latest LTS release
    
4. [Yarn package manager for Node.js](https://yarnpkg.com/) - latest release of version 1.x - you can install it in any OS by running:

### Command to install everything everything except on ubuntu / WSL :

```bash
sudo apt install openjdk-11-jdk nodejs && sudo npm install --global yarn
```

### install Clojure on Ubuntu / WSL

```bash
curl -L -O https://github.com/clojure/brew-install/releases/latest/download/linux-install.sh
chmod +x linux-install.sh
sudo ./linux-install.sh
```

## Run the backend
```bash
clojure -M:run
```
## Run the frontend

install dependency :
```bash
yarn
```

Run it : 
```bash
   yarn build-hot
```

and it will open on localhost:3000