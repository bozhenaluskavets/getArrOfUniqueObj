let arr = [
    { id: 1 },
    { id: 2 },
    { id: 2 },
    { id: 3 },
    { id: 1 },
    { id: 4 },
    { id: 1 },
];

//  getArrOfUniqueObj(arr)
// [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

function getArrOfUniqueObj(arr) {
    return arr.filter((value, index, self) =>
        index === self.findIndex((item) => (
            item.id === value.id
        ))
    )
}

console.log(getArrOfUniqueObj(arr))


