module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: '_large_2x',
            quality: 30
          }, {
            width: 800,
            suffix: '_large_1x',
            quality: 30
          }, {
            width: 400,
            suffix: '_medium',
            quality: 30
          }, {
            width: 200,
            suffix: '_small',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          cwd: 'images_src/',
          src: ['*.{gif,jpg,png}'],
          dest: 'images/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);
};
