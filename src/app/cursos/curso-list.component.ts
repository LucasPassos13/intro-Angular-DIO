import { CursoService } from './curso.service';
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnInit } from "@angular/core";
import { Curso } from "./curso";

@Component({
   // selector: 'app-curso-list',
    templateUrl: './curso-list.component.html'

})
export class CursoListComponent implements OnInit{

    filtroDeCursos: Curso[] = [];

    _cursos: Curso[] = [];
    _filterBy: string;

    constructor(private cursoService: CursoService){

    }

    ngOnInit(): void{

        this._cursos = this.cursoService.retriveAll();
        this.filtroDeCursos = this._cursos;
    }

    set filter(value: string){
        this._filterBy = value;

        this.filtroDeCursos = this._cursos.filter((curso: Curso) => curso.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

}