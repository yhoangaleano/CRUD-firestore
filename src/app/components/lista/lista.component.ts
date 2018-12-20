import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

  items: Array<Item>;

  item: Item = {
    name: ''
  };

  @ViewChild('closeModal') closeModal: ElementRef;

  constructor(private conexion: ConexionService) {
    this.conexion.getItems().subscribe(items => {
      this.items = items;
    });
   }

  ngOnInit() {
  }

  eliminar(item) {
    this.conexion.delete(item);
  }

  editar(item) {
    this.item = item;
  }

  actualizar() {
    this.conexion.update(this.item);
    this.closeModal.nativeElement.click();
  }

}
