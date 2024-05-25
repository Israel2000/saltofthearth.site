// changing path from html
document.addEventListener("DOMContentLoaded", function() {
            // Define a mapping of old filenames to new filenames
            const urlMappings = {
                'index.html': 'home',
                'about.html': 'about-us',
                'videos.html': 'videos',
                'counseling_UnMarried.html' : 'unmarried',
                'counseling_Married.html': 'married',
                'newFriendFinder.html': 'match-seeker'
            };

           // Function to replace the URL path
    function replaceUrlPath() {
        const currentPath = window.location.pathname;
        for (const [oldPath, newPath] of Object.entries(urlMappings)) {
            if (currentPath.endsWith(oldPath)) {
                const newUrl = currentPath.replace(oldPath, newPath);
                window.history.replaceState(null, '', newUrl);
                break;
            }
        }
    }

    // Function to update links
    function updateLinks() {
        const links = document.querySelectorAll('a[href*=".html"]');
        links.forEach(function(link) {
            const currentHref = link.getAttribute('href');
            for (const [oldPath, newPath] of Object.entries(urlMappings)) {
                if (currentHref.endsWith(oldPath)) {
                    const newHref = currentHref.replace(oldPath, newPath);
                    link.setAttribute('href', newHref);
                }
            }
        });
    }

    // Call functions to replace URL and update links
    replaceUrlPath();
    updateLinks();
});