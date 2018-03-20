import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'selector-uberflug',
  template: `
    <div class="dropdown">
  <button class="btn btn-default dropdown-toggle btn-block text-left" type="button" id="dropdownMenu1" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="true">
    <span *ngIf="optionSelected">
      <span *ngIf="!optionSelected.id">
        {{configurations.placeholder}}
      </span>
      <span *ngIf="optionSelected.id">
        <span class="item-selected" (click)="clear()"></span>
        {{optionSelected.name}}
      </span>
    </span>
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li class="sticky-search">
      <input type="text" class="form-control search-select" [(ngModel)]="search" [placeholder]="configurations.search_text" (keyup)="searchElement()">
    </li>

    <div *ngIf="resultSearch.length == 0 && items && carga">
      <li *ngFor="let item of items" (click)="itemSelected(item)" [ngClass]="{'selected': item.id == optionSelected.id}">
        <a>{{item.name}}</a>
      </li>
    </div>

    <div *ngIf="resultSearch.length !== 0  && items && carga">
      <li *ngFor="let item of resultSearch" (click)="itemSelected(item)" [ngClass]="{'selected': item.id == optionSelected.id}">
        <a>{{item.name}}</a>
      </li>
    </div>

  </ul>

</div>
  `
})
export class SelectComponent implements OnInit {
  optionSelected: any = {};
  search: string;
  resultSearch: Items[] = [];
  carga: boolean = false;
  // INPUTS
  @Input() configurations: Configuration = {
    placeholder: "Placeholder",
    search_text: "Búsqueda"
  }
  @Input() items: Items[];
  @Input() elementIdSelected: any;
  // @Input() zoneIdSelected
  // @Input() beaconIdSelected
  // OUTPUTS
  @Output() selected: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.carga = true
    }, 500)
  }

  ngOnChanges() {
    setTimeout(() => {
      if (this.elementIdSelected && this.items) {
        this.optionSelected = this.objectFindByKeyEntry(this.items, "id", this.elementIdSelected);
      }

      // if(this.zoneIdSelected && this.items){

      //   console.log(this.objectFindByKeyEntry(this.items, "id", this.zoneIdSelected))
      //   this.optionSelected = this.objectFindByKeyEntry(this.items, "id", this.zoneIdSelected);
      //   console.log("opt",this.optionSelected)
      //   console.log("opt",this.items)

      // }

      // if(this.beaconIdSelected && this.items){

      //   console.log(this.objectFindByKeyEntry(this.items, "id", this.beaconIdSelected))
      //   this.optionSelected = this.objectFindByKeyEntry(this.items, "id", this.beaconIdSelected);
      // }

    }, 2500)



  }

  itemSelected(item) {
    // console.log(item)
    this.optionSelected = item;
    setTimeout(() => {
      this.selected.emit(this.optionSelected.id)
      // console.log(this.optionSelected)
    }, 50)
  }

  clear(){
    this.optionSelected = {}
  }

  searchElement() {
    this.resultSearch = this.objectFindByKey(this.items, "name", this.search);
  }

  objectFindByKey(array, key, value): any[] {
    let res: any[] = []
    for (var i = 0; i < array.length; i++) {
      if (array[i][key].includes(value)) {
        res.push(array[i])
      }
    }
    return res
  }

  objectFindByKeyEntry(array, key, value) {
    let res
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] == value) {
        res = array[i]
      }
    }
    return res
  }

}


export interface Configuration {
  placeholder?: string;
  search_text?: string;
}

export interface Items {
  id?: number;
  name?: string;
}