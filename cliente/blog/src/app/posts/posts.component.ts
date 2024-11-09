import { Component } from '@angular/core';
import { HeaderComponent } from '../page elements/header/header.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

}
