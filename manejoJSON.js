var cadenaJSON = `{
    "contacto":[
        {
            "nombre" : "Wilson Aceros",
            "edad" : 31,
            "estado" : false,
            "direccion" : "Amazonia, Bello",
            "telefono" : [
                {"personal": 3164253393,
                "casa" : "no tiene"
            }
            ],
            "mascos" : [],
            "estadoCivil" : null
        },
        {
            "nombre" : "Jesica Sanchez",
            "edad" : 28,
            "estado" : true,
            "direccion" : "Lagos, Bucaramanga",
            "telefono" : [
                {"personal": 3165265654,
                "casa" : "no tiene"
            }
            ],
            "mascos" : [],
            "estadoCivil" : "casado"
        }
    ]
}`;

// let cadenaJSON = require('contacto.json');
console.log(typeof( cadenaJSON));
var contactosJSON = JSON.parse(cadenaJSON);
console.log(typeof(contactosJSON));
console.log(contactosJSON);

var cadenaJSON2 = JSON.stringify(contactosJSON);
console.log(typeof(cadenaJSON2));
console.log(cadenaJSON2);