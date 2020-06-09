var idade = 18;
var carta = true;

switch (true) {
    case (idade>=18 && carta==true): console.log("Permitdo");
        break;
    case (idade>=18 && carta==false): console.log("Nao possui carta");
        break;
    default: console.log("Nao Permitdo");
        break;
}