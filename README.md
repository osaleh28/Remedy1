# Remedy
Remedy is an easy to use medication reminder application

Remedy

The meds you won't forget.

Live Demo

View the live site

Problem

Missing a dose, forgetting whether a medication was already taken, or losing track of a changing prescription schedule is a common, everyday problem — especially for anyone managing more than one medication. Most existing solutions are either overly complex clinical tools or simple reminder apps with no real record of what's actually been taken.

Value

Remedy gives someone a simple, low-friction way to keep track of their medications: what they're taking, how much, when, and whether today's dose has been taken. It removes the mental overhead of remembering medication details or relying on memory alone to know if a dose was missed.

Project Plan

The goal was to build a working medication-tracking app end to end — from account creation through daily use — using only HTML, CSS, and vanilla JavaScript, with browser localStorage standing in for a real backend/database.

The approach was incremental: start with a static homepage matching a reference design, then build out account creation (signup) and login, then the core dashboard functionality (adding, editing, removing, and marking medications as taken), styling each piece as it was built rather than all at once at the end.

Features

Complete:

Homepage with logo, tagline, and navigation to Sign Up / Log In Sign up form with client-side validation (required fields, valid email format, matching passwords) Login form that verifies credentials against the signed-up account Personalized dashboard greeting ("Hello, [First Name]!") Add a medication (name, dose, time, frequency) Edit an existing medication Remove a medication Mark a medication as taken (with a visual checked/strikethrough state) Log out, returning to the homepage All data persists across page reloads via localStorage

Planned next:

Daily reset of the "taken" status (currently it stays checked indefinitely rather than resetting each day) Real backend/database instead of localStorage, so accounts aren't tied to a single browser Actual reminder notifications at scheduled medication times Password hashing / real authentication security (current setup stores plain text locally, which is fine for a learning project but not production-safe) Technologies Used HTML5 CSS3 (Flexbox for layout) JavaScript (vanilla, no frameworks) Browser localStorage for data persistence AI Tools Used Claude — used throughout development for guidance on HTML/CSS structure, JavaScript logic (event listeners, localStorage, array manipulation), and debugging. Running the Project Clone or download this repository Open index.html in any modern web browser (no build step or server required) Sign up for a test account, then log in to reach the dashboard Add, edit, remove, and check off medications from the dashboard

Future Features

Allow the patient to take pictures of his medication bottles so that the application can read the label and fill in the information automatically
Alert the patient that refills are due and also send a message to the patient's doctor
I would eventually like to create a full chart for the patient, which includes date of birth, height, weight, BMI, medical history (Hypertension, Diabetes, High Cholesterol,) primay care doctor with address and phone number, other specialists with address and phone number
