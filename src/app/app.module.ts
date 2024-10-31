// import { EnvironmentInjector, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from './header/header.component';
// import { MovieComponent } from './movie/movie.component';
// import { HttpClientModule } from '@angular/common/http';

// const routes: Routes = [
//   {
//     path: 'login', loadChildren: () => import('./login/login.component').then(m => m.LoginComponent),
//     data: {
//       seo: {
//         title: 'Popular movies and series published by @NgDevelop',
//         metaTags: [
//           { name: 'description', content: 'Types of Blogs published by @NgDevelop' },
//           { property: 'og:title', content: 'Popular Blogs and Articles published by @NgDevelop' },
//           {proprety: 'og:description', content: 'Types of Blogs published by @NgDevelop: Guideline of common issues occurred during angular app development, Shortcut Methods for fast development etc.' },
//           { name: "twitter:card", content: "summary_large_image" },
//         ]
//       }
//     }
//   },
// ];

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     HomeComponent,
//     HeaderComponent,
//     MovieComponent
//   ],
//   imports: [
//     RouterModule.forRoot(routes, {
//     initialNavigation: 'enabledBlocking'
// }),
//     BrowserModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpClientModule

//   ],
//   exports: [RouterModule],
//   bootstrap: [AppComponent]
// })
// export class AppModule {
  
//  }





// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from './header/header.component';
// import { MovieComponent } from './movie/movie.component';
// import { HttpClientModule } from '@angular/common/http';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'movie', component: MovieComponent },
//   { path: '**', component: LoginComponent }  // Fallback route
// ];

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     HomeComponent,
//     HeaderComponent,
//     MovieComponent
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot(routes),
//     FormsModule,
//     ReactiveFormsModule,
//     HttpClientModule
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { StarRatingComponent } from './feature/star-rating/star-rating.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
