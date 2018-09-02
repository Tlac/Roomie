# Roomie
A mobile app to find new roommates!

## To install 

### Get the App
```
git clone https://github.com/Tlac/Roomie.git
cd Roommie
npm install
```

### Create a [Firebase](https://firebase.google.com/) account and add authentication, and get config variables 
1. Add a project
2. Go to the Authenticaiton item under Develop (on the left side of the page)
3. Go on the Sign-in method tab
4. Click on Email/Password and click Enable (top one)
5. Click save

### Get config variables 
1. Go to project overview
2. Click on "Add Firebase to your web app" button (the icon to the right of the android icon)
3. Copy the values from the config object and add it to the .env file

### Create a .env file in the root directory and add the following
```
API_KEY="YOUR API KEY "
AUTH_DOMAIN="YOUR AUTH DOMAIN"
DATABASE_URL="YOUR DATABASE URL"
PROJECT_ID="YOUR PROJECT ID"
STORAGE_BUCKET="YOUR STORAGE BUCKET"
MESSAGING_SENDER_ID="YOUR MESSAGING SENDER ID"
```

## To run
Run on an ios simulator
```
react-native run-ios
``` 
