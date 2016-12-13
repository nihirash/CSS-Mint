module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            target: {
                files: {
                    'build/css-mint.min.css': 'build/css-mint.css'
                }
            }
        },
        sass: {
            options: {

            },
            dist: {
                files: {
                    'build/css-mint.css': 'src/css/main.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/css/*', 'src/css/components/*'],
                tasks: ['sass','cssmin'],
                options: {
                    spawn: false,
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['watch']);
};
