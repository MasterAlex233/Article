// const VW_GTI = {} // const Car = new Object(); 
// VW_GTI.name = 'Golf GTI'
// VW_GTI.version = '2021'
// VW_GTI.manufacturers = 'VW'
// VW_GTI.show = function () { alert(this.name) }

// const AMG_A45 = {}
// AMG_A45.name = 'A45'
// AMG_A45.version = '2021'
// AMG_A45.manufacturers = 'BENZ_AMG'
// AMG_A45.show = function () { alert(this.name) }

//在经过Constructor包装后
function Car(name, version, manufacturer) {
	this.name = name
	this.version = version
	this.manufacturer = manufacturer
	this.show = () => console.log(this.name)
}


Car.prototype.getCar = function () {
	console.log(this)
}

Car.getVersion = function (car) {
	console.log(car.version)
}

const VW_GTI = new Car('Golf GTI', '2021', 'VW')
const AMG_A45 = new Car('A45', '2021', 'BENZ_AMG')

VW_GTI.getCar()
VW_GTI.getVersion(VW_GTI)
