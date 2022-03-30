import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';


@Controller()
export class AppController {

  @MessagePattern({ cmd: "index/ping" })
  ping(_: any) {
    return of("pong").pipe(delay(1000));
  }

}
