# RWA-Project
*Collaboration project made for college course (web app development) at SIT ZD.*

## About the project
Merlin is a system used as a virtual environment for higher education students in Croatia.
The goal of this task is to improve the system structurally and visually but keeping it's integrity.

## Goals for the project
Here is the list of some of our main goals:
- Enhance user experience and interface for the system
- Create a stable and well thought database, backend and frontend
- Have a basic understanding and implementation of web-app security
- Use tools and environments such as: NestJS, Angular, MySQL, Postman and Apidog
- Implement some of the features from Studomat[^1] to the main system



[^1]: Studomat is just a module for ISVU, *more information about Studomat can be found here:* [Studomat Info - HR ver.](https://isvu.ffzg.unizg.hr/sto-je-studomat/)

## [Database structure](database.md)

## Installation
1. Clone the repository
```
git clone https://github.com/RWAsolutions/RWA-Project.git
```
### Linux
#### Automatic
2. Run **install.sh** for dependencies
```
sh ./install.sh
```
3. Run **run.sh** to start app locally
```
sh ./run.sh
```
#### Manual
2. Setting up the backend
```
cd ./backend; npm install
nest start --watch
```
3. Setting up the frontend
```
cd ./frontend; npm install
ng serve --watch
```
### Windows
2. Run **install.bat** for dependencies **or** double click **install.bat**
```
Start-Process -FilePath "./install.bat"
```

3. Run **run.bat** to start app locally **or** double click **run.bat**
```
Start-Process -FilePath "./run.bat"
```


>In case of missing database, create one locally with mySQL using [this](dump-mock.sql) dump file.
