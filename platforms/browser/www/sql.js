var app = {
  
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    vibrate: function() {
      var myDB = window.sqlitePlugin.openDatabase({name: "mySQLite.db", location: 'default'});
      return myDB;
    },
    alerte: function(myDB){
           myDB.transaction(function(transaction) {
			transaction.executeSql('CREATE TABLE IF NOT EXISTS phonegap_pro (id integer primary key, title text, desc text)', [],
			function(tx, result) {
			alert("Table created successfully");
			},
			function(error) {
			alert("Error occurred while creating the table.");
			});
			});
			}
};
