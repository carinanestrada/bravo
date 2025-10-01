/* 
Add drag and drop
figure out x's and o's placement
drag green diagonal \ / or straight line | for win
 */
$( function() {
    $( "#draggable" ).draggable();
  } );
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }
  
  // Function to check if a cookie exists
  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const [key, value] = cookies[i].split('=');
      if (key === name) return value;
    }
    return null;
  }
  
  // Event listeners for buttons
  document.getElementById('acceptCookies').addEventListener('click', () => {
    setCookie('userConsent', 'accepted', 365); // Set cookie for 1 year
    document.getElementById('cookieConsentBox').style.display = 'none';
  });
  
  document.getElementById('declineCookies').addEventListener('click', () => {
    setCookie('userConsent', 'declined', 365); // Set cookie for 1 year
    document.getElementById('cookieConsentBox').style.display = 'none';
  });
  
  // Check if user has already made a choice
  window.onload = () => {
    if (getCookie('userConsent')) {
      document.getElementById('cookieConsentBox').style.display = 'none';
    }
  };

  