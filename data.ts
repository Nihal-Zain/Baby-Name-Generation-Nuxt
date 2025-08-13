interface Name{
    id:number,
    name: string;
    gender: string;
    popularity: string;
    length: string;
}
export enum Gender {
    BOY = 'boy',
    GIRL = 'girl',
    UNISEX = 'unisex'
}
export enum Popularity {
    TRENDY = 'trendy',
    UNIQUE = 'unique'
}
export enum NameLength {
    SHORT = 'short',
    ALL = 'all',
    LONG = 'long'
}

export const names:Name[] = [
    {
        id: 1,
        name: 'John',
        gender: Gender.BOY,
        popularity: Popularity.TRENDY,
        length: NameLength.SHORT
    },
    {
        id: 2,
        name: 'Jane',
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: NameLength.ALL
    },
    {
        id: 3,
        name: 'Bob',
        gender: Gender.UNISEX,    
        popularity: Popularity.TRENDY,
        length: NameLength.LONG 
    },
    {
        id: 4,
        name: 'Alice',
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: NameLength.ALL
    },
    {
        id: 5,
        name: 'Charlie',
        gender: Gender.BOY,
        popularity: Popularity.TRENDY,
        length: NameLength.LONG
    },
    {
        id: 6,
        name: 'Emily',
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: NameLength.LONG
    },
    {
        id: 7,
        name: 'David',
        gender: Gender.BOY,
        popularity: Popularity.TRENDY,
        length: NameLength.SHORT
    },
    {
        id: 8,
        name: 'Olivia',
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: NameLength.ALL
    },
    {
        id: 9,
        name: 'Ethan',
        gender: Gender.BOY,
        popularity: Popularity.UNIQUE,
        length: NameLength.LONG
    },
    {
        id: 10,
        name: 'Sophia',
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: NameLength.ALL
    }

]