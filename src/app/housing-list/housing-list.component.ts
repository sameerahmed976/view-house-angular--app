import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.scss'],
})
export class HousingListComponent implements OnInit {
  results: HousingLocation[] = [];

  @Input() locationList: HousingLocation[] = [];

  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();

  constructor() {}

  ngOnInit(): void {}

  searchHousingLocation(search: string) {
    // console.log(search);
    if (!search) return;
    this.results = this.locationList.filter((i) =>
      i.city.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
    // console.log(location);
  }
}
