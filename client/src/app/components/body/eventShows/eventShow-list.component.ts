import { Component } from "@angular/core";

@Component({
    selector: 'app-eventShows',
    templateUrl: './eventShow-list.component.html',
    styleUrls: ['./eventShow-list.component.css']
})
export class EventListComponent {
    pageTitle: string = 'Events List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "cart";
    eventShows: any[] = [
        {

        }
    ];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}