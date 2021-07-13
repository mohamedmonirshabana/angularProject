import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    
    styles: [
        `
             .glyphicon{
                color:green;
            }
            .glyphicon-star{
                background:black;
            }
        `
    ],
    styleUrls: ['./favorite.component.css'],
     
    // inputs: ['isFavorite']
})
export class FavoriteComponent{
    @Input('isFavorite') isSelected!: boolean;
    @Output('change') click = new EventEmitter();
    

    onClick() {
        this.isSelected = !this.isSelected;
        this.click.emit({ newValue: this.isSelected });
    }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}