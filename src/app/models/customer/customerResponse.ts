import { Customer } from 'src/app/models/customer/customer';
import { page } from '../page';
export interface CustomerResponse {
  statusCode:number;
  customers: Customer[];
  pages: page[];
}
