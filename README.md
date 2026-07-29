# Remedy
Remedy is an easy to use medication reminder application

Remedy:  The meds you won't forget.

Live Demo
https://osaleh28.github.io/Remedy1/

Problem: 
- As people grow busier and older, they often forget what medications to take and when to take them.  Missing a dose, forgetting whether a medication was already taken, or losing track of a changing prescription schedule is a common, everyday problem — especially for anyone managing more than one medication. Most existing solutions are either overly complex clinical tools or simple reminder apps with no real record of what's actually been taken.

Value: 
- Remedy gives someone a simple way to keep track of their medications: what they're taking, how much, when, and whether today's dose has been taken. It removes the mental work of remembering medication details or relying on memory alone to know if a dose was missed.

Project Plan :
- The goal was to build a working medication-tracking app end to end — from account creation through daily use — using only HTML, CSS, and vanilla JavaScript, with browser localStorage standing in for a real backend/database.
The approach started with a static homepage matching a reference design, then came the account creation (signup) and login page, and then the core dashboard functionality which enables the user to add, edit, remove, and mark medications as taken, along with what time, dose, and frequency they are to be taken at. Each piece was built one at a time, rather than alla t once.

Features
- Homepage with logo, tagline, and navigation to Sign Up / Log In Sign up form with client-side validation (required fields, valid email format, matching passwords) 
- Login form that verifies credentials against the signed-up account
-  Personalized dashboard greeting ("Hello, [First Name]!")
-  Add a medication (name, dose, time, frequency)
-  Edit an existing medication
-  Remove a medication
-  Mark a medication as taken (with a visual checked/strikethrough state)
-  Log out, returning to the homepage 
-  All data persists across page reloads via localStorage

Planned next:

- Real backend/database instead of localStorage, so accounts aren't tied to a single browser
-  Actual reminder notifications at scheduled medication times
- Password hashing / real authentication security (current setup stores plain text locally)
- Allow the patient to take pictures of his medication bottles so that the application can read the label and fill in the information automatically
- Alert the patient that refills are due and also send a message to the patient's doctor
- I would eventually like to create a full chart for the patient, which includes date of birth, height, weight, BMI, medical history (Hypertension, Diabetes, High Cholesterol,) primay care doctor with address and phone number, other specialists with address and phone number
- Create a mobile application

Technologies Used 
- HTML5 C
- CSS3 (Flexbox for layout)
- JavaScript (vanilla, no frameworks)

Browser 
- localStorage for data persistence

AI Tools Used 
- Claude — used throughout development for guidance on HTML/CSS structure, JavaScript logic (event listeners, localStorage, array manipulation), and debugging.


Complete
- Homepage with logo, tagline, and Sign Up / Log In buttons
- Sign up form with client-side validation (required fields, valid email format, matching passwords)
- Login form that verifies credentials against the signed-up account, with an "incorrect email or password" error state
- Personalized dashboard greeting ("Hello, [First Name]!")
- Add a medication (name, dose, time, frequency)
- Edit an existing medication (form pre-fills with current values)
- Remove a medication from the list
- Mark a medication as taken via a checkbox labeled "Did you take your medication?", with a strikethrough visual state
- Log out, returning to the homepage
- All data persists across page reloads via localStorage
- Deployed live via GitHub Pages

Running the Project 
- Clone or download this repository
- Open index.html in any modern web browser (no build step or server required)
- Sign up for a test account, then log in to reach the dashboard
- Add, edit, remove, and check off medications from the dashboard



