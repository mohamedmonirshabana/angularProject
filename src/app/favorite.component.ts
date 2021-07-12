import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'favorite',
    template: './favorite.component.html',
    styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{
    @Input()
    isFavorite!: boolean;

    constructor() { }
    
    ngOnInit() { }

    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}