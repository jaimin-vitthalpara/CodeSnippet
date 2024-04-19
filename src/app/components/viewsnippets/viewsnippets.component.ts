import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewsnippets',
  standalone: true,
  imports: [],
  templateUrl: './viewsnippets.component.html',
  styleUrl: './viewsnippets.component.css'
})
export class ViewsnippetsComponent {

  codeSnippet = {
    title: "",
    code: ""
  }

  constructor(private dbService: DbService, private route: ActivatedRoute){}

  ngOnInit() {

    

    const docId = this.route.snapshot.paramMap.get('id');
    this.dbService.getSnippetById(docId!).then((data:any) => {
    this.codeSnippet = data
    })
  }

}
