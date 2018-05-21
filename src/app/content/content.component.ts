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

  constructor() { }

  ngOnInit() {
  }

  thumpsUp(story: Story): void {
    story.rate ++;
  }

  thumpsDown(story: Story): void {
    story.rate --;
  }

}
