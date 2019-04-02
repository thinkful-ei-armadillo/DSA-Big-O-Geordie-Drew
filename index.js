function towerOfHanoi(disc, src, aux, dst){
    if(disc > 0){
        towerOfHanoi(disc - 1, src, dst, aux);
        console.log("Move disc " + disc + " from " + src + " to " + dst)
        towerOfHanoi(disc - 1, aux, src, dst);
    }
}

towerOfHanoi(5, "src", "aux", "dst");