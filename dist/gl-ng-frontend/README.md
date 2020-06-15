# gl-ng-frontend

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Table of contents ##
1. Configurations:<br>
   1.1. [ Configuring assets ](#configuring-assets)<br>
   1.2. [ Configuring external links / urls from anchors ](#external-links-anchors)<br>
   1.3. [ Configuring side menu ](#configuraing-side-menu)
2. Imports<br>
   2.1. [ Importing @angular/material ](#importing-angular-material)

<a name="configuring-assets"></a>
### Configuring assets ###
Inside the `angular.json` ou need including the following information:
```
{
    "glob": "**/*",
    "input": "node_modules/gl-ng-frontend/assets",
    "output": "/assets"
}
```
The output assets could be another path according to your setup.

Here is how the assets `angular.json` should be:
```
{
  ...
  "projects": {
    "lessons-learned-angular": {
      ...
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            ...
            "assets": [
              ...,
              {
                "glob": "**/*",
                "input": "node_modules/gl-ng-frontend/assets",
                "output": "/assets"
              },
              ...
            ],
            ...
          },
          ...
        },
        ...
      }
    }},
  ...
}

```

<a name="external-links-anchors"></a>
### Configuring external links / urls from anchors ###

- In `app.module.ts` include these angular imports:

```
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
```

- Create a variable to inject the `externalUrlRedirectResolver`:

`const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');`

- Create the route variable and include the following route:
```
const routes: Routes = [
    {
        path: 'externalRedirect',
        resolve: {
          url: externalUrlProvider,
        },
        // We need a component here because we cannot define the route otherwise
        component: ViewsHomeComponent,
    },
    ...
]
```

Inside the `@NgModule` import the variable routes and include this code inside providers:
```
@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot( routes ),

    ...
  ],
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        window.open(externalUrl, '_self');
      },
    },
    ...
  ],
  bootstrap: [AppComponent],
})
```

The `app.module.ts` must contain at least these codes:

```
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const routes: Routes = [
  {
    path: 'externalRedirect',
    resolve: { url: externalUrlProvider },
    // We need a component here because we cannot define the route otherwise
    component: ViewsHomeComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    ...
  ],
  exports: [],
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        window.open(externalUrl, '_self');
      }
    }
  ]
})
export class AppModule {
  constructor() { }
}
```
<a name="configuraing-side-menu"></a>
### Configuring side menu ###
For using correctly the side menu we need at least 3 files:
- `my-view.component.html`;<br> 
- `my-view.component.ts`;<br> 
- `my-view.service.ts`;<br> 

First we need to add the component inside `my-view.component.html`:

```
`my-view.component.html`
// This is a sample button, but it's recommended use a button from header page/app.
<button 
    type="button" 
    class="default-button"
    (click)="service.menu($event)"
>Click here to test the menu</button>


// Here you can use literal string or binding (usually binding is the best option).
<gl-shared-component-menu
  [title]="sideMenuData.title"
  [subtitle]="sideMenuData.subtitle"
  [className]="sideMenuData.className"
  [menuItems]="menuItems"
  [showSettings]="sideMenuData.showSettings"
  [systemVersion]="sideMenuData.systemVersion"
  [menuBottomTitle]="sideMenuData.menuBottomTitle"
  [menuBottomVersion]="sideMenuData.menuBottomVersion"
  [menuPosition]="sideMenuData.menuPosition"
  [menuLogo]="sideMenuData.menuLogo"
  [settingsTarget]="sideMenuData.settingsTarget"
  [settingsUrl]="sideMenuData.settingsUrl"
></gl-shared-component-menu>
```
Once you have included the component in the html model. Let's prepare our `component.ts`:

Import the interface for a menu item.
```
import { IMenuItem } from 'gl-ng-frontend';
```

In case the side menu parameters are static you can set them outside the constructor as following. However, many 
data is necessary to be fetch from the server, it's really recommended to use `ngAfterViewInit` to avoid null data and to break 
the application.
```
    readonly sideMenuData: ISideMenuData = {
    title: 'My title',
    subtitle: 'My subtitle',
    className: 'translucid',
    showSettings: false, // here you could make any server validation (however with another approach, not declaring as is)
    systemVersion: '1.0.0', // If you leave menuBottomVersion empty, this will show as "Version: 1.0.0".
    menuBottomTitle: 'My system name',
    menuBottomVersion: 'Version 1.0.0. Release Candidate',
    menuPosition: 'right', // default is right, but could be also left.
    menuLogo: '../assets/img/logo/my-logo.png',
    settingsTarget: '_blank',
    settingsUrl: `https://my-url.com/admin`
  };
```
Here you also need to declare the `menuItems` using the same approach. In this case it's necessary fetch 
some data from server side and then just initialize the variable.
```
menuItems: IMenuItem[] = [];
```

In order to be available as singleton service, include on your constructor include the service `my-view.service.ts`.

```
constructor(public service: MyViewService) { }
```

In the method `ngAfterViewInit` you are going to bind the menu items:
```
// Simulating in this promise a data fetching.
this.server.processMode(this._route).then((environment: IEnvironmentMode) => {
  const mode = environment.mode;
  const type = mode === 'dev' ? '/dev' : '';

  this.menuItems = [
    {
      content: 'Return to My Page',
      href: this.environment.host,
      src: 'assets/logo/my-logo.svg', // You are free to use literal string, const or other kind or variable.
      alt: 'Return to My Page',
      absolute: true,
      class: 'translucid'
    },
    {
      content: 'Create new item',
      href: `${type}/new-item`,
      src: 'assets/icon/new-item.png'
      alt: 'Create new item',
      absolute: false, // this is going to use the routerLink (recommended on angular)
      class: 'translucid'
    }
  ];
});
``` 

This is how the `my-view.component.ts` should be (minimal setup):
```
import { IMenuItem } from 'gl-ng-frontend';

@Component({
  selector: 'app-my-view',
  templateUrl: './my-view.component.html',
  styleUrls: ['./my-view.component.scss']
})

export class ViewsSearchComponent implements AfterViewInit {
    menuItems: IMenuItem[] = [];
    readonly sideMenuData: ISideMenuData = {
        title: 'My title',
        subtitle: 'My subtitle',
        className: 'translucid',
        showSettings: false, // here you could make any server validation (however with another approach, not declaring as is)
        systemVersion: '1.0.0', // If you leave menuBottomVersion empty, this will show as "Version: 1.0.0".
        menuBottomTitle: 'My system name',
        menuBottomVersion: 'Version 1.0.0. Release Candidate',
        menuPosition: 'right', // default is right, but could be also left.
        menuLogo: '../assets/img/logo/my-logo.png',
        settingsTarget: '_blank',
        settingsUrl: `https://my-url.com/admin`
    };

    constructor(public service: MyViewService) { }

    ngAfterViewInit(): void {
        this.server.processMode(this._route).then((environment: IEnvironmentMode) => {
          const mode = environment.mode;
          const type = mode === 'dev' ? '/dev' : '';
        
          this.menuItems = [
            {
              content: 'Return to My Page',
              href: this.environment.host,
              src: 'assets/logo/my-logo.svg', // You are free to use literal string, const or other kind or variable.
              alt: 'Return to My Page',
              absolute: true,
              class: 'translucid'
            },
            {
              content: 'Create new item',
              href: `${type}/new-item`,
              src: 'assets/icon/new-item.png'
              alt: 'Create new item',
              absolute: false, // this is going to use the routerLink (recommended on angular)
              class: 'translucid'
            }
          ];
        });
    }
}

```


The last part is in `my-view.service.ts`;
Import the menu service:
```
import { GlSharedComponentMenuService } from 'gl-ng-frontend';
```

In the constructor include imported service `GlSharedComponentMenuService`.

```
// Here is declared as public for my-view.component.ts, but could be private and you use another method 
// to achieve the click.
constructor(public menu: GlSharedComponentMenuService) { }
```

Now include the method to toggle the menu:

```
menu(event: Event) {
    const action = this._menu.opened ? 'close' : 'open';
    this._menu[action](event);
}
```

## Imports ##
### Importing @angular/material ###

In order to use the angular material, it's necessary to import as developer dependency at least these packages:

```
npm install @angular/material --save-dev
npm install @angular/cdk --save-dev
```

 
