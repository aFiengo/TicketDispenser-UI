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
    showImage: boolean = false;
    listFilter: string = "";
    eventShows: IEventShow[] = [];
    filteredEvents: IEventShow[];
    buyTicket: IEventShow | undefined;
    categories: string[] = ['Music', 'Sports', 'Theatre', 'Comedy', 'Dance'];
    selectedCategory: string | undefined;
    router: any;
    constructor(private eventShowService: EventShowService) {

        this.filteredEvents = this.eventShows;
        
    }

    ngOnInit(): void {
        this.eventShowService.getEventShows().subscribe(data => { 
            this.eventShows = data; 
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
    filterByCategory(category?: string) {
        this.selectedCategory = category ? category : undefined;
        this.filteredEvents = this.selectedCategory
        ? this.eventShows.filter(event => event.category === this.selectedCategory)
        : this.eventShows;
    }

    buyTicketClicked(event : IEventShow): void {
        this.buyTicket = event;
        this.router.navigate(['../../purchase', this.buyTicket.id]);
    }
}