
gridView.generateData = function( size ) {

    var newData = [];

    var size = size || 100;
    var baseSize = 0;

    while( baseSize < size ) {
        baseSize++;
        newData.push( {
            "mk" : Math.floor( Math.random()*999 ) + 100 //3 digit
        } );
    }       
    return $q.all( newData );
}