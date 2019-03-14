import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed augue sit amet massa ullamcorper semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ullamcorper est velit, et fermentum velit eleifend sed. Fusce dignissim mi quis orci pharetra volutpat.',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed augue sit amet massa ullamcorper semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ullamcorper est velit, et fermentum velit eleifend sed. Fusce dignissim mi quis orci pharetra volutpat.',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Et voila un dernier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed augue sit amet massa ullamcorper semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ullamcorper est velit, et fermentum velit eleifend sed. Fusce dignissim mi quis orci pharetra volutpat.',
      loveIts: 0,
      created_at: Date()
    }
  ]
  
}
