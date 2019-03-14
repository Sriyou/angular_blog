import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLove: number;
  @Input() postDate: Date;

  constructor() { }

  ngOnInit() {
  }

  addLike() {
    this.postLove ++;
  }

  removeLike() {
    this.postLove = this.postLove - 1;
  }

  ifLoveIsHigh(){
    if(this.postLove > 0){
      return true;
    }
  }
  ifLoveIsLow(){
    if(this.postLove < 0){
      return true;
    }
  }

}
