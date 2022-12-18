
# Hey, Welcome to Repo of Public Health Record Management System! 👋


## Run Locally

Clone the project

```bash
  git clone https://github.com/PICT-PBL-6-2021-22/public_health_record_management_system
```

Go to the project directory

```bash
  cd public_health_record_management_system
```

Install dependencies in server

```bash
  npm install
```
Go to the client folder

```bash
  cd client
```
Install dependencies in client

```bash
  npm install
```

Start the client react project

```bash
  npm run start
```

Come back to server

```bash
  cd ..
```
Start Server using node or nodemon

```bash
  node app.js 
  or nodemon app.js
```


Please Use Tailwind CSS for styling components
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE`

`SECRET_KEY`

DATABASE contains the dbURI of MongoDB connections and SECRET_KEY contains Secret key for signing and verifying Jason Web Tokens (JWT)
.env file:
REACT_APP_TOM_TOM_API_KEY= uvmUKCZnG4eYvFKLA32mc4frEG1jhipt
SKIP_PREFLIGHT_CHECK=true
config.env:
DATABASE= "mongodb+srv://avinash:poorna@cluster0.9gj568v.mongodb.net/hospitalfinal?retryWrites=true&w=majority"
SECRET_KEY= "poorna"
