Package.describe({
	summary: "Less-only Flat UI that doesn't require javascript",
	name: 'fazo96:flatter-ui',
	git: 'https://github.com/fazo96/flatter-ui.git',
	version: '0.2.5'
});

Package.on_use(function (api){
    api.versionsFrom('METEOR@0.9.3.1');
	api.use('less@1.0.8');
	api.use('jquery@1.0.0');
	api.use('natestrauser:font-awesome@4.2.0')

	var fonts_path = 'lib/fonts/lato/';
	var bootstrap_path = 'lib/bootstrap/';

	// Style and scripts
	api.addFiles(bootstrap_path + 'js/bootstrap.js', 'client');
	api.addFiles(bootstrap_path + 'less/bootstrap.import.less', 'client');
	api.addFiles('lib/less/flat-ui.import.less', 'client');

	// Fonts
	api.addFiles(fonts_path + 'lato-black.eot', 'client');
	api.addFiles(fonts_path + 'lato-black.svg', 'client');
	api.addFiles(fonts_path + 'lato-black.ttf', 'client');
	api.addFiles(fonts_path + 'lato-black.woff', 'client');
	api.addFiles(fonts_path + 'lato-bold.eot', 'client');
	api.addFiles(fonts_path + 'lato-bold.svg', 'client');
	api.addFiles(fonts_path + 'lato-bold.ttf', 'client');
	api.addFiles(fonts_path + 'lato-bold.woff', 'client');
	api.addFiles(fonts_path + 'lato-bolditalic.eot', 'client');
	api.addFiles(fonts_path + 'lato-bolditalic.svg', 'client');
	api.addFiles(fonts_path + 'lato-bolditalic.ttf', 'client');
	api.addFiles(fonts_path + 'lato-bolditalic.woff', 'client');
	api.addFiles(fonts_path + 'lato-italic.eot', 'client');
	api.addFiles(fonts_path + 'lato-italic.svg', 'client');
	api.addFiles(fonts_path + 'lato-italic.ttf', 'client');
	api.addFiles(fonts_path + 'lato-italic.woff', 'client');
	api.addFiles(fonts_path + 'lato-light.eot', 'client');
	api.addFiles(fonts_path + 'lato-light.svg', 'client');
	api.addFiles(fonts_path + 'lato-light.ttf', 'client');
	api.addFiles(fonts_path + 'lato-light.woff', 'client');
	api.addFiles(fonts_path + 'lato-regular.eot', 'client');
	api.addFiles(fonts_path + 'lato-regular.svg', 'client');
	api.addFiles(fonts_path + 'lato-regular.ttf', 'client');
	api.addFiles(fonts_path + 'lato-regular.woff', 'client');
});
