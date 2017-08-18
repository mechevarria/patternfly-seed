'use strict';

// run on port 8081 for local development to prevent java backend port conflicts
var exposePort;
var runtime;

if (process.env.NPM_RUN) {
    exposePort = 8080;
    runtime = 'OpenShift';
} else {
    exposePort = 8081;
    runtime = 'local';
}

console.log('Running on ' + runtime + ', setting port to ' + exposePort); // eslint-disable-line no-console

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
                    'index.html',
                    'assets/css/*.css',
                    '<%= eslint.target %>'
                ],
                tasks: ['eslint']
            }
        },
        connect: {
            // use this to create connections to backend without cors issues
            proxies: [{
                context: '/odata4',
                host: 'localhost',
                port: 8080
            }],
            options: {
                port: exposePort,
                hostname: '0.0.0.0',
                livereload: 35729,
                keepalive:true
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
            },
            dist: {
                options: {
                    open: true,
                    middleware: function() {
                        return [
                            proxySnippet,
                            serveStatic('dist')
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
        },
        clean: [
            '.tmp',
            'dist'
        ],
        copy: {
            main: {
                files : [{
                    expand: true,
                    src: [
                        'app/**/*.html',
                        'app/**/*.json',
                        'index.html',
                        'assets/img/*'
                    ],
                    dest: 'dist/'
                }, {
                    expand: true,
                    flatten: true,
                    src: [
                        'node_modules/patternfly/node_modules/font-awesome/fonts/*',
                        'node_modules/patternfly/dist/fonts/*'
                    ],
                    dest: 'dist/assets/fonts/'
                }]
            }
        },
        useminPrepare: {
            html: 'index.html',
            options: {
                dest: 'dist'
            }
        },
        usemin: {
            html: 'dist/index.html'
        }
    });

    grunt.registerTask('default', [
        'dev'
    ]);

    grunt.registerTask('dev', [
        'eslint',
        'configureProxies',
        'connect:livereload',
        'watch:client'
    ]);

    grunt.registerTask('build', [
        'eslint',
        'clean',
        'copy',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'usemin'
    ]);

    grunt.registerTask('prod', [
        'build',
        'configureProxies',
        'connect:dist'
    ]);

};
