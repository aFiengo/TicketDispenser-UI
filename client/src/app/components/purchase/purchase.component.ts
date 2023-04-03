import { Component, OnInit } from "@angular/core";
import { EventShowService } from "../body/eventShows/eventShow.service";
import { ActivatedRoute } from "@angular/router";
import { IEventShow, IZone } from "../body/eventShows/eventShow";

@Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit {
    event!: IEventShow;
    zones!: IZone[];

    constructor(private eventShowService: EventShowService, private route: ActivatedRoute) { }

    ngOnInit() {
        const eventId: string | null = this.route.snapshot.paramMap.get('eventId');
        if (eventId) {
        const id: number = parseInt(eventId, 10);
        this.eventShowService.getEventById(id)
        .subscribe(event => {
        this.event = event;
        this.zones = event.zones;
        });
        }
    }
}