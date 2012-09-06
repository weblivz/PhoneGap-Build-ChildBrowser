var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
		setTimeout(function() {
			console.log('launching ...');
			window.plugins.childBrowser.showWebPage('http://www.google.com', { showLocationBar: false });
			console.log('launched ...');
		}, 5000);
    }
};
