Setup your environment in a flexible way. (For *Ubuntu && Debian*)

We will setup the environment using the *Node Version Manager* which is a nice tools which allows you
to easily install and manage multiple version of *node* on your computer.

A - Installation of *nvm* github ref: https://github.com/creationix/nvm
1 - Make  one of the following command on a you terminal 

*curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash*

if the command above is not working meaning you don't have curl in your machine try

*wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash*

2 - Once the installation is complete run the following command *source ~/.bashrc*

3 - Now do *nvm --version* and you should current install version if you receive an error like _command now found_
go to *https://github.com/creationix/nvm* to try the other different options but before try to restart your computer 
and see if this solves the problem


B - Install of *node and npm*

With *nvm* you can install multiple version of run *nvm ls-remote* to see all the different node version you could install
in your computer. Nextjs has been upgrade to be compatible with the latest version of node we will  use node 8.4.0.

To install node 8.4.0 do: *nvm install v8.4.0* and let nvm do the rest. If you plan to go  develop *react-native* mobile application 
you should also install the 7.9.0 version. Because the last time I chech *react-native* was only compatible with this package manager coming with this version
so do also *nvm install v7.9.0*

Before you continue some useful command
*nvm ls* allows you to see the different node version which are installed in your computer. You will see a *->* showing the current active version
*nvm use vX.X.X* allows you to use a specific version of node *in the current shell* ex: nvm use 8.4.0 will switch me to the 8.4.0 nodeversion


C - Before you install alumnus make sur you have *git* install. Just try to run *git* if it is there you will receive a feedback, if it is not there you will receive a message saying *command not found*. To install git on ubuntu just do *udo apt-get update* et ensuite *sudo apt-get install git.*


D - Alumnus
We will clone the alumnus repository inside a dev directory in the home folder

1 - run *cd* on your linux terminal so you can go back to your home folder
2 - run *mkdir dev* to create a dev directory
3 - run *cd dev* so you can move inside this dev directory
4 - run *git clone https://github.com/efleurine/alumnus.git* so you can clone the alumnuns directory. You will have a directory called alumnus inside your dev folder
5 - run *cd alumnus* so you can move inside the newly downloaded git reposity
6 - Make sure the current node version is *8.4.0* by running *node --version*. If it is not the 8.4.0  just run *nvm use 8.4.0* to switch to 8.4.0. 
Each  time you want to work on the alumnus project make sure before that you are using at least 8.4.0
7 - run *npm install* to install the different module for the project.
8 - open the folder in your favorite editor _we would recommand VS Code_ and check the readme to see what to do next.

Thanks

P.S. Quelques définitions

*JavaScript* is the language
*node* is an engine like *un transformateur* qui prend ton code *JavaScript* et qui en fait du code qui peut être exécuté par l'ordinateur
*npm* is package manager c'est-à-dire un outil qui permet de créer, gérer, distribuer des library. Quand je dis *npm install react*  je demande à npm d'installer react ainsi que les autre modules qui lui sont associés. Vous allez voir un *node_modules* folder qui contient tous les library.

*React* est défini par Facebook comme *React - A JavaScript library for building user interfaces -* c'est un library qui te permet de créer les interfaces de ton application web. la partie client

*React-Native* c'est tout simplement la version mobile de React. _React_ pour le _web_ et _React Native_ pour les smartphone _Android iOS Window Phone_ Ce qui est 
bien avec react-native c'est que l'application bien que écrite en JavaScript aura le même look, la même ressamblance d'une application qui aurait été écrite en Java sur Android.

*Alumnus* c'est nous :-)