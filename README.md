
# Book-Store

This project is a MERN stack-based Bookstore Web Application that allows users to browse, purchase, and manage books. The application includes user authentication, book management, and a dynamic frontend built with React.



## Project Objectives
The primary goals of this project are to:
  1. Implement Authentication: Secure user data using authentication.
  
   2. Fetch & Display Books: Use MongoDB to store book data and display it dynamically.
   3. User Registration & Login: Enable users to sign up and access protected content.


   4. Contact Form: Allow users to submit messages via a contact form.
   
   5. Deploy on Render: Ensure smooth deployment with React Router handling.
## Features & Functionality

1. User Authentication
    
    Objective: Implement authentication to restrict access to certain routes.
Implementation:\
On signup, Users must be authenticated to access certain pages, such as /course.
Unauthorized users are redirected to the signup page.

2. Fetching Books from MongoDB

    Objective: Retrieve book data dynamically from the backend.
Query (Frontend - React & Axios):

     useEffect(() => {
      const getBook = async() => {
    try{
      const res = await axios.get("https://bookstoreapp-backend-azv9.onrender.com/book");
      setBook(res.data)
    } catch (error) {
      console.log(error);
      }
    } getBook();
    }, [])


3.User Registration & Login

Objective: Secure user authentication using JWT tokens.

Query (Backend - Express & MongoDB):


    app.post('/user/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
    });



## 🔗 Live Demo:
Frontend: https://bookstoreapp-frontend-aqn0.onrender.com

Backend: https://bookstoreapp-backend-azv9.onrender.com



## Installation

 1. Clone the Repository

 
```bash
  git clone https://github.com/JENISH244/bookstoreapp.git
  cd my-project
```

2. Install Dependencies
Frontend: 
```bash
    cd frontend
    npm install
    npm run dev
```
Backend: 
```bash
    cd backend
    npm install
    npm start
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`Mongodb`

