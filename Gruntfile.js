module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        express: {
            test: {
                options: {
                    port: 8000,
                    server: 'server.js'
                }
            }
        }

    });

    grunt.registerTask('default', ['express', 'express-keepalive']);
};