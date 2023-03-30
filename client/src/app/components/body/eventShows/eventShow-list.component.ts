import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IEventShow } from "./eventShow";
import { EventShowService } from "./eventShow.service";

@Component({
    selector: 'app-eventShows',
    templateUrl: './eventShow-list.component.html',
    styleUrls: ['./eventShow-list.component.css'],
    providers: [EventShowService]
})
export class EventListComponent implements OnInit{
    
    pageTitle: string = 'Events List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "";
    eventShows: IEventShow[] = [];
    constructor(private eventShowService: EventShowService) { }

    ngOnInit(): void {
        this.eventShowService.getEventShows().subscribe(data => { 
            this.eventShows = data; 
        });
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}