# Concepts #

## Abstraction ##

Is the process of removing temporal details or attrributes in the study of objects or systems to focus attention on details of greater importance

## Generators (Semicoroutines) ##

Most programming languages have the concept of `subroutines` in the form of procedures, functions and methods. When called a typical subroutine completes at once and returns a single value. It does not hold any state between invocations.

Generator look like a normal subroutine it can be invoked and will return a value. However a generator yields (rather than return) a value and preserves its state - i.e. the values of local variables. This is known as continuation.

In CS a `generator` is a routine that can be used to control the iteration behavior of a loop. All generators are also iterators. A generator is very similar to a function that returns an array, in that a generator has parameters, can be called and generates a sequence of values. However instead of building an array containing all the values and returning them all once, a generator yields the values one at a time, which requires less memory and allows the caller to get started with processing the first few values immediately.

Useful with data streams. Practical type of stream processing is handling large data files such as log files. Generators provide a space efficient method for such data processing as only parts of the file are handled at one given point in time.

## Cooperative Multitasking ##

Is a style of computer multitasking in which the operating system never initiates a context switch from a running process to another process. Instead, processes voluntarily yield control periodically.

Used with `await` in languages with a single-threaded event-loop in their runtime, like JavaScript or Python.

## Preemptive multitasking ##

`Preemptive multitasking` involves the use of an interrupt mechanism which suspends the currently executing process and invokes a scheduler to determine which process  should execute next. Therefore, all processes will get some amount of CPU time at any given time, whereas in `cooperative multitasking` processes or tasks must be explicitly programmed to yield when they do not need system resources.

## Coroutines ##

`Coroutines` are general control structure whereby flow control is cooperatively passed between two different routines without returning. `Coroutines` are well-suited for implementing familiar program components:

- Exceptions
- Event loops
- Iterators
- Pipes

`Coroutines` provide concurrency, but not parallelism

### Comparison with subroutines ###

Subroutines are specific cases of coroutines. When subroutines are invoked execution begins at the start and once a subroutine exits, it finished; an instance of subroutine only returns once and does not hold state between invocations.

### Comparison with threads ###

`Coroutines` are very similar to `threads`. However `coroutines` are cooperatively multitasked, whereas threads are typically preemptively multitasked.

## Process ##

Is an instance of a program being executed. Each process has its own address space, which cannot be accessed from other processes. Hence processes are isolated from each other and can not directly access each others' memory, which increases security and fault tolerance. Os schedules the processes' access to CPU resources.

## Thread ##

Thread (aka lightweight processes). A thread is a separate line of execution (i.e a sequence of instructions) within a process. A process can have multiple threads, all of which share its address space, file handlers etc. Starting a thread is cheep, as fewer resources need to be allocated. The thread within a process are concurrent and can execute in parallel. Each thread maintain its own programming stack. OS schedules all threads.

Since all threads within a process share the same address space, they can communicate much more easily. However this makes multi-threaded programming notoriously difficult, as the access to shared variables must be carefully synchronized. Acquiring and releasing locks can significantly slow down an application as threads can be blocked for long time periods.

## Concurrency ##

Concurrency is when two tasks can start, run and complete in overlapping time periods.
It is a composition of independently executing processes.
Concurrency is about `dealing with lots` of things at once.

## Parallelism ##

Parallelism is when a tasks literally run at the same time, e.g. on a multi-core processor.
It is a simultaneous execution of (possibly related) computations.
Parallelism is about `doing lots of things` at once.

## Multi-tier architecture ##

In Software engineering is a client-server architecture in which presentation, application processing and data management functions are physically separated. The most widespread use of multi-tier architecture is the three-ties architecture.

### Layers ###

- Presentational layer - UI layer
- Application layer - Service Layer or Controller Layer
- Data access Layer - Persistent layer, logging, networking

## API ##

Application Programming Interface (API) are build to expose the underlying functionality of a service.
