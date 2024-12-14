


function changeVideo(newSrc) {
    const video = document.getElementById('myVideo');
    video.src = newSrc; // Update the video source
    video.load(); // Reload the video
    video.play(); // Auto-play the new video
  }

const posts = document.querySelectorAll('.post img');
const popupContainer = document.getElementById('popup-container');
const popupContent = document.getElementById('popup-content');
const closePopup = document.getElementById('close-popup');
const searchBar = document.getElementById('search-bar');
const postDivs = document.querySelectorAll('.post');

// Popup functionality
posts.forEach(post => {
  post.addEventListener('click', () => {
    const popupData = post.nextElementSibling.innerHTML;
    popupContent.innerHTML = popupData;
    popupContainer.classList.add('active');
  });
});

closePopup.addEventListener('click', () => {
  popupContainer.classList.remove('active');
});

// Search functionality
searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.toLowerCase();
  postDivs.forEach(post => {
    const altText = post.querySelector('img').alt.toLowerCase();
    if (altText.includes(searchTerm)) {
      post.style.display = 'inline-block';
    } else {
      post.style.display = 'none';
    }
  });
});







document.addEventListener('click', function (event) {
    // Check if the clicked element is a link
    if (event.target.tagName === 'A') {
        event.preventDefault(); // Prevent default navigation

        const url = event.target.href;

        if (url) {
            // Open the link in Chrome on Android using the intent scheme
            const chromeUrl = `intent://${url.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end;`;
            window.location.href = chromeUrl;
        }
    }
});




function openInBrowser(url) {
    if (window.navigator && window.navigator.userAgent) {
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.includes('android')) {
            // Open with Android's intent for Chrome
            window.open(url, '_system');
        } else {
            // Default behavior for other platforms
            window.open(url, '_blank');
        }
    } else {
        // Fallback
        window.open(url, '_blank');
    }
}