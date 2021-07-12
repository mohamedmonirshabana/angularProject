import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'favorite',
    template: './favorite.component.html',
    styleUrls: ['./favorite.component.css'],
    inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit{
    
    isFavorite!: boolean;

    constructor() { }
    
    ngOnInit() { }

    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}