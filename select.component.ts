import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  optionSelected:any = {};
  search:string;
  resultSearch:Items[] = [];
  carga:boolean = false;
  // INPUTS
  @Input() configurations:Configuration ={
    placeholder: "Placeholder",
    search_text: "Búsqueda"
  }
  @Input() items:Items[];
  @Input() elementIdSelected:any;
  // @Input() zoneIdSelected
  // @Input() beaconIdSelected
  // OUTPUTS
  @Output() selected:any = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.carga = true
    }, 500)
  }

  ngOnChanges(){
      setTimeout(() =>{
        if(this.elementIdSelected && this.items){
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

  itemSelected(item){
    console.log(item)
    this.optionSelected = item;
    setTimeout(()=>{
      this.selected.emit(this.optionSelected.id)
      console.log(this.optionSelected)
    }, 50)
  }


  searchElement(){
    this.resultSearch = this.objectFindByKey(this.items, "name", this.search);
  }

  objectFindByKey(array, key, value):any[] {
    let res:any[] = []
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