import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPockeId : string;
  searchPokeName = '';
  pok : Pokemon [] = [];

  constructor( private pokeService: PokeAPIServiceService) { 
    /*this.pok.push (new Pokemon ('1','Reptincel'));
    this.pok.push (new Pokemon ('2','Bulbizarre'));
    this.pok.push (new Pokemon ('3','Herbizarre'));
    this.pok.push (new Pokemon ('4','Florizarre'));
    this.pok.push (new Pokemon ('5','Salamèche'));*/
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {

      console.log(data.results);

      data.results.forEach ((e, index) => {
        this.pok.push (new Pokemon (index,e.name,e.url));

      });
    }) ;
  }
  go(){
    console.log (this.selectedPockeId);
  }

}
