import { Injectable } from '@nestjs/common';
import { Data } from './Data.dto';


@Injectable()
export class AppService {
  getHello(): Data {
    return { 
      load: true, 
      message: "BFF is setup and communicating successfully!" };
  }
}
