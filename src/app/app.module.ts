import { GaleryPage } from './../pages/galery/galery';
import { RememberpwsPage } from './../pages/rememberpws/rememberpws';
import { NewtreePage } from './../pages/newtree/newtree';
import { AdminPage } from './../pages/admin/admin';
import { TreePage } from './../pages/tree/tree';
import { InfosPage } from './../pages/infos/infos';
import { MyaccountPage } from './../pages/myaccount/myaccount';
import { NewaccountPage } from './../pages/newaccount/newaccount';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioProvider } from '../providers/usuario/usuario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    NewaccountPage,
    MyaccountPage,
    InfosPage,
    TreePage,
    AdminPage,
    NewtreePage,
    RememberpwsPage,
    GaleryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    NewaccountPage,
    MyaccountPage,
    InfosPage,
    TreePage,
    AdminPage,
    NewtreePage,
    RememberpwsPage,
    GaleryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider
  ]
})
export class AppModule {}
