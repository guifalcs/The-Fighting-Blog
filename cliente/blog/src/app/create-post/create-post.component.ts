import { Component } from '@angular/core';
import { HeaderComponent } from '../page elements/header/header.component';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

}
