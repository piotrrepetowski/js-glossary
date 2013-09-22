var circle = {};

circle.radius = 5;
circle.area = function(){
	// the question is, what is "this" referencing here ?
	return this.radius * this.radius * Math.PI;
};