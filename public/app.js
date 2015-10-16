var app = angular.module('Website', ["ui.router", "hc.marked"])

app.config(['markedProvider', function(markedProvider) {
	markedProvider.setOptions({
		gfm: true,
		highlight: function (code, lang) {
			if (lang) {
				return hljs.highlight(lang, code, true).value;
			} else {
				return hljs.highlightAuto(code).value;
			}
		}
	})
}])



