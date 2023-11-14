//your JS code here. If required.
 function incrementCounter() {
            // Get the current value of the counter
            var counterElement = document.getElementById("counter");
            var currentValue = parseInt(counterElement.innerText);

            // Display the un-incremented value using an alert
            alert("Un-incremented Value: 0" + currentValue);

            // Increment the counter value
            counterElement.innerText = currentValue + 1;
        }