import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {

  @Output() replyToggle = new EventEmitter(); //event of hidden/show menu
  isShow: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) {

  }

  toggle() {
    this.isShow = !this.isShow;
    this.replyToggle.emit(this.isShow);
  }

  ngOnInit() {
   

  }

}
