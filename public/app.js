var app = angular.module('Website', ["ui.router", "hc.marked"])

app.config(['markedProvider', function(markedProvider) {
      markedProvider.setOptions({gfm: true});
    }])



