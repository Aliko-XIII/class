const human = {
    name: 'aliko',
    organs: {
        heart: 'aliko heart',
        fn: function () { console.log(this) },
        arr: () => { console.log(this) }
    }
}

human.organs.arr();