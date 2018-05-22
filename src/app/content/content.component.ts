import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { STORIES } from '../mock-stories';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  stories = STORIES;

  selectedStory : Story;

  constructor() { }

  ngOnInit() {
  }

  thumpsUp(story: Story): void {
    story.rate ++;
  }

  thumpsDown(story: Story): void {
    story.rate --;
    this.ordenar();
  }

  onSelect(story: Story): void {
    this.selectedStory = story;
    this.ordenar();
  }

  ordenar() {

    let len = this.stories.length; 
    let aux : Story;

    for(let i = 0; i<(len-1); i++) {
      if(this.stories[i].rate < this.stories[i+1].rate) {
        aux               = this.stories[i];
        this.stories[i]   = this.stories[i+1];
        this.stories[i+1] = aux;
        i = i-2;
      }
    }
  }

}
