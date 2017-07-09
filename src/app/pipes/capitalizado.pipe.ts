/**
 * Created by darkklitos on 8/04/17.
 */
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "capitalizado"
})

export class CapitalizadoPipe implements PipeTransform {
	// transform ( value : string, arg1, arg2, arg3 ) : string {
	//   console.log ( value ); fomar uno
	//   console.log ( arg1 );
	//   console.log ( arg2 );
	//   console.log ( arg3 );

	// transform ( value : string, ...args : any[] ) : string {
	//   console.log ( value ); forma dos
	//   console.log ( args );

	transform(value: string, todas: boolean = true): string {
		value = value.toLocaleLowerCase();
		let nombres = value.split(" ");
		if (todas) {
			for (let i in nombres) {
				nombres[i] = nombres[i][0].toLocaleUpperCase() + nombres[i].substr(1);
			}
		} else {
			nombres[0] = nombres[0][0].toLocaleUpperCase() + nombres[0].substr(1);
		}

		return nombres.join(" ");
	}
}
