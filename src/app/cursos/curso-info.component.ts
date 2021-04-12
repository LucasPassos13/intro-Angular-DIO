import { CursoService } from './curso.service';
import { CursoListComponent } from './curso-list.component';
import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from '@angular/router'
import { Curso } from './curso';


@Component({
    templateUrl: './curso-info.component.html'
})

export class CursoInfoComponent implements OnInit {

    course: Curso;

    constructor (private activatedRoute: ActivatedRoute, private cursoService: CursoService ){}

    ngOnInit(): void{
        this.course = this.cursoService.retriveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }

    save(){
        this.cursoService.save(this.course);
    }
} 