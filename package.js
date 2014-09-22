Package.describe({
	summary: "Less-only Flat UI that doesn't require javascript",
	name: 'mrt:flatter-ui',
	git: 'https://github.com/Rnhmjoj/flatter-ui.git',
	version: '0.2.4'
});

Package.on_use(function (api){
	api.use('less@1.0.8');
	api.use('jquery@1.0.0');
	api.use('mrt:font-awesome-4-less@4.3.9')

	var fonts_path = 'lib/fonts/lato/';
	var bootstrap_path = 'lib/bootstrap/';

	// Style and scripts
	api.add_files(bootstrap_path + 'js/bootstrap.js', 'client');
	api.add_files(bootstrap_path + 'less/bootstrap.import.less', 'client');
	api.add_files('lib/less/flat-ui.import.less', 'client');

	// Fonts
	api.add_files(fonts_path + 'lato-black.eot', 'client');
	api.add_files(fonts_path + 'lato-black.svg', 'client');
	api.add_files(fonts_path + 'lato-black.ttf', 'client');
	api.add_files(fonts_path + 'lato-black.woff', 'client');
	api.add_files(fonts_path + 'lato-bold.eot', 'client');
	api.add_files(fonts_path + 'lato-bold.svg', 'client');
	api.add_files(fonts_path + 'lato-bold.ttf', 'client');
	api.add_files(fonts_path + 'lato-bold.woff', 'client');
	api.add_files(fonts_path + 'lato-bolditalic.eot', 'client');
	api.add_files(fonts_path + 'lato-bolditalic.svg', 'client');
	api.add_files(fonts_path + 'lato-bolditalic.ttf', 'client');
	api.add_files(fonts_path + 'lato-bolditalic.woff', 'client');
	api.add_files(fonts_path + 'lato-italic.eot', 'client');
	api.add_files(fonts_path + 'lato-italic.svg', 'client');
	api.add_files(fonts_path + 'lato-italic.ttf', 'client');
	api.add_files(fonts_path + 'lato-italic.woff', 'client');
	api.add_files(fonts_path + 'lato-light.eot', 'client');
	api.add_files(fonts_path + 'lato-light.svg', 'client');
	api.add_files(fonts_path + 'lato-light.ttf', 'client');
	api.add_files(fonts_path + 'lato-light.woff', 'client');
	api.add_files(fonts_path + 'lato-regular.eot', 'client');
	api.add_files(fonts_path + 'lato-regular.svg', 'client');
	api.add_files(fonts_path + 'lato-regular.ttf', 'client');
	api.add_files(fonts_path + 'lato-regular.woff', 'client');
});
