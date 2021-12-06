const observable = rxjs.Observable.create( observer => {
    observer.next( 'Hello World')
    observer.next( 'hello' )
    observer.next( 'world' )
})

observable.subscribe(val => print(val))

const clicks = rxjs.fromEvent(document, 'click')

clicks.subscribe(val => {
    print(val)
    console.log(val)
})
    
// const promise = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         resolve('resolved')
//     }, 1000)
// })

//const obsvPromise = rxjs.fromPromise(promise)















// add elements to the body of the html
function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}