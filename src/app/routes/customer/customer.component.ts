import { page } from './../../models/page';
import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer';
import { CustomerResponse } from 'src/app/models/customer/customerResponse';
import { CustomerService } from 'src/app/services/customer.service';
import { PoTableColumn } from '@po-ui/ng-components';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  page     : page[];
  customers: Customer[];
  statusCode: number;
  isLoading: boolean;
  showMoreDisabled: boolean;
  showLoadMoreButton: boolean;

  columns: Array<PoTableColumn> = [
    { property: 'codigo'        ,label: '#'             },
    { property: 'nome'          ,label: 'Nome'          },
    { property: 'limiteCredito' ,label: 'Limite'        },
    { property: 'endereco'      ,label: 'Endereço'      },
    { property: 'cidade'        ,label: 'Cidade'        },
    { property: 'cep'           ,label: 'CEP'           },
    { property: 'estado'        ,label: 'UF'            },
    { property: 'pais'          ,label: 'País'          },
    { property: 'contato'       ,label: 'Contato'       },
    { property: 'telefone'      ,label: 'Tel'           },
    { property: 'email'         ,label: 'E-mail'        },
    { property: 'representante' ,label: 'Representante' }
  ]




  constructor(private service: CustomerService ){
    this.customers = [];
    this.page = [];
    this.statusCode = 0;
    this.isLoading = true;
    this.showMoreDisabled = true;
    this.showLoadMoreButton = false;

  }

  onBuscaClientes(){
    this.service.listCustomer().subscribe((response: CustomerResponse) => {
      this.customers = response.customers;
      this.page = response.pages;
      this.statusCode = response.statusCode;
      console.log('rowCont ' + this.page[0].rowCont);
      console.log('nextPage ' + this.page[0].nextPage);

      if (this.page[0].rowCont > 0 && this.page[0].nextPage > 0){
        this.showLoadMoreButton = true;
      }
    });
  };
  onBuscaMaisClientes(){
      //console.log('rowCont ' + this.page[0].rowCont);
      //console.log('nextPage ' + this.page[0].nextPage);
      console.log('carregando...');
      this.service.listCustomer(this.page[0].sizePage, this.page[0].nextPage).subscribe((response: CustomerResponse) => {
        this.customers = [...this.customers, ...response.customers];
        this.page = response.pages;
        this.statusCode = response.statusCode;
        console.log('rowCont ' + this.page[0].rowCont);
        console.log('nextPage ' + this.page[0].nextPage);

        if (this.page[0].rowCont > 0 && this.page[0].nextPage > 0){
          this.showLoadMoreButton = true;
        }
      });
  }

}
