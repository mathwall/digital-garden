---
title: Bob and Mike's famous Solid principles
slug: clean-architecture-solid-principles
publishDate: 17 Oct 2025
description: A fresh attempt to finally engrave the meaning of each letter in this famous acronym
---

Another legacy from Uncle Bob! Robert Martin developed these principles in the 1080s and introduced them in 2000 in his paper [Design Principles and Design Patterns](https://www.fil.univ-lille.fr/~routier/enseignement/licence/coo/cours/Principles_and_Patterns.pdf).

Michael Feathers coined the acronym, introducing it in 2004 in _Working Effectively with Legacy Code_. Even after all these years, I still struggle to remember what each letter stands for! Here is a new attempt to engrave them in my memory.

Respecting these principles is supposed to help create maintainable and scalable software. Keep in mind that they were originally conceived in the context of Object-Oriented class design.

## Single-responsability Principle

A class should have only one reason to change, meaning it should have only one job or responsability, and be responsible for one role.

This helps reduce codebase complexity and limits the impact of changes. It also makes it easier to separate development work and switch tasks between independent teams.

## Open-Closed Principle

> A module should be open for extension but closed for modification.<br>
> — <cite>Robert Martin</cite>

Once a contract is defined, it can be extended but not changed: modifying an interface can have repercussions on the services that depend on it, so it's better to add new features instead of changing existing ones. For example, instead of updating the existing `delete` function that takes the whole object as parameter, you can create a `deleteById` function and mark the old `delete` function as deprecated. Then, ensure no service uses it before removing it.

Do not modify existing functions, nore parameters, nore return statements!

## Liskov Substitution Principle

> Subclasses should be substitutable for their base classes.<br>
> — <cite>Robert Martin</cite>

It's an equivalence principle: two subclasses that implement the same interface should be interchangeable for their consumer.

The classic example is that Bird and Duck classes should be interchangeable for the consumer, as long as Duck is a subclass of Bird.

A more concrete example: if you have an interface between a repository and a service, the service should be able to use any repository implementing the interface without noticing the difference (eg., a production repository and a fake repository for testing).

All implementations of an interface should share the same methods and same semantics, it means, provide the same functionality.
Classes should adapt to the interface, not the interface to the class.

Subclasses should not violate the expectations set by the base class (eg. not throwing unexpected errors or changing behavior).

## Interface Segregation Principle

> Many client specific interfaces are better than one general purpose interface.<br>
> — <cite>Robert Martin</cite>

Clients should not be forced to depend on interfaces they do not use.
It's better to split large interfaces into smaller, more focused ones, and have classes that are specific to their consumers, rather than big, generic classes. This helps ensure that changes won't impact consumers that are not concerned.

A better separation of concerns makes the code more flexible.

## Dependency Inversion Principle

> Depend upon Abstractions. Do not depend upon concretions.<br>
> — <cite>Robert Martin</cite>

Last but not least.

"High level modules" should not depend on "low-level modules". Instead, both should depend on a common interface, defined by the high-level module and implemented by the low-level module.

A "high-level module" is the domain logic that defines your system.
A "low-level module" is everything necessary for your system to work—such as the HTTP server, database, or other infrastructure.

Abstractions should not depend on implementation details; instead, infrastructure should depend on the domain.
-> The application and the infrastructure should depend on the domain, and the domain should depend on nothing, be independant from any external change and be able to evolve independently. The domain must define its interfaces, and the infrastructure will implement those interfaces.

By decoupling business logic from technical details, we enable easier testing, swapping architecture implementations.
