import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "contrasena"
})
export class ContrasenaPipe implements PipeTransform {
	// resultado : string;

	transform(value: any, activo: boolean): any {

		// if ( activo ) {
		//   this.resultado = "";
		//   for ( let i = 0; i < value.length; ++i ) {
		//     this.resultado += "*";
		//   }
		// } else {
		//   this.resultado = value;
		// }
		// return this.resultado;
		return activo ? Array(value.length + 1).join("*") : value;
	}

}
