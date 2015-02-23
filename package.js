Package.describe({
	summary: "Bind parsed form and input data to Session variables",
	version: "0.1.6",
	name: "gwendall:form-data-binder",
	git: "https://github.com/gwendall/meteor-form-data-binder.git"
});

Package.on_use(function (api, where) {
	api.versionsFrom('0.9.0');
	if (api.export) {
		api.use([
			'ui',
			'jquery',
			'underscore',
			'gwendall:session-json@0.1.7'
		], 'client');
	}
	api.add_files([
		'vendor/form2js/js2form.js',
		'vendor/form2js/form2js.js',
		'vendor/form2js/form2js.json2.js',
		'export.js'
	], 'client');
});
