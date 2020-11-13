import {Observable} from "rxjs";
import {map} from "rxjs/operators";

const notifications$ = new Observable(observer => {
    const interval = setInterval(() => {
        observer.next('New notification');
    }, 2000);

    return () => clearInterval(interval);
});

const enhancedNotifications$ = notifications$.pipe(
    map(message => {
        return `${message} ${new Date()}`;
    })
);

const subscription = enhancedNotifications$.subscribe(console.log);

setTimeout(() => subscription.unsubscribe(), 8000);
