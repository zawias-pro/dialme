import Dexie, { Table } from 'dexie';

export interface Coffee {
  id?: number;
  name: string;
}

export class Database extends Dexie {
  coffees!: Table<Coffee>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      coffees: '++id, name'
    });
  }
}

export const db = new Database();
