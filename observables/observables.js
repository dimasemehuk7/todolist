// console.log(1);
// const obs = new Observable((observer) => {
//   console.log(3);
//   observer.next('MESSAGE1');
//   observer.next('MESSAGE2');
//   observer.next('MESSAGE3');
// });
//
// console.log(2);
// obs.subscribe((data) => {
//   console.log(4);
//   console.log(data);
// });

// console.log(1);
// const obs = new Observable((observer) => {
//   let counter = 0;
//   const intervalFn = setInterval(() => {
//     observer.next(123123);
//     counter++;
//     if (counter > 3) {
//       observer.error();
//       clearInterval(intervalFn);
//     }
//   }, 1000);
// });
//
// obs.subscribe((data) => {
//   console.log(4);
//   console.log(data);
// }, () => {
//   console.log('ERROR');
// }, () => {
//   console.log('COMPLETED');
// });



// class Observable2 {
//   private observer = {
//     next: () => {}
//   };
//   private observerFn;
//
//   constructor(observerFn) {
//     this.observerFn = observerFn;
//   }
//
//   subscribe(nextFn) {
//     this.observer.next = nextFn;
//     this.observerFn(this.observer);
//   }
// }

// const obs2 = new Observable2((observer) => {
//   observer.next('DATA');
// });

// obs2.subscribe((data) => {
//   console.log(data);
// });

// import {interval} from "rxjs";
// import {filter, map} from "rxjs/operators";
//
// interval(1000)
//   .pipe(
//     filter((index) => index > 3),
//     map((index) => `__${index}__`)
//   )
//   .subscribe((index) => {
//     console.log('index', index);
//   });
