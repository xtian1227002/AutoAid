document.addEventListener('DOMContentLoaded', () => {
    const profileElement = document.querySelector('.profile');
    if (profileElement) {
        const profileId = profileElement.getAttribute('data-id');
        console.log(profileId); // Outputs: 1
    } else {
        console.error('Profile element not found.');
    }
});
