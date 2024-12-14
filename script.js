










document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");
  
  images.forEach((img) => {
    // Check if the image already has lazy loading
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }

    // Optionally, add a placeholder or low-res image
    if (!img.dataset.src && img.src) {
      img.dataset.src = img.src; // Save original src to data-src
      img.src = "https://raw.githubusercontent.com/avdhez/Movie-Site/refs/heads/main/AddText_12-14-10.42.42.jpg"; // Replace with a placeholder
    }
  });

  // If Intersection Observer is available, implement lazy loading
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src; // Replace src with the original
            img.removeAttribute("data-src"); // Clean up
          }
          observer.unobserve(img); // Stop observing
        }
      });
    });

    images.forEach((img) => observer.observe(img));
  } else {
    // Fallback for older browsers: Load all images immediately
    images.forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      }
    });
  }
});











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


