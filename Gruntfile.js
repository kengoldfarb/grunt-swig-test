'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-swig');

	grunt.initConfig({
	// swig: {
	//   development: {
	//     init: {
	//       allowErrors: false,
	//       autoescape: true
	//     },
	//     dest: 'test/dest',
	//     src: ['**/*.swig', '!templates/*.swig'],
	//     siteUrl: 'http://mydomain.net/',
	//     generateSitemap: true,
	//     generateRobotstxt: true,
	//     test: {
	//       var1: 'long path file',
	//       var2: 'short path file'
	//     },
	//     sitemap_priorities: {
	//       '_DEFAULT_': '0.7',
	//       'fixtures/index.html': 0.8
	//     }
	//   }
	// }
		swig: {
	        options: {
				generateSitemap: false,
	            templateData: {
					greeting: "uh oh"
				}
			},
			dev: {
	            options: {
	                generateSitemap: true,
					// generatedExtension: 'test',
					siteUrl: 'http://mydomaindev.net/',
					templateData: {
						production: false,
						fb_appid: '1349v',
						ga_account_id: 'UA-xxxxxxxx-1',
						robots_directive: 'Disallow /',
						testVar: "blaaaaaahhhhhh",
						greeting: "default greeting"
					},
					sitemap: {
						'default': {
							changefreq: 'never',
							lastmod: '2033-01-01',
							priority: '0.5'
						},
						'src/index.html': {
							changefreq: 'daily',
							lastmod: '2009-01-01',
							priority: '0.8'
						},
						'src/test/index.html': {
							changefreq: 'monthly',
							priority: '0.4'
						}
					},
					swigOptions: {

					}
	            },
	            src: ['src/**/*.swig'],
	            dest: 'www/'
	        },
			prod: {
	            src: ['src-prod/**/*.swig'],
	            dest: 'www-prod/'
	        }
	    }

	});

  grunt.registerTask('default', 'swig');
};
