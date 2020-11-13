import {BehaviorSubject, interval, Subject} from "rxjs";

// const subject$ = new Subject();
const bs$ = new BehaviorSubject("Initial Value");


const interval$ = interval(2000);
// interval$.subscribe(subject$)
interval$.subscribe(bs$ as Subject<any>)


const subscription = bs$.subscribe(console.log)

setTimeout(() => {
    subscription.unsubscribe();
    console.log("New Subscription");
    bs$.subscribe(console.log)
}, 4000)
