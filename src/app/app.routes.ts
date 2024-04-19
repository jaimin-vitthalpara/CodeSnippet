import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ViewsnippetsComponent } from './components/viewsnippets/viewsnippets.component';


export const routes: Routes = [
    {
        path: 'signup' , component : SignupComponent
    },
    {
        path : 'login' , component : LoginComponent
    },
    {
        path : 'snippet' , component : SnippetComponent , canActivate: [authGuard]
    },
    {
        path : 'about' , loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    },
    {
        path : '' , component : HomeComponent
    },
    {
        path : 'viewsnippet/:id' , component : ViewsnippetsComponent
    },
    {
        path : '**' , component : NotfoundComponent
    }
];
