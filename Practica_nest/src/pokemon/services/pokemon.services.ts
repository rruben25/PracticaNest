import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../entities/pokemon.entity';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  create(createPokemonDto: CreatePokemonDto) {
    const pokemon = this.pokemonRepository.create(createPokemonDto);
    return this.pokemonRepository.save(pokemon);
  }

  findAll() {
    return this.pokemonRepository.find();
  }

  findOne(id: number) {
    return this.pokemonRepository.findOne({ where: { id } });
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonRepository.update(id, updatePokemonDto);
  }

  remove(id: number) {
    return this.pokemonRepository.delete(id);
  }
}
