module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      files: [
      'app/scripts/controllers/**/*.js', 
      'app/scripts/directives/**/*.js', 
      'app/scripts/services/**/*.js', 
      'test/e2e/**/*.js',
      'test/spec/**/*.js'
      ],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    },
    karma: {
        unit: {
            configFile: "karma.conf.js",
            singleRun: true
        }
    },
    requirejs: {
        compile: {
            options: {
                name: "main",
                baseUrl: "app/scripts",
                mainConfigFile: "app/scripts/main.js",
                out: "build/optmized.js"
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('unit', ['jshint', 'karma']);
  grunt.registerTask('optmize', ['requirejs']);

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint']);

};
