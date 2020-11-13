import {Observable} from "rxjs";

const greetingLady$ = new Observable(observer => {
    console.log('Inside Observable (proof of being lazy)');
    observer.next('Message 1');
    observer.next('message 2');
    observer.next('message 3');
    observer.complete();
});

console.log('Before calling subscribe on Observable');

greetingLady$.subscribe({
    next: console.log,
    complete: () => console.log('End of conversation with preety lady')
});
