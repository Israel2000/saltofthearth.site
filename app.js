console.log("HI")

// Function to parse URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Function to open the specified tab
  function openTab(tabId) {
    var tab = new bootstrap.Tab(document.getElementById(tabId));
    tab.show();
  }

  // Get the tab parameter from the URL
  var tabParam = getUrlParameter('pill');

  // Open the specified tab if the parameter is found
  if (tabParam !== null) {
    openTab(tabParam);
  }