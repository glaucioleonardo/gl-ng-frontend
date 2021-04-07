# gl-ng-frontend
[![version](https://img.shields.io/npm/v/gl-ng-frontend)](https://www.npmjs.com/package/gl-ng-frontend) 
[![downloads](https://img.shields.io/npm/types/gl-ng-frontend)](https://www.npmjs.com/package/gl-ng-frontend) 
[![downloads](https://img.shields.io/npm/dw/gl-ng-frontend)](https://www.npmjs.com/package/gl-ng-frontend)

### What is this repository for? ###
This package (**g**laucio**l**eonardo-a**n****g**ular-**frontend**) is a common code and components designed for Angular 2+ to be used among web front-end development.<br>

This library has been generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

The full documentation is still under progress, however the components working perfectly (... or not!) 

## Table of contents ##
0. Dependencies-peer:<br>
   
1. Configurations:<br>
   1.1. [ Configuring assets ](#configuring-assets)<br>
   1.2. [ Configuring external links / urls from anchors ](#external-links-anchors)<br>
   1.3. [ Configuring side menu ](#configuraing-side-menu)<br>

2. Imports<br>
   2.1. [ Importing @angular/material ](#importing-angular-material)<br>

3. Components<br>
    3.1. [Attachment](#compoenent-attachment)<br>
      3.1.1. [Image](#compoenent-attachment-image)<br>
      3.1.2. [Image](#compoenent-attachment-item)<br>
    
    3.2. Button (documentation under progress)<br>
      3.2.1. Attachment<br>
      3.2.2. Image<br>
      3.2.3. Menu<br>
    
    3.3. Error message (documentation under progress)<br>
    
    3.4. Filter (documentation under progress)<br>
      3.4.1. Container<br>
    
    3.5. Footer (documentation under progress)<br>
      3.5.1. Container<br>
      3.5.2. Simple<br>

    3.6. Header (documentation under progress)<br>
      3.6.1. Default<br>

    3.7. Input (documentation under progress)<br>
      3.7.1. Autocomplete<br>
        3.7.1.1. Label<br>
        3.7.1.2. Simple<br>
      3.7.2. Button<br>
        3.7.2.1. Hyperlink<br>
        3.7.2.2. Simple<br>
      3.7.3. Option / Radio<br>
        3.7.3.1. Simple<br>
      3.7.4. Text<br>
        3.7.4.1. Label<br>
        3.7.4.2. Simple<br>
      3.7.5. Text area<br>
        3.7.4.1. Label<br>
        3.7.4.2. Simple<br>
    
    3.8. Logo / Image (documentation under progress)<br>
      3.8.1. Square<br>

    3.9. Menu (documentation under progress)<br>
      3.9.1. Main<br>
      3.9.2. Background<br>
      3.9.3. Item<br>

    3.10. Modal (documentation under progress)<br>
      3.10.1. Alert<br>
      3.10.2. Attachment Link<br>
      3.10.3. Header (component)<br>
      3.10.4. Loading<br>

    3.11. Paging (documentation under progress)<br>

    3.12. Title (documentation under progress)<br>
      3.12.1. Label<br>
        3.12.1.1. Button<br>
          3.12.1.1.1. Container<br>
          3.12.1.1.2. Simple<br>
        3.12.1.2. Simple<br>
      3.12.2. Page<br>

4. Views<br>
    4.1. Error message (documentation under progress)

### Install peer-dependencies ###
This library must also install the following package:
```
npm i --save smooth-scroll
```

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

 

<a name="compoenent"></a>
## Components ##

<a name="compoenent-attachment"></a>
### Attachment ###

<a name="compoenent-attachment-image"></a>
#### Image ####

<details>

Params:<br>
`gl-shared-component-attachment-image-preview.component.ts`
```
@Input() disabled = false;
@Input() currentImage;
@Input() required = false;
@Input() type: 'light' | 'dark' | '' = '';
@Input() showLabel: boolean = true;
@Input() requiredFieldDescription: string = 'Required field';
@Input() addImageDescription: string = 'Click to add an image';
@Input() maxImageSize: string = '10240'; // in KB
@Input() invalidSizeDescription: string = 'Invalid file size. The max allowed size is';
@Input() invalidFormatDescription: string = 'Invalid file format!';
@Input() addImageButtonDescription: string = 'Add image';
@Input() removeImageButtonDescription: string = 'Remove image';

@Output() currentValue$ = new EventEmitter();
```

Define the component in HTML template<br>
`views-main-form.component.html`
```

<gl-shared-component-attachment-image-preview
    type="light"
    [required]="true"
    [showLabel]="false"
    requiredFieldDescription="Campo obrigatório"
    addImageDescription="Adicionar imagem"
    maxImageSize="10240"
    invalidSizeDescription="Tamanho do arquivo inválido. Tamanho máximo permitido"
    invalidFormatDescription="Este formato de arquivo é inválido"
    addImageButtonDescription="Adicionar imagem"
    removeImageButtonDescription="Remover imagem"
></gl-shared-component-attachment-image-preview>
```

How to set an image (base64 string):<br>
`views-main-form.service.ts`
```
import { GlSharedComponentAttachmentImagePreviewService } from 'gl-ng-frontend';

@Injectable({
  providedIn: 'root'
})
export class ViewsMainFormService {

    consttructor(private _image: GlSharedComponentAttachmentImagePreviewService) { }
    
    setImageExample() {
        const imageData: string = 'base64...'
        this._image.retrieveUpdate.next(imageData);
    }
}
```
</details>

<a name="compoenent-attachment-item"></a>
#### Item ####

<details>

Params:<br>
`gl-shared-component-attachment-item.component.ts`
```
@Input() disabled = false;
@Input() attachmentUrl: string;
@Input() fileName: string;
@Input() fileIcon: string;
@Input() id: number;
@Input() type: string;
@Input() addingSmooth: boolean;

@Output('onClick') onItemClick: EventEmitter<void> = new EventEmitter();
@Output() removeCurrentItem: EventEmitter<{ id: number }> = new EventEmitter();
@Output() editCurrentItem: EventEmitter<{ id: number }> = new EventEmitter();

constructor(public service: ViewsMainFormService) { }
```

Define the component in HTML template (using the *ngFor directive)<br>
`views-main-form.component.html`
```
<div class="attachment-main-container">
  <div #attachmentLinksContainer class="attachment-link-container">
    <gl-shared-component-attachment-item
      *ngFor="let attachmentFile of service.attachmentFiles"
      [disabled]="disabled"
      [fileIcon]="attachmentFile.icon"
      [id]="attachmentFile.id"
      [attachmentUrl]="attachmentFile.url"
      (onClick)="onAttachmentClick(attachmentFile.id)"
      [fileName]="attachmentFile.name"
      (removeCurrentItem)="removeAttachmentFile($event)"
    ></gl-shared-component-attachment-item>
  </div>
</div>
```

How to set an image (base64 string):<br>
`views-main-form.service.ts`
```
import { GlSharedComponentAttachmentImagePreviewService } from 'gl-ng-frontend';

interface IAttachmentData {
  id: number;
  new: boolean;
  remove: boolean;
  name: string;
  file?: File;
  url?: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ViewsMainFormService {

    attachmentFiles: : IAttachmentData[];

    consttructor(private _server: ...) { }

    async setAttachmentItemExmaple() {
        const attachmentList: IAttachmentData[] = await this.server.retrieveData();
        
        for (const attachment of attachmentList) {
          const host = attachment.__metadata.uri.split('/s/')[0]; // server implementation depending on your specific usage
          const serverRelativeUrl = attachment.ServerRelativeUrl; // server implementation depending on your specific usage
          const url = encodeURI(host + serverRelativeUrl); // server implementation depending on your specific usage
    
          const file: IAttachmentData = {
            id: attachmentList.length,
            new: false,
            remove: false,
            name: attachment.FileName,
            url,
            icon: AttachmentIcon.get(attachment.FileName)
          };
    
          this.attachmentFiles.push(file);
        }
    }
}
```
</details>
