<div style="list-style: none; display: flex; flex-direction: column; gap: 10px;  justify-content: center; align-items: center">
<img width="50%" src="./images/logo.svg"/>
</div>
<h2 >📝 Table of Contents</h2>

<div style="display: flex; flex-direction: column;">
    <a style="display: block;" href="#description" style="display: block;">📑 Description</a>
    <a href="#live-demo" style="display: block;">🌍 Live demo</a>
    <a href="#features" style="display: block;">⭐ Features</a>
    <a href="#technologies" style="display: block;"> ⛏️ Built-with</a>
    <a href="#snapshots" style="display: block;">📹 Snapshots(Demo Video)</a>
    <a href="#future" style="display: block;">⏭️️ Future work</a>
    <a href="#ack" style="display: block;">🤝 Acknowledgment</a>
</div>
<hr />

<secion id="description">
<h2>📑 Description</h2>
<ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
  <li>  
   👉  <b>The Wild Oasis</b> is a small boutique hotel with 8
    luxurious wooden cabins
 </li>

   <li>  
   👉  They need a custom-built application to manage
everything about the hotel: <b>bookings, cabins
and guests</b>
 </li>

<li>
👉 This is the internal application used inside the
hotel to check in guests as they arrive

 </li>
</ul>
</secion>
<hr>

<section id="live-demo">
  <h2>🌍 Live demo: <a target="_blank" href="https://the-wild-oasis-nine-ruby.vercel.app/">The Wild Oasis</a></h2>
</section>

<section id="features">
<h2>⭐ Features</h2>

<ul style="list-style: none;">
 <li>
    <h3>AUTHENTICATION</h3>
    <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
        <li>  
        👉  Users of the app are hotel employees. They need to be logged into the application to perform tasks
        </li>
        <li>  
        👉  New users can only be signed up inside the applications <b>(to guarantee that only actual hotel employees can get)</b>
        </li>
        <li>
        👉 Users should be able to upload an avatar, and change their name and password
        </li>
    </ul>

 </li>

 <li>
    <h3>CABINS</h3>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
        <li>  
        👉  App needs a table view with all cabins, showing the cabin photo, name, capacity, price, and current discount
        </li>
        <li>  
        👉  Users should be able to update or delete a cabin, and to create new cabins (including uploading a photo)</b>
        </li>
    </ul>
 </li>

  <li>
    <h3>BOOKINGS</h3>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
        <li>  
        👉 App needs a table view with all bookings, showing arrival and departure dates, status, and paid amount, as well as cabin and guest data
        </li>
        <li>  
        👉 The booking status can be <b>unconfirmed</b> (booked but not yet checked in), <b>checked in</b>, or <b>checked out</b>. The table should be filterable by this important status
        </li>
        <li>
            👉 Other booking data includes: <b>number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price</b>
        </li>
    </ul>
 </li>
 <li>
    <h3>CHECK IN / OUT</h3>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
        <li>  
        👉 Users should be able to delete, check in, or check out a booking as the guest arrives (no editing necessary for now)
        </li>
        <li>  
        👉 Bookings may not have been paid yet on guest arrival. Therefore, on check in, users need to accept payment (outside the app), and then confirm that payment has been received (inside the app)
        </li>
        <li>
        👉 On check in, the guest should have the ability to add breakfast for the entire stay, if they hadn’t already
        </li>
    </ul>
 </li>
     <li>
    <h3>DASHBOARD</h3>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
        <li>  
        👉 The initial app screen should be a dashboard, to display important information for the last 7, 30, or 90 days:
        </li>
        <ul>
        <li>  
         A list of guests checking in and out on the current day. Users should be able to perform these tasks from here
        </li>
        <li>
         Statistics on recent bookings, sales, check ins, and occupancy rate
        </li>
        <li>
        A chart showing all daily hotel sales, showing both <b>total</b> sales and <b>extras</b> sales (only breakfast at the moment)
        </li>
        <li>
            A chart showing statistics on stay durations, as this is an important metric for the hotel
        </li>
        </ul>
    </ul>
 </li>

 <li>
    <h3>GUESTS</h3>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
        <li>  
        👉 Guest data should contain: full name, email, national ID, nationality, and a country flag for easy identification
        </li>
    </ul>
 </li>

  <li>
    <h3>SETTINGS</h3>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
        <li>  
       👉 Users should be able to define a few application-wide settings: breakfast price, min and max nights/booking, max guests/booking
        </li>
    </ul>
 </li>
  <li>
    <h3>BONUS</h3>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
        <li>  
       👉 App needs a dark mode
        </li>
    </ul>
 </li>
</ul>
<section>
<hr>

<section id="technologies">
<h2>⛏️ Built-with</h2>
    <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
        <li style="display: flex; align-items: center; gap: 15px;">
        <b>
        👉 Routing: 
        </b>
        <img src="./images/react-router.png" width= "100px"/>
        </li>
        <li style="display: flex; align-items: center; gap: 15px;">
        <b>
        👉 Styling: 
        </b>
        <img src="./images/styled-com.png" width="100px"/>
        </li>
        <li style="display: flex; align-items: center; gap: 15px;">
        <b>
        👉 Remote state management: 
        </b>
        <img src="./images/react-query.png" width="100px"/>
        </li>
        <li style="display: flex; align-items: center; gap: 15px;">
        <b>
        👉 UI state management: 
        </b>
        <img src="./images/context.png" width="100px"/>
        </li>
        <li style="display: flex; align-items: center; gap: 15px;">
        <b>
        👉 Form management: 
        </b>
        <img src="./images/react-hook-form.png" width="100px"/>
        </li>
        <li>
        <b>
        👉 Other tools: 
        </b>
        <ul>
            <li>Supabase</li>
            <li>React icons</li>
            <li>React hot toast</li>
            <li>Recharts</li>
            <li>date-fns</li>
        </ul>
        </li>
    </ul>
<section>

<section id="snapshots">
<h2>📹 Snapshots(Demo Video)</h2>

<a href="https://www.youtube.com/watch?v=rzJV29hBSAo" target="_blank">go to youtube</a>

</section>

<section id="future">
<h2>⏭️️ Future work</h2>
Mainly I should work on responsive design for to make the webiste in a good view on small screens. 
</section>

<section id="ack">
<h2>🤝 Acknowledgment</h2>
I had implemented this project during the course <b>ultimate-react-course</b> by Mr.<b>Jonas schmedtmann</b> 
</section>
