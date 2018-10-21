(function() {

    // let graph = [
    //     { val: 1, key: 0, adj =[{ v: vertices[1], weight: 5 }, { v: vertices[2], weight: 7 }] },
    //     { val: 2, key: Number.MAX_SAFE_INTEGER, adj =[{ v: vertices[2], weight: 6 }, { v: vertices[0], weight: 5 }] },
    //     { val: 3, key: Number.MAX_SAFE_INTEGER, adj =[{ v: vertices[0], weight: 7 }, { v: vertices[1], weight: 6 }] }
    // ];
    let graph = [
        [Number.MAX_SAFE_INTEGER, 5, 7],
        [5, Number.MAX_SAFE_INTEGER, 6],
        [7, 6, Number.MAX_SAFE_INTEGER]];

    console.log(primsMST(graph));

})();


function primsMST(graph) {
    let visited = [], dist = [], through = {}, rv = [], count = 0;
    for (let i in graph) dist.push(Number.MAX_SAFE_INTEGER);
    dist[0] = 0;

    while (count < graph.length) {
        let min = findMin();
        if (through[min] !== undefined) rv.push({ u: through[min], v: min });
        visited[min] = true;
        count++;
        dist[min] = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < dist.length; i++) {
            if (!visited[i] && dist[i] > graph[min][i]) {
                dist[i] = graph[min][i];
                through[i] = min;
            }
        }
    }

    function findMin() {
        let min = Number.MAX_SAFE_INTEGER, minInd = -1;
        for (el in dist) {
            min = min < dist[el] ? min : dist[el];
            minInd = min < dist[el] ? minInd : el;
        }
        return parseInt(minInd);
    }
    return rv;
}