(function() {
    const script = document.createElement('script');
    script.src = 'https://jsfile.s3.amazonaws.com/myanalytics.js';
    script.onload = function() {
        console.log('Analytics script loaded successfully:', script.src);
    };
    script.onerror = function(event) {
        console.error('Error loading analytics script:', script.src);
        console.error('Error details:', event);
    };
    document.head.appendChild(script);
})();