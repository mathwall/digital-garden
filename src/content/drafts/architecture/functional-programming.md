## Functional programming

### Immutability

Variables can't be changed! This makes the code much simpler and error-prone :)

### Pure functions

### Function composition

Functions are not attached to classes, but they are first-class citizens of the language, they are like variables. We talk about "first-class functions".
You can declare them anywhere, pass them as arguments to other functions and return functions as the return value of a function.

Higher-order functions = functions that accept other functions as arguments, or functions that return functions as result.
They make the code declarative instead of imperative: the code declares the desired state of the program, instead of being a sequence of commands.

### TODO

- talk about referential transparency and the difference with indempotency
- read those sources: https://medium.com/twodigits/fundamentals-of-functional-programming-e808918c8b47, https://itrevolution.com/articles/love-letter-to-clojure-part-1/#functional-programming-and-Immutability

### What is functional programming cool for?

It is foundational for:

- Event-sourcing : representing state as a series of events (eg. in banking, once a transaction is created, it cannot be undone, a compensatory transaction must be created instead)
- Write-ahead logs (WAL) : a mechanism used by databases to ensure uniqueness and atomicity, helping recover from server crashes and patch data
- Functional Core/Imperative or Mutable Shell pattern: concentrating functional paradigms in the core of the software, and the interactions with the outside world (databases, third-party services) in the imperative shell. This pattern is used for hexagonal architecture with pure functional code.
