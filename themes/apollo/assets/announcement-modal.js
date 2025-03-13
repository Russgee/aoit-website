/**
 * Announcement Modal Functionality
 * 
 * This script handles the announcement modal that appears when users first visit the site.
 * It uses localStorage to remember which announcements the user has dismissed.
 */

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('announcement-modal');
    if (!modal) return; // Exit if modal doesn't exist
    
    const modalBackdrop = document.getElementById('modal-backdrop');
    const closeButton = document.getElementById('close-modal');
    const confirmButton = document.getElementById('confirm-modal');
    const dontShowAgainCheckbox = document.getElementById('dont-show-again');
    
    // Get the current announcement ID (using the title as an identifier)
    const announcementTitle = document.querySelector('#announcement-modal h3').textContent;
    const announcementId = announcementTitle.trim().replace(/\s+/g, '-').toLowerCase();
    
    // Check if this announcement has been dismissed
    const dismissedAnnouncements = JSON.parse(localStorage.getItem('dismissedAnnouncements') || '{}');
    
    // Only show the modal if this announcement hasn't been dismissed
    if (!dismissedAnnouncements[announcementId]) {
        // Show the modal with a slight delay for better UX
        setTimeout(() => {
            modal.classList.remove('hidden');
            // Add a class to the body to prevent scrolling while modal is open
            document.body.classList.add('overflow-hidden');
        }, 800);
    }
    
    // Function to close the modal
    function closeModal() {
        // Add a fade-out animation
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('opacity-0');
            // Remove the class from body to allow scrolling again
            document.body.classList.remove('overflow-hidden');
        }, 300);
        
        // If "don't show again" is checked, remember this preference
        if (dontShowAgainCheckbox.checked) {
            dismissedAnnouncements[announcementId] = true;
            localStorage.setItem('dismissedAnnouncements', JSON.stringify(dismissedAnnouncements));
        }
    }
    
    // Close modal when clicking the close button
    closeButton.addEventListener('click', closeModal);
    
    // Close modal when clicking the confirm button
    confirmButton.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the modal content
    modalBackdrop.addEventListener('click', function(event) {
        if (event.target === modalBackdrop) {
            closeModal();
        }
    });
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
    
    // Handle image loading errors
    const announcementImage = modal.querySelector('img');
    if (announcementImage) {
        announcementImage.onerror = function() {
            // Hide the image container if the image fails to load
            this.parentElement.style.display = 'none';
        };
    }
}); 