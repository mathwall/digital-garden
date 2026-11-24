---
title: The programming paradigms that paved the way for Clean Architecture
slug: clean-architecture-programming-paradigms
publishDate: 16 Oct 2025
description: A quick reminder about structured programming, object-oriented programming and functional programming
---

> A programming paradigm is an approach to solve a problem and structure the code, using a programming language.

## 1. Structured programming

Edsger Djikstra aimed to prove mathematically that programs were valid.

In "Goto Considered Harmful" (1968), he states that jumps and goto statements (extensively used in Fortran) make code very complex and hard to understand by allowing the program to transfer control to any part of the code at any time.

Instead, structured programming enforces the only use of clean, predictable control structures such as defined by the Böhm-Jacopini theorem:

- _Sequences_: a series of instructions that are executed one after another
- _Selections_: if/else statements
- _Iterations_: a repeated execution of a group of sequences as long as a predicate (condition) is true

=> **Structured programming enforces discipline on direct transfer of control**, and makes the code more sequential (readable from top to bottom).

A program decomposed into independent functions and modules that use these 3 control structures is simpler to prove correct and easier to maintain -> this is the _modular programming_ design technique.

## 2. Object-oriented programming

A revolution in the 60s! It is contemporary to structured programming.
It eased so much code writing for complex programs that it was a huge success.

Ole Johan Dahl and Kristen Nygaard created Simula, the first object-oriented language.

The main principles of OOP are:

- Encapsulation: hiding internal implementation details behind a simple, easy-to-use interface
- Inheritance: reusing code and extending its capacities by creating new classes based on existing ones
- Polymorphism: treating distinct objects the same way

There are 2 types of polymorphism:

- ad-hoc polymorphism: functions can accept different types or numbers of parameters (e.g., function overloading)
- parametric polymorphism: you can treat the same way objects that have the same interface. Functions or classes can operate on any type that satisfies a given interface (eg. generics, the `map` function in JS -> it is implemented so that it can work with a list containing any type of objects).

OOP enforces discipline on indirect transfer of control: you can invoke a function and pass it an object without knowing its exact type, as long as it adheres to a known interface. This enables the separation of dependency flow from control flow, which is a foundational principle of hexagonal architecture.

For example:

> An articleController calls an articleService which calls an articleRepository.
>
> The **dependency flow** describes which component knows about which: the service knows the repository, but not the controller.
>
> The **control flow** or execution flow here follows the same direction: the control will go from the controller to the service to the repository.
>
> Thanks to polymorphism, you can invert dependencies by introducing an interface (or abstract class) between the service and the repository. This interface describes the methods that should be implemented by the repository to communicate with the service.
>
> By introducing an interface, both the service and the repository depend on the interface, not on each other directly. This is the **Dependency Inversion Principle**: depend on abstractions, not concrete implementations.
>
> With this principle, you can replace the resitory with any class that implements the interface.

## 3. Functional programming

The paradigm was developed by Alonzo Church in 1936 (theory of computation), alongside Alan Turing’s research. It has gained significant popularity in recent years.

Functional programming helps address issues in concurrent systems, such as race conditions, deadlocks, and concurrent updates. It imposes constraints that reduce the number of unknowns in a program and lower cognitive complexity:

- Immutability: values cannot be changed once created
- Idempotency/"pure functions": functions should only need their parameters to perform their work and be free of side effects. This makes them testable.

Functional programming, by regulating our capacity to assign values, makes the code more testable and more predictable.
