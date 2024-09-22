import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    console.log('AAAAAAAAAAAAAAAAAAAAAAA')
    console.log(this.http);
    this.http.get('http://localhost:3000/api')
  }
}
