import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AlumnoModule } from './alumno/alumno.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { MovieModules } from './peliculas/peliculas.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      name: 'pokemon',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ladrillo88',
      database: 'pokemon',
      autoLoadEntities: true, //Esta es la mejor opción para que coja sólo las que haya en módulo
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      name: 'peliculas',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ladrillo88',
      database: 'peliculas',
      autoLoadEntities: true, //Esta es la mejor opción para que coja sólo las que haya en módulo
      synchronize: true,
    }),
    UsuarioModule,
    MoviesModule,
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
