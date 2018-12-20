import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.sass']
})
export class ListaAddComponent implements OnInit {

  item: Item = {
    name: ''
  };

  constructor(private conexion: ConexionService) { }

  ngOnInit() {
  }

  agregar() {
    this.conexion.addItem(this.item);
    this.item.name = '';
  }

}
