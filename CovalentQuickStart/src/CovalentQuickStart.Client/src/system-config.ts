'use strict';

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/forms',
  '@angular/http',
  '@angular/platform-browser-dynamic',
  '@angular/platform-browser',
  '@angular/router',

  // Thirdparty barrels.
  '@covalent/core',
  '@covalent/file-upload',
  '@covalent/highlight',
  '@covalent/markdown',
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'services',
  'app/main',
  'app/home',
  'app/users',
  'app/dashboard',
  'app/detail',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

// Angular Material 2 Packages
const materialPackages: string[] = [
  'button',
  'card',
  'checkbox',
  'core',
  'grid-list',
  'icon',
  'input',
  'list',
  'menu',
  'progress-bar',
  'progress-circle',
  'radio',
  'sidenav',
  'slide-toggle',
  'tabs',
  'toolbar'
];

materialPackages.forEach(function(pkg: string): void {
  let name: string = '@angular2-material/' + pkg;
  packages[name] = {
    defaultExtension: 'js',
    format: 'cjs',
    main: pkg + '.js',
  };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    '@angular2-material': 'vendor/@angular2-material',
    '@covalent': 'vendor/@covalent',
    'main': 'main.js',
    'rxjs': 'vendor/rxjs'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
