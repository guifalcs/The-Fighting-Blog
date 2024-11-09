import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  
    { path: 'home', component: HomeComponent },
    { path: 'createPost', component: CreatePostComponent },
    { path: 'posts', component: PostsComponent }          
];
