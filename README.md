# Janay Poll
This is a poll application written in nodejs with the express microframework. The documentation of this REST API generated by swegger and open API. This application is using mongoodb as database and mongoose as ODM.
<br>
If you want to run this application in your machine then you need to go through some installation process.
<hr>

### Prerequisite:
- Latest NodeJS installed in the machine.
- Npm and Yarn installed in the machine.
- A database in MongoDB Atlas with username and password to manage it.
<br>
### Installation:
<b>1. NodeJS and Package Manager</b><br>
If you do not have nodejs and yarn installed in your machine then you must download the nodejs from [there](https://nodejs.org/en/) and install it. 'Npm' comes with the nodejs. So now you need to install 'Yarn' globally. Run `npm install -g yarn`, it will install the yarn package manager globally.
<br>
<b>2. Git Clone</b><br>
Now clone the code from GitHub. Run the following command in terminal. The command is `git clone https://github.com/JanayAlam/janay-poll-rest.git`. This will create a folder with the project. Now run `cd janay-poll-rest`.
<br>
<b>3. Installing Dependencies</b><br>
Now you need to install the packages. Run `yarn` to install the packages.
<br>
<b>4. Configuring dotenv file</b><br>
Now to run the app you need to configure the '.env' file. You will not find the '.env' file. You need to run `cp deafult.env .env` command in terminal. Now open the project in code editor. Fill the '.env' file with the values of the database username, password, database name, port, host etc.
<br>
<b>5. Run</b><br>
Now you good to run the nodejs application. Run `yarn run dev` to run the appliaction in development mode or run `yarn start` to run the application in production mode. 
<hr>
Documentation of this REST API: `{YOUR_HOST_NAME}:{YOUR_HOST_PORT}/api/v1/api-docs/` for example, `localhost:8080/api/v1/api-docs/`
<b>