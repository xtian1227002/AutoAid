$(document).ready(function() {
    // Get the profile ID from the data attribute of the profile element
    const profileId = $('.profile').data('id');

    // Make AJAX request to fetch profile data
    $.get(`/api/profiles/${profileId}`, function(data) {
        // Update the profile information in the HTML
        $('.profile h2').text(data.name);
        $('.profile p:eq(0)').html(`Email: <a href="mailto:${data.email}">${data.email}</a>`);
        $('.profile p:eq(1)').text(`Location: ${data.location}`);
    });
});
