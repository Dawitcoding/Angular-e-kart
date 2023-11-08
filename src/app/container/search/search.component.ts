import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  
  @Output()
  SearchTextChanged = new EventEmitter<string>();

  onSearchTextChanged(){
    this.SearchTextChanged.emit(this.searchText)
  }

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }
}
