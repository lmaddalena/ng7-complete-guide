import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  ngOnInit() {
  }

  onAddItem() {
    // utilizzare const al post di let per evitare di modificare il valore della variabile
    const name: string = this.nameInput.nativeElement.value;
    const amount: number = this.amountInput.nativeElement.value;

    this.ingredientAdded.emit(new Ingredient(name, amount));
  }
}
