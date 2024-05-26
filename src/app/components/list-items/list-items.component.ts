import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1433290764.
  @Input() items:Item[] = [];

  @Output() removeEvenEmitter: EventEmitter<number> = new EventEmitter();

  
  onRemove(id:number){
    this.removeEvenEmitter.emit(id);
  }
}
