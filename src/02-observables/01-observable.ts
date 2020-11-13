import { Observable, UnsubscriptionError, Observer } from 'rxjs';

const observer: Observer<string> = {
	next: (valor) => console.log(valor),
	complete: () => console.log('Completed'),
	error: (error) => console.warn(error)
};

const obs$ = new Observable<string>((subs) => {
	subs.next('Hello');
	subs.next('World');

	subs.next('Hola');
	subs.next('Mundo');

	// Force error
	const a = undefined;
	a.text = 'This is going to explode';

	subs.complete();

	subs.next('Hello');
	subs.next('World');
});

obs$.subscribe(observer);
