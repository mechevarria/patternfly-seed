'use strict';

var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
var serveStatic = require('serve-static');

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        watch: {
            client: {
                options: {
                    livereload: true
                },
                files: [
                    'app/components/**/*.html',
                    'app/components/**/*.js',
                    'index.html',
                    'assets/css/*.css',
                    '<%= eslint.target %>'
                ],
                tasks: ['eslint']
            }
        },
        connect: {
            // use this to create connections to backend without cors issues
            // proxies: [{
            //     context: '/backend-api',
            //     host: 'localhost',
            //     port: 8080
            // }],
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function() {
                        return [
                            proxySnippet,
                            serveStatic('.')
                        ];
                    }
                }
            }
        },
        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target: [
                'Gruntfile.js',
                'app/**/*.js'
            ]
        }
    });

    grunt.registerTask('default', [
        'eslint',
        'configureProxies',
        'connect:livereload',
        'watch:client'
    ]);

};
