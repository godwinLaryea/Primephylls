const bookingLink = document.querySelector(".book-link");

const main = document.getElementById("main");

bookingLink.addEventListener("click", e => {
  
  e.preventDefault();

  const bookingElements = `<div>
      <h2 class="booking-header">Book a service now to experience</h2>
      <form class="booking-form">
        <div>
          <label for="name" id="name">Name</label><br />
          <input type="text" placeholder="Enter your full name" required />
        </div>
        <div>
          <label for="location" id="location">Location</label><br />
          <input
            type="text"
            placeholder="Enter your location"
            name="location"
            required
          />
        </div>
        <div>
          <label for="date" id="date">Date</label><br />
          <input type="date" name="" date required />
        </div>

        <select>
          <option value="#">Type of service</option>
          <option value="deep cleaning">Deep Cleaning</option>
          <option value="regular cleaning">Regular Cleaning</option>
          <option value="furniture">Furniture Cleaning</option>
          <option value="laundry">Laundry</option>
        </select>

        <div><input type="submit" value"Submit"></div>
      </form>
    </div>
  `
  main.innerHTML = bookingElements;
});
