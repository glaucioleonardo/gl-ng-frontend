# gl-ng-titles-frontend
[![version](https://img.shields.io/npm/v/gl-ng-titles-frontend)](https://www.npmjs.com/package/gl-ng-titles-frontend)
[![downloads](https://img.shields.io/npm/types/gl-ng-titles-frontend)](https://www.npmjs.com/package/gl-ng-titles-frontend)
[![downloads](https://img.shields.io/npm/dw/gl-ng-titles-frontend)](https://www.npmjs.com/package/gl-ng-titles-frontend)

### What is this repository for? ###
This package (**g**laucio**l**eonardo-a**n****g**ular-**titles**-**frontend**) is a common code and components designed for Angular 2+ to be used among web front-end development.<br>

This library has been generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

The full documentation is still under progress, however the components working perfectly (... or not!)

## Table of contents ##
1. Configurations:<br>
   1.1. [ Importing the component into angular module ](#importing-component)<br>


<a name="importing-component"></a>
### Importing the component into angular module ###
In order to use the component, it's necessary to import the library as dependency:

`npm install gl-ng-titles-frontend --save-dev`


In `app.module.ts` include these angular imports:

```
..
import { GlNgTitlesFrontendModule } from 'gl-ng-titles-frontend';
...

@NgModule({
  declarations: [
   ...
  ],
  imports: [
   ...
    GlNgTitlesFrontendModule,

   ...
  ],
  exports: [
   ...
  ]
})
export class AppModule { }
```
