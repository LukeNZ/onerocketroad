/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app':                        '/angular', // 'dist',
        '@angular':                   '/node_modules/@angular',
        'angular2-in-memory-web-api': '/node_modules/angular2-in-memory-web-api',
        'rxjs':                       '/node_modules/rxjs',
        'remarkable':                 '/node_modules/remarkable/dist',
        'moment':                     '/node_modules/moment',
        'dropzone':                   '/node_modules/dropzone/dist',
        
        'classes':                    '/angular/classes',
        'components':                 '/angular/components',
        'directives':                 '/angular/directives',
        'enums':                      '/angular/enums',
        'pipes':                      '/angular/pipes',
        'services':                   '/angular/services'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
        'remarkable':                 { main: 'remarkable.js', defaultExtension: 'js' },
        'moment':                     { main: 'moment.js', defaultExtension: 'js' },
        'dropzone':                   { main: 'dropzone.js', defaultExtension: 'js' },

        'classes':                    { main: 'index.js', defaultExtension: 'js' },
        'components':                 { main: 'index.js', defaultExtension: 'js' },
        'directives':                 { main: 'index.js', defaultExtension: 'js' },
        'enums':                      { main: 'index.js', defaultExtension: 'js' },
        'pipes':                      { main: 'index.js', defaultExtension: 'js' },
        'services':                   { main: 'index.js', defaultExtension: 'js' }
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);