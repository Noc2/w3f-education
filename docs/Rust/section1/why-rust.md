---
id: why-rust
title: Why Learn Rust?
sidebar_label: Why Learn Rust?
description: A brief overview of the pros of learning the Rust programming language.
---

Before starting your Rust development journey, it is essential to realize just precisely _why_ Rust was the language chosen for this course.  In fact, it could have been any other language, If you are new to programming, the reasons as to why Rust was chosen may be foreign.

:::info

It may be useful to know a few terms general programming terms and what they mean before learning more about Rust.

:::

 - A **programming language** is a way for humans to write instructions for a computer to follow. Programming languages are very exact, and similar to linguistical languages like English, Spanish, or French, contain a set of rules as to how a program should be written.  This is called the **syntax** of the program.

 - A **compiler** is special program that translates the code we write, whether it be Rust or something else, into something a computer can understand (machine code). It acts as a translator between human code and the machine. 

 - There are two phases of a program - **compile-time**, and **runtime**.  Compile-time is when the code that a human writes is converted to machine code.  Runtime refers to the period of time when the program, after it has been compiled, has been running. 
  
 - A **garbage collector** manages the memory of a program, i.e, when and where memory should be allocated and released.  The benefit of a garbage collector is that the programmer doesn't have to account for how to allocate memory within code.

## Rust is safe.

The primary reason why Rust is used widely is how **safe** it is. In the context of programming, **safe** means that the programmer can confidently write a program with the certainty that it will work as intended. In more technical terms, a safe language ensures memory safety, and a safe language cannot write a dangerous program (unless those safety features are bypassed).

This safeness is mostly derived from two factors that work in tandem: 

1. Rust's strict type system
2. Rust's robust and pedantic compiler checks every single line of code to ensure it won't be invalid now, *or* in the future.

Essentially, if the Rust compiler that an issue might happen at some point with a variable within your program, it will (in a very friendly way) notify the programmer that this would become an issue in runtime.

Safe programming is also a matter of security. Many exploits and hacks occur because the program's memory can be accessed and modified in an unsafe or unauthorized way. 

These factors are crucial when building applications and programs that make guarantees in impactful industries. The Rust compiler's strictness makes it very hard to write *bad* or *dangerous* code.


## Safety does not sacrifice readability, ease of use, or speed.

Because Rust is so strict at compile-time, there is no need for a **garbage collector**, or any other mechanism that operates with the runtime of the program.  Effectively, this means that all of Rust's powerful, strong typing system comes at effectively zero cost.

This allows for a level of control that can be comparable to something lower-level, such as C, but is much more beginner friendly in terms of writing useful programs.  It also allows for flexibility for applications that require granular control and resource management, such as embedded systems, operating systems, and distributed ledgers.

Rust lowers the barriers when dealing with more complex concepts such as concurrency, low-level memory management, and data representation.


## Rust Safety by Example

Take this example - if we try to compile this Rust code:

```rust
    // Here, the number five variable is, well, the number 5. It is a number that can be added and subtracted.
    let the_number_five: u32 = 5;
    // Here is another variable - but instead, it's a character, as denoted by the `char` type, and the single
    // quotes surrounding the 5 ('5')
    let imposter_number_five: char = '5';
    // Lets say we want to add them - this shouldn't work, as this is the same as trying to add a number 
    // to a word.
    let the_number_ten: u32 = the_number_five + imposter_number_five;
    // FAILURE!
    println!("{the_number_ten}");
```

The Rust compiler, before it can even run the program, gives a very detailed error as to *why* this is impossible to compile.  This may seem foreign right now.  Notice the level of detail the compiler gives to the programmer, including a reference as to why this may not compile.

```
  Compiling playground v0.0.1 (/playground)
error[E0277]: cannot add `char` to `u32`
 --> src/main.rs:5:38
  |
5 | let the_number_ten = the_number_five + imposter_number_five;
  |                                      ^ no implementation for `u32 + char`
  |
  = help: the trait `Add<char>` is not implemented for `u32`
  = help: the following other types implement trait `Add<Rhs>`:
            <&'a u32 as Add<u32>>
            <&u32 as Add<&u32>>
            <u32 as Add<&u32>>
            <u32 as Add>

For more information about this error, try `rustc --explain E0277`.
```

## Resources

- *Why Rust? by Dimitiy Kashitsyn at Parity Technologies* - https://www.parity.io/blog/why-rust