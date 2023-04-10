import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
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
    showImage: boolean = true;
    listFilter: string = "";
    eventShows: IEventShow[] = [];
    filteredEvents: IEventShow[] = [];
    buyTicket: IEventShow | undefined;
    category: string = '';
    selectedCategory: string | undefined;
    router: any;
    constructor(private eventShowService: EventShowService) {

        this.filteredEvents = this.eventShows;
        
    }

    ngOnInit(): void {
        this.eventShowService.getEventShows().subscribe(data => { 
            this.eventShows = data; 
            this.filteredEvents = this.eventShows;
        });
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onFilterChange(): void {
        this.filteredEvents = this.listFilter
        ? this.eventShows.filter((event) =>
            event.name.toLowerCase().includes(this.listFilter.toLowerCase())
            )
        : this.eventShows;
    }
    getEvents() {
        if (this.category) {
            this.eventShowService.getEventsByCategory(this.category).subscribe(events => {
                this.eventShows = events;
                this.filteredEvents = this.eventShows;
            });
        } else {
            this.eventShowService.getEventShows().subscribe(events => {
                this.eventShows = events;
                this.filteredEvents = this.eventShows;
            });
        }
    }
    /*filterByCategory(category?: string) {
        this.selectedCategory = category ? category : undefined;
        this.filteredEvents = this.selectedCategory
        ? this.eventShows.filter(event => event.category === this.selectedCategory)
        : this.eventShows;
    }*/

    buyTicketClicked(event : IEventShow): void {
        this.buyTicket = event;
        this.router.navigate(['../../purchase', this.buyTicket.id]);
    }
}