import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() PostTitle:string;
  @Input() PostContent: string;
  @Input() PostLoveIts: number;
  @Input() PostDate: Date;



	onJaime(){
		this.PostLoveIts = this.PostLoveIts +1;
	}

	onJaimePas(){
		this.PostLoveIts = this.PostLoveIts -1;
	}

	getLoveIts(){
		return this.PostLoveIts;
	}

}
