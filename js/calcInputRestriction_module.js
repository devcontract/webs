var str = 'mississippi';

export function find_occurences(str, char_to_count){
    return str.split(char_to_count).length - 1;
}

find_occurences(str, 'i') //outputs 4
