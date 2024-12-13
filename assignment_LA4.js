// Initialize an empty array to represent the customer queue.
let customerQueue = [];

// Function to add a customer to the queue.
function addCustomer() {
  // Prompt the user to enter their name to join the queue.
  let name = prompt("Please enter your name to join the queue:");

  // Add the customer name to the end of the queue.
  customerQueue.push(name);

  // Log the added customer and the current state of the queue to the console.
  console.log(`Customer ${name} added to the queue.`);
  console.log("Current Queue: " + customerQueue.join(", "));
}

// Function to service a customer from the queue.
function serviceCustomer() {
  // Check if the queue is empty.
  if (customerQueue.length === 0) {
    // If the queue is empty, alert the user.
    alert("The queue is empty! No customers to service.");
    return; // Exit the function since there are no customers to service.
  }

  // Prompt the user to select a customer number to service.
  let customerNumber = prompt(`Enter a customer number (1-${customerQueue.length}) to service:`);

  // Convert the entered customer number to an integer.
  customerNumber = parseInt(customerNumber);

  // Check if the entered number is within the valid range.
  if (customerNumber >= 1 && customerNumber <= customerQueue.length) {
    // Remove the selected customer from the queue and store their name.
    let servicedCustomer = customerQueue.splice(customerNumber - 1, 1)[0];
    
    // Notify the user that the customer has been serviced.
    alert(`Customer ${servicedCustomer} has been serviced.`);
    // Log the serviced customer and the updated queue.
    console.log(`Serviced customer: ${servicedCustomer}`);
    console.log("Updated Queue: " + customerQueue.join(", "));
  } else {
    // If the entered number is invalid, alert the user.
    alert("Invalid number! Please enter a valid customer number.");
  }
}

// Function to start the queue system.
function startQueueSystem() {
  // Greet the user when they start the system.
  alert("Welcome to the Queueing System!");

  // Add 5 customers to the queue by calling the addCustomer function 5 times.
  for (let i = 0; i < 5; i++) {
    addCustomer();
  }

  // While there are customers in the queue, continue servicing them.
  while (customerQueue.length > 0) {
    serviceCustomer();
  }

  // Notify the user that all customers have been serviced.
  alert("All customers have been serviced. Thank you!");
}

// Start the queue system.
startQueueSystem();
