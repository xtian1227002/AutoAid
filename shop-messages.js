// shop-messages.js

$(document).ready(function() {
    // Function to handle the click event on the "Reply" button
    $('.btn-primary').click(function() {
        // Get the ID of the message associated with the clicked button
        const messageId = $(this).closest('.message-item').data('id');
        
        // Make an AJAX request to fetch the message data from the server
        $.ajax({
            url: `http://localhost:3000/api/messages/${messageId}`, // Replace with your actual server URL
            method: 'GET',
            success: function(response) {
                // Display the message data (you can modify this part to update the UI)
                console.log(response);
            },
            error: function(xhr, status, error) {
                // Handle errors if the AJAX request fails
                console.error(error);
            }
        });
    });
});
