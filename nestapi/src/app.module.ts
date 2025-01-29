import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AlumnoModule } from './alumno/alumno.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      name: 'base1',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ladrillo88',
      database: 'base1',
      autoLoadEntities: true, //Esta es la mejor opción para que coja sólo las que haya en módulo
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      name: 'base2',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ladrillo88',
      database: 'base2',
      autoLoadEntities: true, //Esta es la mejor opción para que coja sólo las que haya en módulo
      synchronize: true,
    }),
    UsuarioModule,
    AlumnoModule,
    BibliotecaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
