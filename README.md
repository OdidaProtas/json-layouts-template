### JSON pages layout template.

***
Work in progress. Come back soon 😊
***

Hompage: <https://ds-json-layouts-template.web.app/>

#### Built with.

1. React.js (Context API)
2. Materail UI.
3. Vite
5. Typescript
6. React-router-dom (v5.3)
7. Capacitor.js

##### Supports

1. SSR.
2. CSR
3. IOS
4. Android
5. Electron

#### Env
`VITE_APP_LAYOUTS_URL=https://builder.vercel.app/api

PORT=5173

VITE_APP_KEY='*'`

#### Web (CSR && SSR) setup instructions.

1. Git clone `git clone {{this repository}}` or use as a template.
2. Install node dependencies with `npm install`
3. Start development server: `npm run dev`, for SSR `npm run ssr`


#### Electron setup.

1. Build the project `npm run build`
2. `cd electron`
4. Install node dependencies: `npm install`
5. Run `npm run sync` to sync web dir with new build.
6.  Run `npm run open-electron` to view changes.


#### Android setup
1. Requires android studio
5. Run `npm run sync` to sync web dir with new build.
2. Open with `npm run open-android` to open in android studio
3. Run with `npm run run-android`

#### IOS setup
1. Requires  Mac os and XCode 
5. Run `npm run sync` to sync web dir with new build.
2. Open with `npm run open-ios` to open in android studio
3. Run with `npm run run-ios`

#### Capacitor plugins (Access native functionality or run compute intensive)

#### Existing plugins
1. Official plugins: <https://capacitorjs.com/docs/apis>
2. Community plugins: <https://github.com/capacitor-community>
3. Cordova plugins: <https://cordova.apache.org/plugins/>
***
Some plugins are only available for specific platforms.
***

##### Creating custom plugins
Requires knowledge of Java for Android, Swift for Ios and Typescript for electron.

#### Custom plugins instructions
1. Android and ios. <https://capacitorjs.com/docs/plugins/creating-plugins>
2. Electron: <https://capacitor-community.github.io/electron/docs/creatingplugins>
