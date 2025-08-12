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

const names:Name[] = [
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
    }]