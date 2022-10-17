CHALLENGE-7

# Start with: npm run dev

# MCR #
# Token login, POST with postman (body x-www urlencoded): http://localhost:3000/user/login
username:   sylvial
password:123456
example:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN5bHZpYWwiLCJ1c2VySWQiOjEsImlhdCI6MTY2NTkzMjE4Mn0.CBcEn-X-VGAeVJ1G4klMYXnlR-jKLa062gQeedHCOGU"
}

# Get list of users with GET postman : http://localhost:3000/users
username:   sylvial
password:123456
example:
    {
        "id": 1,
        "username": "sylvial",
        "password": "$2b$10$sQzKtmXiTCXxUYncOxHvG.d9mERD6mbdDkOv3Z7Utspfga4HAiAUC",
        "createdAt": "2022-10-16T13:45:57.204Z",
        "updatedAt": "2022-10-16T13:45:57.204Z"
    },

# MVC #
# Register with browser: http://localhost:3000/register

# Login with browser html: http://localhost:3000/login
*username: sylvial
password:123456
*username:playeruser
password:12345

# Get users with browser(json format) : http://localhost:3000/users
username: sylvial
password:123456

# Rooms:
'create room POST with postman : http://localhost:3000/rooms
example:
name : Room 1
'game history match(win-loss) GET with Postman: http://localhost:3000/history

dll:
'database:
      "username": "sylvial",
	  "password": "123456",
	  "database": "challenge-7",
	  "host": "localhost",
	  "dialect": "postgres"




