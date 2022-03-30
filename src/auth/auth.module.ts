import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [ClientsModule.register([
    {
      name: 'userService',
      transport: Transport.TCP,
      options: {
        host: "localhost",
        port: 3001,
      }
    }
  ]),
  JwtModule.register({
    secret: "passphrase",
    signOptions: { expiresIn: '60s' }
  })
  ],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule { }
