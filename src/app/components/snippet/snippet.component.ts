import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippets } from '../../../model/snippetts';

@Component({
  selector: 'app-snippet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './snippet.component.html',
  styleUrl: './snippet.component.css'
})
export class SnippetComponent {

  constructor(private dbService: DbService){}

  title = new FormControl("" ,
  [
    Validators.required
  ])

  code = new FormControl("" ,
  [
    Validators.required,
    Validators.minLength(6)
  ])

  // we have to group both proprty
  snippetForm = new FormGroup({
    title: this.title,
    code: this.code
  })

  async save() {
    // console.log(this.snippetForm.value);
    await this.dbService.createSnippet(this.snippetForm.value as Snippets)
  }

  reset() {
    console.log(this.snippetForm.reset());
  }

}
