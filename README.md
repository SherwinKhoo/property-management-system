sei_35_p4_property_management_system
Software Engineering Immersive - Project 4 - Property Management System

Project: Build a simple hotel property management system.

A property management system facilitates a hotel's reservation management and administrative tasks.

Author
Sherwin Khoo

Reviewers
Desmond Lim | Ernest Mui | Lim Qizhen

Technologies Used

React.js
Express.js
MongoDB
CSS
HTML

Goals

The application should be able to create, update, check-in and check-out a reservation.

Timeline

Ensure that API is working.
Create components.
Ensure that the frontend components are able to call / connect with the APIs.

Motivation

Reinforce understanding of React and Express.
Being from hospitality, it would be interesting to recreate some of the features of PMSes used in the past.

Approach Taken

Try to recall how the better PMSes on the market function.
Give the application a '90s retro' feel to mimic how most large-scale commercial PMSes actually look.
Limit states to within individual components as the application will be used by multiple people at once and majority of the data is time-sensitive.
Automatically populate fields when there is a need to make modifications to a reservation.
Include two navigation bars, one on the top to navigate between 'department functions' such as reservations / housekeeping / front office / finance.
Remember to include BrowserRouter in index.js.
Use an index.js file to handle pathing for images.
Use React.lazy() to import page pathing.Res
Add delete function to fulfill CRUD requirements; industry practise is to mark reservations as 'cancelled' rather than to delete.

Lessons Learnt

It is quite difficult to change the data structure once a certain threshold has been passed.

Potential Improvements

Add payments.

Fair Use

This project is for purely academic purposes.
This project will not hinder the copyright owner's ability to sell the related product.

MIT License - Copyright (c) 2022 Sherwin Khoo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.