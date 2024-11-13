import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  
    { path: 'home', component: HomeComponent },
    { path: 'createPost', component: CreatePostComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'createPosts', component: CreatePostComponent },
    { path: 'signUp', component: SingUpComponent }          
];
