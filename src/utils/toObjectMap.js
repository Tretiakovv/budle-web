export function toObjectMap (col) {
    return col.map((item, index) => new Object({id: index, name: item}))
}