(function(){
	
	//res http://en.wikipedia.org/wiki/Set_(mathematics)

	Array.prototype.subset = function( sub ){
		if( !sub || !sub.length )return false;

		for( var i = 0 ; i < sub.length ; i++ ){
			if( this.indexOf( sub[i] ) == -1 )return false;
		}

		return sub;
	}

	Array.prototype.union = function(set){
		if( !set || !set.length )return this;

		var tmp1 = [] , tmp2 = [] ;

		for (var i = 0 ; i < this.length ; i++) {
			tmp1.push(this[i]);
		};

		for( var i = 0 ; i < set.length ; i++ ){
			if( this.indexOf( set[i] ) == -1 ){
				tmp2.push(set[i]);
			}
		}

		while( tmp2.length ){
			tmp1.push( tmp2.shift() );
		}

		return tmp1;
	};

	Array.prototype.intersection = function(set){
		if( !set || !set.length )return false;

		var tmp = [];

		for( var i = 0 ; i < set.length ; i++ ){
			if( this.indexOf( set[i] ) != -1 ){
				tmp.push(set[i]);
			}
		}

		return tmp.length ? tmp : false;
	};

})();
