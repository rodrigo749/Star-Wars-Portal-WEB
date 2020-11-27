import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']

})
export class HomeComponent {

    @Input() isShow: boolean = false;

    reciverToggle(event) {
        // receive event of header
        this.isShow = event;
    }
}