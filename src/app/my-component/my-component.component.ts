import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPockeId : string;
  searchPokeName = '';
  pok : Pokemon [] = [];

  constructor() { 
    this.pok.push (new Pokemon ('1','Reptincel'));
    this.pok.push (new Pokemon ('2','Bulbizarre'));
    this.pok.push (new Pokemon ('3','Herbizarre'));
    this.pok.push (new Pokemon ('4','Florizarre'));
    this.pok.push (new Pokemon ('5','Salamèche'));
  }

  ngOnInit(): void {
  }

}
