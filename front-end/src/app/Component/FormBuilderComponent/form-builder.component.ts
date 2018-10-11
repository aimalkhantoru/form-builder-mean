import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/httpService';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  schema: any;
  model: any;
  constructor(private httpService: HttpService) {
  }
  async ngOnInit() {
    let responce = await this.httpService.getSchema();
    console.log(responce.json());
    this.schema =  responce.json();
    this.model = {
      'firstName': 'John',
      'lastName': 'Doe',
      'bornOn': '1800-12-12',
      'categories': [
        'cat',
        'dog'
      ],
      'moreInfo': true,
      'survey': {
        'q2': {
          'color': '#aaa000',
          'zip': 15
        }
      },
      'favoriteColor': '#aaafff',
      'transactionNumber': 123456,
      'transactionDescription': 'Payment for your subscription',
      'category': [
        'hightech'
      ],
      'password': 'admin',
      'deliveryService': 'fedex',
      'colors': []
    };
  }
}
