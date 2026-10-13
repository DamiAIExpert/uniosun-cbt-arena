# -*- coding: utf-8 -*-
"""
Script to compile all 200 UNIOSUN Regularisation Questions into structured JS
"""
import json
import os
import re

raw_data = """
Section 1: Core Subject Competence — Information Technology & Computing (Questions 1–80)
Part A: Computer Networks & Data Communications (Q1–Q18)
Which layer of the OSI model converts data segments into network packets and handles logical IP addressing and routing?
A) Data Link | B) Transport | C) Network | D) Session
Answer: C (Network Layer — Layer 3)

What is the Protocol Data Unit (PDU) at the Data Link Layer (Layer 2) of the OSI model?
A) Bit | B) Frame | C) Packet | D) Segment
Answer: B (Frame)

How many usable host IP addresses are available in a /27 IPv4 subnet (255.255.255.224)?
A) 32 | B) 30 | C) 62 | D) 14
Answer: B (30) — ($2^{32-27} - 2 = 2^5 - 2 = 30$).

Which protocol resolves a known IPv4 address to an unknown physical MAC address on a local area network?
A) RARP | B) DNS | C) ARP | D) DHCP
Answer: C (ARP — Address Resolution Protocol)

Which standard TCP port is used by HTTPS for encrypted web traffic?
A) 80 | B) 8080 | C) 22 | D) 443
Answer: D (443)

Which IPv4 address range is reserved as a Class C Private IP block under RFC 1918?
A) 10.0.0.0 – 10.255.255.255 | B) 172.16.0.0 – 172.31.255.255 | C) 192.168.0.0 – 192.168.255.255 | D) 127.0.0.0 – 127.255.255.255
Answer: C (192.168.0.0 – 192.168.255.255)

What is the length of an IPv6 address in bits and hexadecimal groups?
A) 64 bits, 4 groups | B) 128 bits, 8 groups | C) 32 bits, 4 octets | D) 256 bits, 16 groups
Answer: B (128 bits, 8 groups of 4 hexadecimal digits)

Which networking device separates collision domains per port while keeping all connected hosts in the same broadcast domain by default?
A) Hub | B) Repeater | C) Layer 2 Switch | D) Router
Answer: C (Layer 2 Switch) — (A Router separates both collision and broadcast domains; a Hub separates neither).

The three-way handshake used by TCP to establish a reliable connection follows which sequence of flags?
A) ACK → SYN → FIN | B) SYN → SYN-ACK → ACK | C) SYN → ACK → FIN-ACK | D) PSH → ACK → SYN
Answer: B (SYN → SYN-ACK → ACK)

What is the four-step process used by DHCP to dynamically assign an IP address to a client?
A) Request, Offer, Ack, Fin | B) Discover, Offer, Request, Acknowledge (DORA) | C) Broadcast, Unicast, Multicast, Anycast | D) Query, Response, Lease, Renew
Answer: B (Discover, Offer, Request, Acknowledge — DORA)

Which protocol does the ping utility use to test host reachability across an IP network?
A) IGMP | B) TCP | C) ICMP | D) SNMP
Answer: C (ICMP — Internet Control Message Protocol)

Which IEEE standard defines Wi-Fi (Wireless Local Area Networks)?
A) IEEE 802.3 | B) IEEE 802.11 | C) IEEE 802.15 | D) IEEE 802.1Q
Answer: B (IEEE 802.11) — (802.3 is Ethernet; 802.1Q is VLAN tagging).

Which routing algorithm is used by OSPF (Open Shortest Path First) to compute the shortest path tree?
A) Bellman-Ford Algorithm | B) Dijkstra’s Shortest Path First Algorithm | C) Kruskal’s Algorithm | D) Floyd-Warshall Algorithm
Answer: B (Dijkstra’s Algorithm) — (RIP uses Bellman-Ford distance-vector).

Which service translates multiple private internal IP addresses into a single public IP address before packets leave for the internet?
A) VLAN | B) VPN | C) NAT / PAT | D) BGP
Answer: C (NAT / PAT — Network/Port Address Translation)

What is the default subnet mask for a Class B IPv4 address?
A) 255.0.0.0 (/8) | B) 255.255.0.0 (/16) | C) 255.255.255.0 (/24) | D) 255.255.255.128 (/25)
Answer: B (255.255.0.0 or /16)

In RESTful API communication, which HTTP method is idempotent and used to completely replace a target resource?
A) POST | B) PATCH | C) PUT | D) CONNECT
Answer: C (PUT) — (POST is not idempotent).

What does HTTP status code 403 signify?
A) Bad Request | B) Unauthorized (Unauthenticated) | C) Forbidden (Server understands request but refuses authorization) | D) Resource Not Found
Answer: C (Forbidden)

Which DNS record type maps a domain name to an IPv6 address?
A) A Record | B) CNAME Record | C) AAAA Record | D) MX Record
Answer: C (AAAA Record) — (A maps to IPv4; MX is Mail Exchange).

Part B: Operating Systems & Computer Architecture (Q19–Q32)
Which component of the Operating System is responsible for selecting the next process from the ready queue to allocate CPU time?
A) Long-term scheduler | B) Short-term (CPU) scheduler | C) Linker | D) Pager
Answer: B (Short-term scheduler / Dispatcher)

A situation in which a low-priority process waits indefinitely because higher-priority processes continuously take the CPU is called:
A) Deadlock | B) Starvation (Indefinite Blocking) | C) Thrashing | D) Race Condition
Answer: B (Starvation) — (Solved using Aging).

Which technique gradually increases the priority of processes that wait in the system for a long time to prevent starvation?
A) Spooling | B) Aging | C) Paging | D) Thrashing
Answer: B (Aging)

Which synchronization primitive uses two atomic operations, wait() (P) and signal() (V), to control access to shared resources?
A) Spinlock | B) Semaphore | C) Socket | D) Pipe
Answer: B (Semaphore)

When two or more threads access shared data concurrently and the final outcome depends on the exact order of execution, this flaw is known as a:
A) Context Switch | B) Race Condition | C) Page Fault | D) Memory Leak
Answer: B (Race Condition)

In virtual memory management, dividing physical memory into fixed-size blocks and logical memory into blocks of the same size is called:
A) Segmentation | B) Paging (Frames in physical, Pages in logical) | C) Fragmentation | D) Swapping
Answer: B (Paging)

Which page replacement algorithm replaces the page that will not be used for the longest period of time in the future (serving as a theoretical benchmark)?
A) FIFO | B) LRU (Least Recently Used) | C) Optimal (OPT / Belady’s) | D) Clock
Answer: C (Optimal Page Replacement)

What is the phenomenon where increasing the number of page frames allocated to a process paradoxically increases the number of page faults in FIFO replacement?
A) Moore’s Law | B) Belady’s Anomaly | C) Amdahl’s Law | D) Locality of Reference
Answer: B (Belady’s Anomaly)

Which hardware cache sits inside the Memory Management Unit (MMU) to speed up virtual-to-physical address translation?
A) L1 Instruction Cache | B) TLB (Translation Lookaside Buffer) | C) DMA Controller | D) Accumulator
Answer: B (TLB — Translation Lookaside Buffer)

Wasted memory space that exists inside an allocated fixed-size partition or page because the process is smaller than the block is called:
A) External Fragmentation | B) Internal Fragmentation | C) Compaction | D) Buffer Overflow
Answer: B (Internal Fragmentation)

Which CPU register holds the memory address of the next instruction to be fetched and executed?
A) Instruction Register (IR) | B) Program Counter (PC) | C) Memory Buffer Register (MBR) | D) Stack Pointer (SP)
Answer: B (Program Counter — PC)

Which type of memory is volatile, uses transistors and latches (without capacitors), requires no refreshing, and is used for CPU cache?
A) DRAM | B) SRAM (Static RAM) | C) EEPROM | D) Flash Memory
Answer: B (SRAM) — (DRAM uses capacitors and requires periodic refresh cycles).

In Linux/UNIX file permissions, what does the octal permission chmod 755 grant?
A) Read/Write/Execute for everyone | B) Owner: rwx (7); Group: r-x (5); Others: r-x (5) | C) Owner: rwx (7); Group: rw- (6); Others: r-- (4) | D) Owner only access
Answer: B (rwxr-xr-x — Owner full, Group and Others read/execute)

When the CPU stops executing the current instruction stream to respond to an hardware signal (e.g., I/O completion) via an ISR, this mechanism is an:
A) Polling loop | B) Interrupt | C) System Call | D) Deadlock
Answer: B (Interrupt)

Part C: Database Management Systems (Q33–Q46)
In the relational database model, what is the formal term for the number of attributes (columns) in a relation (table)?
A) Cardinality | B) Degree (Arity) | C) Tuple | D) Domain
Answer: B (Degree) — (Cardinality is the number of rows/tuples).

Which integrity rule states that no attribute participating in a Primary Key of a base relation is allowed to accept NULL values?
A) Referential Integrity | B) Entity Integrity | C) Domain Integrity | D) User-defined Integrity
Answer: B (Entity Integrity)

Which integrity constraint requires that a Foreign Key value must either match an existing Primary Key value in the referenced table or be wholly NULL?
A) Entity Integrity | B) Referential Integrity | C) Transitive Dependency | D) Functional Dependency
Answer: B (Referential Integrity)

What is the key difference between the SQL commands DELETE, TRUNCATE, and DROP?
A) They are identical | B) DELETE is DML (removes specific rows using WHERE, can be rolled back); TRUNCATE is DDL (removes all rows rapidly without logging individual row deletions, keeps table structure); DROP is DDL (deletes both data and table schema completely) | C) DROP keeps the schema | D) TRUNCATE deletes columns
Answer: B (DELETE is DML; TRUNCATE is DDL wiping rows; DROP is DDL destroying entire table)

In SQL, what is the difference between the WHERE clause and the HAVING clause?
A) WHERE filters individual rows before grouping (GROUP BY); HAVING filters aggregated groups after GROUP BY | B) HAVING is used without SELECT | C) WHERE supports aggregate functions like SUM() directly | D) There is no difference
Answer: A (WHERE filters rows before grouping; HAVING filters groups after aggregation)

Which SQL JOIN returns all rows from the left table and the matched rows from the right table, filling in NULL where no match exists on the right?
A) INNER JOIN | B) LEFT OUTER JOIN | C) RIGHT OUTER JOIN | D) CROSS JOIN
Answer: B (LEFT OUTER JOIN)

Which normal form specifically resolves anomalies caused when a relation has multiple overlapping candidate keys?
A) 1NF | B) 2NF | C) BCNF (Boyce-Codd Normal Form) | D) 4NF
Answer: C (BCNF)

Fourth Normal Form (4NF) is achieved when a relation is in BCNF and contains no:
A) Partial dependencies | B) Transitive dependencies | C) Multi-valued dependencies | D) Foreign keys
Answer: C (Multi-valued dependencies)

Which data structure is most commonly used by relational database engines (like PostgreSQL and MySQL InnoDB) to implement standard disk-based indexes?
A) Singly Linked List | B) B-Tree / B+ Tree | C) Binary Heap | D) Adjacency Matrix
Answer: B (B+ Tree)

In distributed systems and NoSQL databases, what does the CAP Theorem state?
A) A distributed data store can simultaneously provide at most two of three guarantees: Consistency, Availability, and Partition Tolerance | B) Cache, API, and Persistence | C) Concurrency, Atomicity, and Performance | D) All distributed databases are ACID compliant
Answer: A (Consistency, Availability, Partition Tolerance)

In SQL Transaction Control Language (TCL), which command permanently saves all changes made during the current transaction?
A) SAVEPOINT | B) ROLLBACK | C) COMMIT | D) GRANT
Answer: C (COMMIT)

When Transaction A reads uncommitted data modified by Transaction B, and Transaction B subsequently rolls back, Transaction A has suffered from a:
A) Phantom Read | B) Dirty Read | C) Non-repeatable Read | D) Serializable Lock
Answer: B (Dirty Read)

Which SQL operator combines the result sets of two queries and automatically removes duplicate rows?
A) UNION ALL | B) UNION | C) JOIN | D) INTERSECT ALL
Answer: B (UNION) — (UNION ALL retains duplicates).

A database VIEW is best described as:
A) A physical copy of a table stored on a separate disk | B) A virtual table whose contents are defined by a stored SQL query | C) A backup file | D) A primary key index
Answer: B (A virtual table defined by a stored query)

Part D: Data Structures & Algorithms (Q47–Q60)
What is the average-case time complexity for looking up an element by key in a well-implemented Hash Table?
A) O(n) | B) O(log n) | C) O(1) | D) O(n log n)
Answer: C (O(1) — Constant time)

What is the prerequisite condition for applying the Binary Search algorithm on an array?
A) The array must contain only positive integers | B) The array must be sorted | C) The array size must be a power of 2 | D) The array must be stored as a linked list
Answer: B (The array must be sorted)

Which sorting algorithm divides the input array in half recursively, sorts each half, and combines them using O(n) auxiliary space and guaranteed O(n log n) worst-case time?
A) Quick Sort | B) Merge Sort | C) Heap Sort | D) Insertion Sort
Answer: B (Merge Sort)

Which sorting algorithm is particularly efficient (O(n) time complexity) when the input array is almost sorted?
A) Selection Sort | B) Insertion Sort | C) Quick Sort | D) Radix Sort
Answer: B (Insertion Sort)

What is the postfix (Reverse Polish Notation) equivalent of the infix expression A + B * C?
A) A B + C * | B) A B C * + | C) + A * B C | D) A B * C +
Answer: B (A B C * +)

In a Binary Tree, Which traversal visits nodes in the order: Root → Left Subtree → Right Subtree?
A) In-order | B) Pre-order | C) Post-order | D) Level-order
Answer: B (Pre-order Traversal)

What is the maximum number of nodes in a binary tree of height h (where a single root node has height 0, or 2^k - 1 for k levels)?
A) 2^k - 1 | B) 2k | C) k^2 | D) log2(k)
Answer: A (2^k - 1, where k is the number of levels)

An AVL Tree is a self-balancing Binary Search Tree in which the heights of the two child subtrees of any node differ by at most:
A) 0 | B) 1 | C) 2 | D) log n
Answer: B (1 — Balance factor in {-1, 0, +1})

Which data structure provides the most optimal time complexity (O(1) peek, O(log n) insert/delete) for implementing a Priority Queue?
A) Unsorted Array | B) Binary Heap (Min-Heap or Max-Heap) | C) Doubly Linked List | D) Hash Map
Answer: B (Binary Heap)

Which two classic algorithms are used to find the Minimum Spanning Tree (MST) of a weighted, connected, undirected graph?
A) Dijkstra’s and Bellman-Ford | B) Kruskal’s and Prim’s | C) BFS and DFS | D) A* and Minimax
Answer: B (Kruskal’s and Prim’s Algorithms)

For a sparse graph with V vertices and E edges (E << V^2), which graph representation is more space-efficient?
A) Adjacency Matrix (O(V^2)) | B) Adjacency List (O(V + E)) | C) Incidence Matrix | D) 2D Array
Answer: B (Adjacency List — O(V + E))

In a recursive function, what happens if the base case is omitted or never reached?
A) Compilation Error | B) Stack Overflow Error (Runtime) | C) Heap Corruption | D) Automatic garbage collection
Answer: B (Stack Overflow)

Solving complex problems by breaking them into overlapping subproblems and storing (memoizing/tabulating) their results to avoid redundant computation is the hallmark of:
A) Greedy Algorithms | B) Divide and Conquer | C) Dynamic Programming | D) Backtracking
Answer: C (Dynamic Programming)

In Complexity Theory, problems for which no known polynomial-time algorithm exists, Set-verifiable in polynomial time, and to which all other NP problems can be reduced in polynomial time are called:
A) P Problems | B) NP-Complete | C) O(1) Problems | D) Halting Problems
Answer: B (NP-Complete)

Part E: Software Engineering & OOP (Q61–Q70)
In Object-Oriented Programming, what is the difference between Method Overloading and Method Overriding?
A) Overloading occurs at compile-time (same method name, different parameter signatures in the same class); Overriding occurs at runtime (subclass provides a specific implementation of a method already defined in its parent class) | B) Overloading requires inheritance | C) Overriding changes the parameter count | D) They are identical
Answer: A (Overloading: compile-time same name diff params; Overriding: runtime subclass replaces parent implementation)

In SOLID object-oriented design principles, what does the "S" (Single Responsibility Principle) state?
A) A class should only be instantiated once | B) A class should have only one reason to change (one primary responsibility) | C) Software should run on a single server | D) Subclasses cannot replace superclasses
Answer: B (A class should have only one reason to change)

Which Gang of Four (GoF) Creational Design Pattern ensures that a class has only one instance and provides a global point of access to it?
A) Observer | B) Factory Method | C) Singleton | D) Decorator
Answer: C (Singleton Pattern)

In software architecture, good modular design aims to achieve:
A) High Coupling and Low Cohesion | B) Low (Loose) Coupling and High Cohesion | C) High Coupling and High Cohesion | D) Zero Cohesion
Answer: B (Low Coupling and High Cohesion) — (Modules should be independent of each other [low coupling] and focused internally [high cohesion]).

What is the difference between Black-Box Testing and White-Box Testing?
A) Black-box tests functionality based on inputs/outputs without knowing internal code structure; White-box tests internal logic, branches, and code paths directly | B) Black-box is done only by developers | C) White-box requires no source code | D) Black-box is unit testing only
Answer: A (Black-box focuses on external I/O; White-box inspects internal control flow and paths)

Testing conducted after modifying software to ensure that new changes have not broken existing, previously working functionality is called:
A) Smoke Testing | B) Regression Testing | C) Alpha Testing | D) Penetration Testing
Answer: B (Regression Testing)

What is the distinction between Alpha Testing and Beta Testing?
A) Alpha testing is performed at the developer’s site by internal teams/QA; Beta testing is performed by real end-users in their own production-like environment prior to general release | B) Beta comes before Alpha | C) Alpha is automated only | D) Beta is unit testing
Answer: A (Alpha: internal dev team; Beta: real end users in realistic setting)

In UML (Unified Modeling Language), which diagram captures the dynamic interactions between objects arranged in a time sequence?
A) Class Diagram | B) Sequence Diagram | C) Component Diagram | D) Deployment Diagram
Answer: B (Sequence Diagram)

In Git version control, which command downloads commits, files, and refs from a remote repository into your local repo without automatically merging them into your current working branch?
A) git pull | B) git fetch | C) git clone | D) git push
Answer: B (git fetch) — (git pull = git fetch + git merge).

In software requirements engineering, system response time, throughput, security, and scalability are classified as:
A) Functional Requirements | B) Non-Functional Requirements (Quality Attributes) | C) User Stories | D) Use Cases
Answer: B (Non-Functional Requirements)

Part F: Cybersecurity, AI & Cloud Computing (Q71–Q80)
Which web application vulnerability occurs when untrusted user input is directly concatenated into a database query string, allowing an attacker to manipulate the query structure?
A) Cross-Site Request Forgery (CSRF) | B) SQL Injection (SQLi) — mitigated via Parameterized Queries / Prepared Statements | C) DDoS | D) ARP Spoofing
Answer: B (SQL Injection)

What is the key difference between Encryption and Cryptographic Hashing (e.g., SHA-256, bcrypt)?
A) Encryption is a two-way reversible function (using a key); Hashing is a one-way irreversible mathematical function used to verify data integrity or store passwords | B) Hashing uses a private key to decrypt | C) Encryption produces a fixed-length digest regardless of input size | D) SHA-256 is symmetric encryption
Answer: A (Encryption is 2-way reversible; Hashing is 1-way irreversible)

Manipulating people psychologically into divulging confidential information or credentials (e.g., via phishing or pretexting) is known as:
A) Brute-force attack | B) Social Engineering | C) Zero-day exploit | D) Packet sniffing
Answer: B (Social Engineering)

In Cloud Computing, providing virtualized hardware resources (VMs, raw storage, virtual networks) where the user manages the OS, runtime, and applications (e.g., AWS EC2, DigitalOcean Droplets) is:
A) SaaS (Software as a Service) | B) PaaS (Platform as a Service) | C) IaaS (Infrastructure as a Service) | D) FaaS
Answer: C (IaaS — Infrastructure as a Service)

How do Docker containers differ from traditional Virtual Machines (VMs)?
A) Containers share the host OS kernel and isolate application processes at the OS level (lightweight); VMs virtualize hardware via a Hypervisor and run a full guest OS per instance | B) Containers require a Type-1 Hypervisor | C) VMs start up in milliseconds | D) Docker cannot run on Linux
Answer: A (Containers share host OS kernel; VMs run full guest OS over hypervisor)

In Machine Learning, clustering customers into segments using K-Means on unlabeled data is an example of:
A) Supervised Learning | B) Unsupervised Learning | C) Reinforcement Learning | D) Semi-supervised Transfer
Answer: B (Unsupervised Learning)

In a binary classification Confusion Matrix, how is Precision mathematically defined?
A) TP / (TP + FP) | B) TP / (TP + FN) | C) (TP + TN) / (TP + TN + FP + FN) | D) FP / (FP + TN)
Answer: A (Precision = TP / (TP + FP); Recall = TP / (TP + FN))

In Deep Learning, which problem occurs during backpropagation when gradients become exceedingly small in early layers, preventing weights from updating effectively in deep networks (mitigated by ReLU and Residual connections)?
A) Overfitting | B) Vanishing Gradient Problem | C) K-Fold Leakage | D) Tokenization
Answer: B (Vanishing Gradient Problem)

Which technique randomly disables a fraction of neurons during each training step of a Neural Network to prevent co-adaptation and reduce overfitting?
A) Batch Normalization | B) Dropout Regularization | C) Max Pooling | D) Gradient Clipping
Answer: B (Dropout)

Which Deep Learning architecture introduced the Self-Attention mechanism and serves as the foundational backbone of modern Large Language Models (LLMs)?
A) Recurrent Neural Network (RNN) | B) Transformer Architecture ("Attention Is All You Need") | C) LeNet CNN | D) Hopfield Network
Answer: B (Transformer Architecture)

Section 2: General University Knowledge & Osun State Fact Sheet (Questions 81–130)
Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)
On what exact date did the National Universities Commission (NUC) grant the operational license to Osun State University?
A) September 21, 2007 | B) December 21, 2006 | C) August 27, 2006 | D) May 29, 2007
Answer: B (December 21, 2006)

Osun State University was licensed as the ___ State University and the ___ University overall in the Nigerian University System.
A) 20th State, 60th overall | B) 30th State, 80th overall | C) 36th State, 90th overall | D) 25th State, 70th overall
Answer: B (30th State University and 80th University in Nigeria)

Under which Osun State Governor was the Osun State University Law passed in 2006?
A) Chief Bisi Akande | B) Prince Olagunsoye Oyinlola | C) Ogbeni Rauf Aregbesola | D) Senator Isiaka Adeleke
Answer: B (Prince Olagunsoye Oyinlola)

When did the pioneer batch of students formally commence academic activities at UNIOSUN?
A) December 2006 | B) September 2007 | C) January 2008 | D) October 2005
Answer: B (September 2007)

What is the official motto of Osun State University?
A) Knowledge for Service | B) Living Spring of Knowledge and Culture | C) For Learning and Culture | D) Excellence and Integrity
Answer: B (Living Spring of Knowledge and Culture) — (Note: "For Learning and Culture" is OAU Ile-Ife; don't mix them up in the CBT!).

Who was the Pioneer Vice-Chancellor of Osun State University (2007–2012)?
A) Prof. Bashir Okesina | B) Prof. Sola Akinrinade | C) Prof. Labode Popoola | D) Prof. Odunayo Clement Adebooye
Answer: B (Prof. Sola Akinrinade)

Who served as the 2nd Substantive Vice-Chancellor of UNIOSUN (2013–2016)?
A) Prof. Bashir Okesina | B) Prof. Labode Popoola | C) Prof. Jelili Alamu | D) Prof. Ganiyu Olatunde
Answer: A (Prof. Bashir Okesina)

Who served as the 3rd Substantive Vice-Chancellor of UNIOSUN (2016–2021)?
A) Prof. Labode Popoola | B) Prof. Sola Akinrinade | C) Prof. Clement Adebooye | D) Prof. Wale Oladipo
Answer: A (Prof. Labode Popoola)

Who was the Pioneer Chancellor of Osun State University?
A) Apostle Folorunso Alakija | B) Late Oba Okunade Sijuwade (Ooni of Ife) | C) Oba Adeyeye Enitan Ogunwusi | D) Dr. (Mrs.) Victoria Samson
Answer: B (Late Oba Okunade Sijuwade, Olubuse II, Ooni of Ife)

Who served as the Pioneer Pro-Chancellor and Chairman of the Governing Council of UNIOSUN?
A) Prof. Peter Okebukola, OFR | B) Mallam Yusuf Ali, SAN | C) Prof. Wale Oladipo | D) Prof. Gabriel Olawoyin
Answer: A (Prof. Peter Okebukola, OFR)

What anniversary milestone is Osun State University celebrating on December 21, 2026?
A) 15th Anniversary | B) 20th Anniversary (Two Decades of Establishment: 2006–2026) | C) 25th Silver Jubilee | D) 10th Anniversary
Answer: B (20th Anniversary — 2006 to 2026)

On what date is UNIOSUN’s annual Foundation Day / Convocation traditionally celebrated?
A) August 27 | B) September 21 | C) October 1 | D) May 29
Answer: B (September 21)

Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)
Who is the Statutory Visitor to Osun State University?
A) The Minister of Education | B) The Executive Governor of Osun State (Senator Ademola Jackson Nurudeen Adeleke) | C) The Pro-Chancellor | D) The NUC Executive Secretary
Answer: B (The Executive Governor of Osun State, Senator Ademola Adeleke)

Who is the current Chancellor of Osun State University?
A) Dr. (Mrs.) Victoria Olufunmilayo Samson (Mama BOVAS — 3rd Chancellor, succeeding Apostle Folorunso Alakija) | B) Chief (Mrs.) Nike Akande | C) Chief Adebisi Akande | D) Oba Adeyeye Ogunwusi
Answer: A (Dr. Mrs. Victoria Olufunmilayo Samson — 3rd Chancellor, Mama BOVAS)

Who is the current Pro-Chancellor and Chairman of the Governing Council of UNIOSUN?
A) Mallam Yusuf Ali, SAN | B) Prof. Wale Oladipo | C) Prof. Peter Okebukola | D) Chief Tunde Ponle
Answer: B (Prof. Wale Oladipo)

Who is the current (4th Substantive) Vice-Chancellor of Osun State University?
A) Prof. Labode Popoola | B) Prof. Odunayo Clement Adebooye | C) Prof. Adetunji Kehinde | D) Prof. Morufu Olayiwola
Answer: B (Prof. Odunayo Clement Adebooye)

What is the academic discipline of the current Vice-Chancellor, Prof. Odunayo Clement Adebooye?
A) Computer Science | B) Agronomy / Plant Physiology | C) Chemical Engineering | D) Macroeconomics
Answer: B (Agronomy / Plant Physiology)

Who is the current Deputy Vice-Chancellor (Academic, Research, Innovation and Partnerships — ARIP) of UNIOSUN?
A) Prof. Adetunji Lawrence Kehinde | B) Prof. Morufu O. Olayiwola | C) Prof. Anthony Kola-Olusanya | D) Prof. Caleb Akanbi
Answer: A (Prof. Adetunji Lawrence Kehinde)

Who is the current Deputy Vice-Chancellor (Administration and Development) of UNIOSUN?
A) Prof. Morufu O. Olayiwola | B) Prof. Adetunji L. Kehinde | C) Prof. Janet Olaitan | D) Prof. Amos Popoola
Answer: A (Prof. Morufu O. Olayiwola)

Who is the current (3rd Substantive) Registrar and Secretary to Council/Senate of UNIOSUN?
A) Mr. Gafar Adebayo Shittu | B) Mrs. Atinuke Abosede Oguntunde | C) Mr. Julius Olusakin Faniran | D) Mrs. Olubunmi Olayinka
Answer: B (Mrs. Atinuke Abosede Oguntunde)

Who is the current (3rd Substantive) University Bursar of UNIOSUN?
A) Alhaji Fatai Lasisi | B) Mr. Muideen Akintayo Lasisi | C) Mr. Bamidele Toye | D) Dr. Olugbenga Adewuyi
Answer: B (Mr. Muideen Akintayo Lasisi)

Who is the current (3rd Substantive) University Librarian of UNIOSUN?
A) Dr. Olugbenga Wale Adewuyi | B) Mrs. Tinuade Adewale | C) Prof. Wasiu Lawal | D) Mr. Muideen Lasisi
Answer: A (Dr. Olugbenga Wale Adewuyi)

Which statutory organ of the University is the highest policy-making and governing body in charge of finances, property, and staff appointments/regularisation?
A) The Senate | B) The Governing Council | C) The Congregation | D) The Convocation
Answer: B (The Governing Council)

Which statutory organ is the supreme academic authority responsible for regulating teaching, research, examinations, and the award of degrees?
A) The Governing Council | B) The University Senate | C) The Registry | D) The Bursary
Answer: B (The University Senate)

Which statutory body comprises all graduate members of the University staff (both academic and administrative/technical staff holding degrees)?
A) The Senate | B) The Congregation | C) The Convocation | D) ASUU
Answer: B (The Congregation)

Which statutory ceremony/body brings together the Chancellor, Council, Senate, and all graduates (Alumni) for the conferment of degrees?
A) Matriculation | B) Convocation | C) Inaugural Lecture | D) Congregation
Answer: B (Convocation)

At the Campus/College level in UNIOSUN, what is the title of the administrative and academic head of a College?
A) Rector | B) Provost | C) Registrar | D) Director
Answer: B (Provost) — (While a Faculty within a College is headed by a Dean, and a Department by an HOD).

Part C: Multi-Campus Structure & College Distribution (Q108–Q117)
How many Colleges and established geopolitical zone Campuses does UNIOSUN operate?
A) 5 Colleges across 5 Campuses | B) 7 Colleges across 6 geopolitical Campuses (with new expansion sites such as Ede bringing structural references to 7) | C) 10 Colleges across 4 Campuses | D) 4 Colleges across 6 Campuses
Answer: B (7 Colleges across the 6 geopolitical Campuses / 7 with expansion)

Which two Colleges (plus the Faculty of Computing & IT) are hosted on the Main Campus in Osogbo?
A) College of Law and College of Agriculture | B) College of Science, Engineering & Technology (SET) and College of Health Sciences | C) College of Education and College of Humanities | D) College of Management and College of Law
Answer: B (College of Science, Engineering & Technology and College of Health Sciences)

In which town/campus is the UNIOSUN College of Management and Social Sciences located?
A) Ikire | B) Okuku | C) Ejigbo | D) Ifetedo
Answer: B (Okuku Campus)

In which town/campus is the UNIOSUN College of Humanities and Culture located?
A) Ikire | B) Ipetu-Ijesa | C) Ejigbo | D) Okuku
Answer: A (Ikire Campus)

In which town/campus is the UNIOSUN College of Agriculture located?
A) Ejigbo | B) Ifetedo | C) Okuku | D) Osogbo
Answer: A (Ejigbo Campus)

In which town/campus is the UNIOSUN College of Law located?
A) Ipetu-Ijesa | B) Ifetedo | C) Ikire | D) Ede
Answer: B (Ifetedo Campus)

In which town/campus is the UNIOSUN College of Education located?
A) Ipetu-Ijesa | B) Ejigbo | C) Okuku | D) Ifetedo
Answer: A (Ipetu-Ijesa Campus)

On which street/area in Osogbo is the UNIOSUN Main Campus located?
A) Oke-Fia | B) Oke-Baale | C) Abere | D) Lameco
Answer: B (Oke-Baale, Osogbo)

In the UNIOSUN Vision Statement, what type of graduates does the university explicitly aim to produce?
A) Civil servants only | B) Entrepreneurial graduates capable of impacting positively on their environment while being globally competitive | C) Theoretical researchers only | D) Sportsmen
Answer: B (Entrepreneurial and globally competitive graduates)

Where is the Department of Information Technology / Faculty of Computing and Information Technology (FCIT) situated?
A) Okuku Campus | B) Osogbo Main Campus | C) Ikire Campus | D) Ejigbo Campus
Answer: B (Osogbo Main Campus)

Part D: Osun State Profile, History & Governance (Q118–Q130)
On what date was Osun State created, and from which state was it carved out?
A) May 27, 1967 from Western Region | B) August 27, 1991 from old Oyo State | C) October 1, 1996 from Ondo State | D) February 3, 1976 from Oyo State
Answer: B (August 27, 1991 — carved out of old Oyo State)

Which Nigerian Head of State created Osun State?
A) Gen. Murtala Muhammed | B) Gen. Ibrahim Badamasi Babangida | C) Gen. Sani Abacha | D) Gen. Yakubu Gowon
Answer: B (General Ibrahim Badamasi Babangida)

How many Local Government Areas (LGAs) and Area Offices are in Osun State?
A) 20 LGAs | B) 30 LGAs (and 1 Area Office: Ife East Area Office, Modakeke) | C) 33 LGAs | D) 18 LGAs
Answer: B (30 Local Government Areas + 1 Area Office)

How many Senatorial Districts, Federal Constituencies, and State House of Assembly seats does Osun State have?
A) 3 Senatorial Districts, 9 Federal Constituencies, 26 State Assembly seats | B) 3 Senatorial, 10 Federal, 30 State seats | C) 4 Senatorial, 8 Federal, 24 State seats | D) 3 Senatorial, 6 Federal, 26 State seats
Answer: A (3 Senatorial Districts, 9 Federal Constituencies, 26 State House of Assembly seats)

Who was the first Military Administrator of Osun State (August 1991 – January 1992)?
A) Col. Theophilus Bamigboye | B) Col. Leo Segun Ajiborisha | C) Col. Anthony Obi | D) Navy Cmdr. Anthony Udofia
Answer: B (Col. Leo Segun Ajiborisha)

Who was the first Civilian Executive Governor of Osun State (January 1992 – November 1993)?
A) Chief Adebisi Akande | B) Senator Isiaka Adetunji Adeleke | C) Prince Olagunsoye Oyinlola | D) Alhaji Isiaka Oyetola
Answer: B (Senator Isiaka Adetunji Adeleke)

Who was the first Fourth Republic Civilian Governor of Osun State (1999–2003)?
A) Chief Adebisi Akande | B) Prince Olagunsoye Oyinlola | C) Ogbeni Rauf Aregbesola | D) Senator Ademola Adeleke
Answer: A (Chief Adebisi Akande)

Who is the current Deputy Governor of Osun State?
A) Mr. Benedict Alabi | B) Prince Kola Adewusi | C) Mrs. Titi Laoye-Tomori | D) Otunba Iyiola Omisore
Answer: B (Prince Kola Adewusi)

Who is the current Speaker of the 8th Osun State House of Assembly?
A) Rt. Hon. Timothy Owoeye | B) Rt. Hon. Adewale Olumide Egbedun | C) Rt. Hon. Najeem Salaam | D) Rt. Hon. Mojeed Alabi
Answer: B (Rt. Hon. Adewale Olumide Egbedun)

Who is the current Chief Judge of Osun State?
A) Hon. Justice Oyebola Adepele Ojo | B) Hon. Justice Adewale Ojo | C) Hon. Justice Gloria Oladoke | D) Hon. Justice Kudirat Kekere-Ekun
Answer: A (Hon. Justice Oyebola Adepele Ojo)

Who are the current Secretary to the State Government (SSG), Chief of Staff (CoS), and Head of Service (HoS) in Osun State?
A) SSG: Hon. Teslim Igbalaye; CoS: Alhaji Kazeem Akinleye; HoS: Elder Samuel Ayanleye Aina | B) SSG: Kazeem Akinleye; CoS: Teslim Igbalaye | C) SSG: Dipo Eluwole; CoS: Festus Oyebade | D) SSG: Kolapo Alimi; CoS: Olawale Rasheed
Answer: A (SSG: Hon. Teslim Igbalaye; CoS: Alhaji Kazeem Akinleye; HoS: Elder Samuel Ayanleye Aina)

Which landmark in Osogbo was inscribed as a UNESCO World Heritage Site in 2005?
A) Olumirin Waterfalls | B) Osun-Osogbo Sacred Grove | C) Oranmiyan Staff | D) Kiriji War Memorial
Answer: B (Osun-Osogbo Sacred Grove)

In which town and Local Government Area of Osun State is the famous Olumirin Waterfalls located?
A) Erin-Ijesha (Oriade LGA) | B) Ile-Ife (Ife Central LGA) | C) Ikirun (Ifelodun LGA) | D) Ila-Orangun (Ila LGA)
Answer: A (Erin-Ijesha in Oriade Local Government Area)

Section 3: Pedagogy, Higher Education Practice & Research Ethics (Questions 131–170)
Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)
What are the three statutory core mandates (triad) of a university lecturer?
A) Lecturing, Grading, Invigilating | B) Teaching, Research, and Community Service | C) Administration, Politics, Unionism | D) Publishing, Consulting, Travelling
Answer: B (Teaching, Research, and Community Service)

What is the fundamental distinction between a secondary school teacher and a university lecturer?
A) A lecturer does not assess students | B) A teacher primarily transmits established curriculum knowledge, whereas a lecturer generates new knowledge through original research and facilitates independent critical inquiry | C) A teacher only uses textbooks | D) Lecturers do not need lesson plans
Answer: B (Teacher transmits established curriculum; Lecturer generates new knowledge through research and facilitates independent inquiry)

What is the difference between Pedagogy and Andragogy?
A) Pedagogy is the method/practice of teaching children/dependent learners; Andragogy (popularized by Malcolm Knowles) is the theory and practice of educating self-directed adult learners (such as university students) | B) Andragogy is for primary schools | C) Pedagogy is only for practical labs | D) They are antonyms
Answer: A (Pedagogy = child learning; Andragogy = adult self-directed learning)

What does the NUC acronym CCMAS stand for?
A) Comprehensive Course Manual for Academic Staff | B) Core Curriculum and Minimum Academic Standards | C) Central Committee on Minimum Academic Standards | D) Core Competence in Modern Academic Studies
Answer: B (Core Curriculum and Minimum Academic Standards)

Which previous curriculum framework did the NUC replace with CCMAS?
A) NBTE | B) BMAS (Benchmark Minimum Academic Standards) | C) UBE | D) WAEC
Answer: B (BMAS — Benchmark Minimum Academic Standards)

Under the NUC CCMAS framework, how is the curriculum percentage split between the NUC national core and the individual University’s local/peculiar innovation?
A) 50% NUC / 50% University | B) 70% NUC National Core / 30% University Local Peculiarity | C) 80% NUC / 20% University | D) 100% NUC
Answer: B (70% NUC National Core / 30% University Local Peculiarity)

According to NUC minimum academic standards, what is the minimum class/lecture attendance percentage a student must achieve to be eligible to sit for a semester examination?
A) 50% | B) 60% | C) 75% | D) 90%
Answer: C (75% Minimum Attendance)

In the Nigerian university credit system, 1 Credit Unit of a lecture-based course typically represents how many contact hours per week for one semester (15 weeks)?
A) 1 hour of lecture per week for 15 weeks (15 contact hours total) | B) 3 hours per day | C) 5 hours per week | D) 10 hours per semester
Answer: A (1 hour per week for 15 weeks = 15 contact hours; for practical labs, 3 hours per week = 1 Credit Unit)

What is the statutory NUC qualification treated as the minimum benchmark for career progression as a substantive Career Lecturer in the Nigerian University System?
A) B.Sc. only | B) PGD | C) Ph.D. (Doctor of Philosophy) in the relevant discipline | D) HND
Answer: C (Ph.D.)

What is the standard hierarchy of academic ranks in Nigerian universities from lowest to highest?
A) Graduate Assistant → Assistant Lecturer → Lecturer II → Lecturer I → Senior Lecturer → Reader (Associate Professor) → Professor | B) Lecturer I → Lecturer II → Reader → Senior Lecturer | C) Assistant Lecturer → Senior Lecturer → Lecturer I | D) Fellow → Dean → Provost
Answer: A (GA → AL → LII → LI → SL → Reader/Assoc. Prof. → Professor)

What does the doctrine of In Loco Parentis mean in higher education administration?
A) Teaching in Latin | B) "In the place of a parent" — the legal and moral responsibility of the university and its staff to guide, protect, and look after the welfare/discipline of students | C) Local community service | D) Parental Association meetings
Answer: B ("In the place of a parent")

In Outcome-Based Education (OBE), what is a Learning Outcome?
A) The list of topics the lecturer intends to read out | B) A clear, measurable statement of what a student will know, understand, or be able to do by the end of a course or module | C) The pass mark of an exam | D) The textbook bibliography
Answer: B (Clear, measurable statement of what a student will know, understand, or do by end of course)

In Vygotsky’s constructivist learning theory, providing temporary structured support to students as they learn a difficult new concept and gradually removing it as they gain independence is called:
A) Conditioning | B) Instructional Scaffolding (within the Zone of Proximal Development — ZPD) | C) Rote Memorization | D) Summative Grading
Answer: B (Instructional Scaffolding within ZPD)

What is the primary purpose of the Peer Review / External Examination system for final-year undergraduate (400L/500L) and postgraduate exams?
A) To delay graduation | B) Quality assurance, moderation of questions/marking schemes, and ensuring parity of academic standards across universities | C) Generating revenue | D) Replacing the HOD
Answer: B (Quality assurance, moderation of questions/marking schemes, and ensuring parity of academic standards)

Who serves as the Chief Examiner of an academic Department in a university?
A) The Course Representative | B) The Head of Department (HOD) | C) The University Bursar | D) The Student Affairs Officer
Answer: B (The Head of Department — HOD; Vice-Chancellor is Chief Examiner of the University)

Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)
Who proposed the original 1956 Taxonomy of Educational Objectives, and what are its three primary domains?
A) Benjamin Bloom — Cognitive (Head/Knowledge), Affective (Heart/Attitude), Psychomotor (Hand/Skills) | B) B.F. Skinner — Visual, Auditory, Kinesthetic | C) Jean Piaget — Sensory, Concrete, Formal | D) Sigmund Freud — Id, Ego, Superego
Answer: A (Benjamin Bloom: Cognitive, Affective, Psychomotor)

In the Revised Bloom’s Cognitive Taxonomy (Anderson & Krathwohl, 2001), what is the correct ascending order from lowest to highest cognitive skill?
A) Remembering → Understanding → Applying → Analyzing → Evaluating → Creating | B) Creating → Evaluating → Applying → Remembering | C) Understanding → Remembering → Analyzing | D) Applying → Remembering → Creating
Answer: A (Remembering → Understanding → Applying → Analyzing → Evaluating → Creating)

When an IT lecturer watches a student physically crimp an RJ-45 Ethernet cable or wire an ESP32 microcontroller on a breadboard, which learning domain is primarily being assessed?
A) Cognitive | B) Affective | C) Psychomotor Domain | D) Epistemological
Answer: C (Psychomotor Domain — physical/manual/technical manipulation skills)

When a university declares at convocation that its graduates are being awarded degrees because they have been found "worthy in Character and in Learning", "Character" corresponds to which domain?
A) Cognitive | B) Affective Domain (values, ethics, attitudes, emotional maturity) | C) Psychomotor | D) Quantitative
Answer: B (Affective Domain — values, ethics, attitudes, emotional maturity)

An assessment given at the very beginning of a course to identify students' prior baseline knowledge and prerequisite gaps is called:
A) Summative Assessment | B) Diagnostic Assessment | C) Ipsative Assessment | D) Terminal Assessment
Answer: B (Diagnostic Assessment)

Continuous Assessment (CA) tests, mid-semester coding labs, quizzes, and interactive class feedback used to monitor learning progress during the semester are examples of:
A) Summative Assessment | B) Formative Assessment (Assessment FOR Learning) | C) Normative Ranking | D) Entrance Screening
Answer: B (Formative Assessment — Assessment FOR Learning)

The end-of-semester examination (typically weighted at 60% or 70%) used to evaluate overall student mastery and assign final course grades is:
A) Formative Assessment | B) Summative Assessment (Assessment OF Learning) | C) Diagnostic Assessment | D) Informal Observation
Answer: B (Summative Assessment — Assessment OF Learning)

What is the difference between Criterion-Referenced Assessment and Norm-Referenced Assessment?
A) Criterion-referenced measures a student's performance against a fixed, predetermined standard/cut-off (e.g., scoring >= 50% or >= 70% for an 'A'); Norm-referenced compares and ranks a student against peers (grading on a bell curve/percentile) | B) Norm-referenced has a fixed pass mark for all | C) Criterion-referenced allows only 5% to pass | D) They are identical
Answer: A (Criterion-referenced measures against fixed standard; Norm-referenced ranks against peer distribution)

If an examination paper actually tests the specific course objectives and syllabus topics it was designed to measure, the examination has high:
A) Content/Construct Validity | B) Reliability only | C) Speed | D) Skewness
Answer: A (Content/Construct Validity)

What is the purpose of preparing a Marking Scheme and Table of Specifications (Test Blueprint) before setting and grading an examination?
A) To make the exam harder | B) To ensure balanced topic coverage across cognitive levels (blueprint) and guarantee objectivity, fairness, and consistency during grading (marking scheme) | C) To help students cheat | D) To avoid teaching
Answer: B (To ensure balanced topic coverage across cognitive levels and guarantee objectivity and consistency)

On a standard 5.00 Grading Scale in Nigerian universities, what letter grade and grade point correspond to a raw score of 64%?
A) A (5 points) | B) B (4 points — 60% to 69%) | C) C (3 points — 50% to 59%) | D) D (2 points — 45% to 49%)
Answer: B (Grade B = 4.00 points; 60% to 69%)

What is the difference between GPA and CGPA?
A) GPA (Grade Point Average) is calculated for a single semester (Total Grade Points / Total Credit Units); CGPA (Cumulative Grade Point Average) is calculated across all semesters completed from admission to date | B) CGPA is for one semester only | C) GPA does not use credit units | D) They are always equal
Answer: A (GPA is single semester average; CGPA is cumulative across all completed semesters)

Calculate the Semester GPA of a student who took two 3-unit courses (scoring an 'A' in one and a 'C' in the other) and one 2-unit course (scoring a 'B'):
A) 3.50 | B) 4.00 | C) 4.25 | D) 3.75
Answer: B (4.00 — Quality Points: (3x5) + (3x3) + (2x4) = 15+9+8 = 32. Total Units = 8. 32/8 = 4.00)

On a 5.00 CGPA scale, a graduating student with a CGPA of 2.85 falls into which degree classification?
A) Second Class Upper (2:1) | B) Second Class Lower (2:2 — 2.40 to 3.49) | C) Third Class (1.50 to 2.39) | D) First Class (4.50 to 5.00)
Answer: B (Second Class Lower — 2:2; range 2.40 to 3.49)

In the Flipped Classroom pedagogical model, how is instructional time structured?
A) Students review lecture materials/videos prior to class, and in-class contact time is dedicated to active problem-solving, coding labs, and interactive discussion | B) Students grade the lecturer | C) Lectures are held only at night | D) There are no assessments
Answer: A (Students review instructional materials before class; contact hours used for active problem solving)

Part C: Research Ethics & Academic Integrity (Q161–Q170)
In research ethics, what is the difference between Data Fabrication and Data Falsification?
A) Fabrication is making up non-existent data/results and recording them; Falsification is manipulating research materials, equipment, or processes, or altering/omitting existing data so the research is not accurately represented | B) Fabrication is legal | C) Falsification is proper citation | D) Both mean peer review
Answer: A (Fabrication is inventing fake data; Falsification is manipulating/altering real data or results)

Re-using substantial portions of one's own previously published text or data in a new publication without proper citation or disclosure is an ethical violation known as:
A) Literature Review | B) Self-Plagiarism (Text Recycling) | C) Open Access | D) Copyright Transfer
Answer: B (Self-Plagiarism / Text Recycling / Duplicate Publication)

Adding a senior colleague or acquaintance as a co-author on a research paper when they made no substantial intellectual contribution to the study is called:
A) Ghost Authorship | B) Gift / Honorary (Guest) Authorship | C) Corresponding Authorship | D) Blind Review
Answer: B (Gift / Honorary Authorship) — (Whereas omitting someone who wrote the paper is Ghost Authorship).

Which core principle of human-subject research ethics requires that participants fully understand the study's purpose, risks, and benefits and voluntarily agree to participate before data collection begins?
A) Double-Blind Testing | B) Informed Consent | C) Statistical Significance | D) P-Hacking
Answer: B (Informed Consent)

Which university committee must review and approve any research proposal involving human participants, clinical data, or animal subjects before benchwork begins?
A) Senate Business Committee | B) Institutional Review Board (IRB) / Research Ethics Committee | C) Students' Disciplinary Committee | D) Tenders Board
Answer: B (Institutional Review Board / Research Ethics Committee)

In scholarly publishing, what is a Predatory Journal?
A) A high-impact Nature journal | B) An exploitative publishing model that charges Article Processing Charges (APCs) to authors without providing legitimate peer review, editorial quality control, or recognized indexing | C) A journal with a low acceptance rate | D) Any university journal
Answer: B (Exploitative publishing charging APCs without legitimate peer review or recognized indexing)

Which two major international citation and abstract databases are most widely recognized by NUC and global ranking bodies (like THE) for indexing high-impact scholarly journals?
A) Wikipedia and ResearchGate | B) Scopus (Elsevier) and Web of Science / Clarivate (SCI/SSCI) | C) Google Drive and Dropbox | D) Scribd and Academia.edu
Answer: B (Scopus and Web of Science)

What does an academic's h-index (proposed by Jorge Hirsch) measure?
A) Only the total number of papers written | B) Both productivity and citation impact: a scholar with an index of h has published h papers each of which has been cited in other papers at least h times | C) The cost of research grants | D) Years of teaching experience
Answer: B (Both productivity and citation impact: h papers cited at least h times)

What is Double-Blind Peer Review?
A) Reviewers know the author's name | B) Both the reviewers and the authors remain anonymous to each other throughout the review process to eliminate bias | C) Two editors read the title only | D) The paper is published without review
Answer: B (Both reviewers and authors remain anonymous to each other to prevent bias)

In Nigeria, which federal agency provides major intervention funds for physical infrastructure, staff PhD/postdoc training, and National Research Fund (NRF) grants in public tertiary institutions?
A) NELFUND | B) TETFund (Tertiary Education Trust Fund) | C) PTDF | D) CBN
Answer: B (TETFund — Tertiary Education Trust Fund)

Section 4: General Aptitude, National Current Affairs & Reasoning (Questions 171–200)
Part A: National & Educational Current Affairs (Q171–Q180)
Who is the current Minister of Education and the Minister of State for Education in Nigeria?
A) Minister: Dr. Maruf Tunji Alausa; Minister of State: Prof. Suwaiba Said Ahmad | B) Prof. Tahir Mamman and Dr. Yusuf Sununu | C) Mallam Adamu Adamu and Chukwuemeka Nwajiuba | D) Prof. Ishaq Oloyede and Sonny Echono
Answer: A (Dr. Maruf Tunji Alausa & Prof. Suwaiba Said Ahmad)

Who is the current Executive Secretary of the National Universities Commission (NUC)?
A) Prof. Abubakar Adamu Rasheed | B) Prof. Abdullahi Yusufu Ribadu | C) Chris Maiyaki | D) Prof. Peter Okebukola
Answer: B (Prof. Abdullahi Yusufu Ribadu)

Who are the current heads of JAMB, TETFund, and NELFUND?
A) JAMB: Prof. Ishaq Oloyede; TETFund: Arc. Sonny Echono; NELFUND: Mr. Akintunde Sawyerr | B) JAMB: Dibu Ojerinde; TETFund: Bogoro | C) JAMB: Ribadu; TETFund: Alausa | D) JAMB: Sawyerr; NELFUND: Oloyede
Answer: A (JAMB: Prof. Ishaq Oloyede; TETFund: Arc. Sonny Echono; NELFUND: Mr. Akintunde Sawyerr)

Who is the current Minister of Communications, Innovation and Digital Economy, and who is the DG of NITDA?
A) Minister: Dr. Bosun Tijani; NITDA DG: Kashifu Inuwa Abdullahi | B) Minister: Isa Pantami; NITDA DG: Cleopas Angaye | C) Minister: Tunji Alausa; NITDA DG: Aminu Maida | D) Minister: Wale Edun; NITDA DG: Bosun Tijani
Answer: A (Minister: Dr. Bosun Tijani; NITDA DG: Kashifu Inuwa Abdullahi)

Who is the current Chief Justice of Nigeria (CJN)?
A) Hon. Justice Olukayode Ariwoola | B) Hon. Justice Kudirat Motonmori Olatokunbo Kekere-Ekun | C) Hon. Justice Aloma Mariam Mukhtar | D) Hon. Justice Kayode Eso
Answer: B (Hon. Justice Kudirat Kekere-Ekun)

Who are the presiding officers of Nigeria’s 10th National Assembly?
A) Senate President: Sen. Godswill Akpabio; Speaker of House of Reps: Rt. Hon. Tajudeen Abbas | B) Senate President: Ahmad Lawan; Speaker: Femi Gbajabiamila | C) Senate President: Bukola Saraki; Speaker: Yakubu Dogara | D) Senate President: Barau Jibrin; Speaker: Benjamin Kalu
Answer: A (Senate President: Godswill Akpabio; Speaker: Tajudeen Abbas)

Who is the current Governor of the Central Bank of Nigeria (CBN)?
A) Godwin Emefiele | B) Olayemi Cardoso | C) Sanusi Lamido Sanusi | D) Folashodun Shonubi
Answer: B (Olayemi Cardoso)

Who are the current Chief of Defence Staff (CDS) and Inspector General of Police (IGP) in Nigeria?
A) CDS: General Olufemi Oluyede; IGP: Kayode Egbetokun | B) CDS: Lucky Irabor; IGP: Usman Baba | C) CDS: Tukur Buratai; IGP: Ibrahim Idris | D) CDS: Nuhu Ribadu; IGP: Waidi Shaibu
Answer: A (CDS: Gen. Olufemi Oluyede; IGP: Kayode Egbetokun)

Who wrote the lyrics and who composed the music for Nigeria’s reinstated National Anthem, "Nigeria, We Hail Thee"?
A) Lyrics: Lillian Jean Williams; Music: Frances Benda | B) Lyrics & Music: Benedict Odiase | C) Wole Soyinka and Fela Sowande | D) Taiwo Akinkunmi
Answer: A (Lyrics: Lillian Jean Williams; Music: Frances Benda) — (Benedict Odiase composed "Arise, O Compatriots"; Taiwo Akinkunmi designed the National Flag).

Who is the current Secretary-General of the United Nations (UN), and which Nigerian serves as the Deputy Secretary-General?
A) SG: António Guterres; Deputy SG: Amina J. Mohammed | B) SG: Ban Ki-moon; Deputy SG: Ngozi Okonjo-Iweala | C) SG: Kofi Annan; Deputy SG: Akinwumi Adesina | D) SG: Tedros Adhanom; Deputy SG: Amina Mohammed
Answer: A (SG: António Guterres; Deputy SG: Amina J. Mohammed) — (Note: Dr. Ngozi Okonjo-Iweala is DG of the World Trade Organization [WTO]).

Part B: Quantitative Reasoning & Applied Arithmetic (Q181–Q190)
A candidate needs at least 50% to pass a regularisation CBT of 60 questions. If the candidate correctly answers 75% of the first 40 questions, how many of the remaining 20 questions must they get right to achieve an overall score of 70%?
A) 10 | B) 12 | C) 14 | D) 15
Answer: B (12) — (Target = 70% of 60 = 42 questions. Already scored = 75% of 40 = 30. Needed = 42 - 30 = 12).

If Lecturer A can grade a batch of scripts in 6 hours and Lecturer B can grade the same batch in 3 hours, how long will it take both of them working together at their respective rates?
A) 1.5 hours | B) 2 hours | C) 2.5 hours | D) 4.5 hours
Answer: B (2 hours) — (1/6 + 1/3 = 3/6 = 1/2 => 2 hours).

The ratio of male to female students in an IT class is 5:3. If there are 120 students in total, how many female students are in the class?
A) 40 | B) 45 | C) 75 | D) 60
Answer: B (45) — (3/(5+3) * 120 = 3/8 * 120 = 3 * 15 = 45).

A laptop’s price is first increased by 20% and later discounted by 20%. Compared to the original price, the final price is:
A) Unchanged (0%) | B) 4% lower | C) 4% higher | D) 2% lower
Answer: B (4% lower) — (100 * 1.20 = 120; 120 * 0.80 = 96 => 4% decrease).

A staff bus travels from the Osogbo campus to the Ikire campus, a distance of 90 km, at an average speed of 60 km/h. How many minutes does the journey take?
A) 60 minutes | B) 90 minutes | C) 100 minutes | D) 120 minutes
Answer: B (90 minutes / 1.5 hours) — (Time = 90 / 60 = 1.5 hours = 90 minutes).

What is the Simple Interest on a research equipment loan of ₦500,000 for 3 years at an annual interest rate of 8%?
A) ₦80,000 | B) ₦120,000 | C) ₦150,000 | D) ₦40,000
Answer: B (₦120,000) — (I = (P * R * T) / 100 = (500000 * 8 * 3)/100 = ₦120,000).

Find the next number in the sequence: 2, 6, 12, 20, 30, 42, ___
A) 52 | B) 56 | C) 54 | D) 60
Answer: B (56) — (Differences increase by 2: +4, +6, +8, +10, +12, +14 -> 42 + 14 = 56; or n*(n+1)).

In a Faculty of 50 lecturers, 30 teach Python, 25 teach Java, and 10 teach both Python and Java. How many lecturers teach neither Python nor Java?
A) 0 | B) 5 | C) 10 | D) 15
Answer: B (5) — (|P union J| = 30 + 25 - 10 = 45. Neither = 50 - 45 = 5).

The mean score of 4 students is 65. When a 5th student’s score is added, the mean rises to 68. What did the 5th student score?
A) 75 | B) 80 | C) 78 | D) 82
Answer: B (80) — (5 * 68 - 4 * 65 = 340 - 260 = 80).

Solve for x in the exponential equation: 2^(2x - 1) = 32
A) 2 | B) 3 | C) 4 | D) 5
Answer: B (3) — (32 = 2^5 => 2x - 1 = 5 => 2x = 6 => x = 3).

Part C: Verbal Reasoning & Logical Deduction (Q191–Q200)
Choose the word most nearly SIMILAR in meaning (Synonym) to PRAGMATIC:
A) Idealistic | B) Practical / Realistic | C) Dogmatic | D) Ambiguous
Answer: B (Practical / Realistic)

Choose the word most nearly SIMILAR in meaning (Synonym) to UBIQUITOUS:
A) Scarce | B) Omnipresent (Present everywhere) | C) Obscure | D) Antiquated
Answer: B (Omnipresent)

Choose the word most nearly OPPOSITE in meaning (Antonym) to CANDID:
A) Frank | B) Deceptive / Guarded | C) Outspoken | D) Sincere
Answer: B (Deceptive / Guarded)

Choose the word most nearly OPPOSITE in meaning (Antonym) to MITIGATE:
A) Alleviate | B) Aggravate / Exacerbate | C) Soften | D) Assuage
Answer: B (Aggravate / Exacerbate)

Analogy: ALGORITHM : CODE :: BLUEPRINT : ___
A) Architect | B) Building | C) Paper | D) Foundation
Answer: B (Building) — (An algorithm is the abstract plan implemented as code; a blueprint is the plan realized as a building).

Analogy: PLAGIARISM : SCHOLARSHIP :: COUNTERFEITING : ___
A) Banking | B) Currency / Minting | C) Auditing | D) Inflation
Answer: B (Currency / Minting)

Grammar Agreement: "Neither the Head of Department nor the course lecturers ___ aware of the venue change yesterday."
A) was | B) were | C) is | D) has been
Answer: B (were) — (With "Neither... nor", the verb agrees with the closer subject ["lecturers" — plural] and past tense ["yesterday"]).

Logical Deduction: "If a candidate scores at least 50%, they advance to the oral interview. Tunde did not advance to the oral interview." Which conclusion MUST be true?
A) Tunde scored 50% | B) Tunde scored less than 50% | C) The CBT server crashed | D) Tunde arrived late
Answer: B (Tunde scored less than 50% — Modus Tollens)

Odd-One-Out: Which of the following does NOT belong with the others?
A) PostgreSQL | B) MySQL | C) Express.js | D) Oracle DB
Answer: C (Express.js — Express.js is a Node.js framework; others are RDBMS).

Seating Logic: Five lecturers (P, Q, R, S, T) sit in a row facing North. R is at the exact center. P is immediately to the left of R, and T is at the far right end. If S is not at the far left end, who is sitting at the far left end?
A) P | B) Q | C) S | D) R
Answer: B (Q — Left to right: Q - P - R - S - T).
"""

def parse_and_generate():
    lines = [l.strip() for l in raw_data.strip().split('\n')]
    questions = []
    
    current_sec = "IT"
    current_sec_title = "Core Subject Competence — Information Technology"
    current_part = "General"
    
    i = 0
    q_num = 0
    while i < len(lines):
        line = lines[i]
        if not line:
            i += 1
            continue
        
        if line.startswith("Section 1:"):
            current_sec = "IT"
            current_sec_title = "Information Technology & Computing"
            i += 1
            continue
        elif line.startswith("Section 2:"):
            current_sec = "UNIOSUN"
            current_sec_title = "UNIOSUN & Osun State Fact Sheet"
            i += 1
            continue
        elif line.startswith("Section 3:"):
            current_sec = "PEDAGOGY"
            current_sec_title = "Pedagogy, Higher Education & Ethics"
            i += 1
            continue
        elif line.startswith("Section 4:"):
            current_sec = "APTITUDE"
            current_sec_title = "General Aptitude, Current Affairs & Logic"
            i += 1
            continue
        
        if line.startswith("Part "):
            current_part = line
            i += 1
            continue
            
        # If line is a question
        q_text = line
        i += 1
        while i < len(lines) and not lines[i].startswith("A)"):
            if lines[i]:
                q_text += " " + lines[i]
            i += 1
            
        if i >= len(lines):
            break
            
        opts_line = lines[i]
        i += 1
        
        ans_line = ""
        while i < len(lines) and not lines[i].startswith("Answer:"):
            i += 1
        if i < len(lines):
            ans_line = lines[i]
            i += 1
            
        # Parse opts
        # Format: A) Opt1 | B) Opt2 | C) Opt3 | D) Opt4
        # or split by |
        parts = opts_line.split("|")
        clean_opts = []
        for p in parts:
            p = p.strip()
            # remove prefix like A), B), C), D)
            if len(p) >= 3 and p[1] in [')', '.'] and p[0] in ['A', 'B', 'C', 'D']:
                p = p[2:].strip()
            clean_opts.append(p)
            
        # Parse Answer: X (...)
        ans_char = 'A'
        explanation = ""
        if "Answer:" in ans_line:
            rest = ans_line.replace("Answer:", "").strip()
            ans_char = rest[0].upper()
            raw_exp = rest[1:].strip()
            
            # Replace LaTeX formatting like $...$ with clean readable math
            raw_exp = raw_exp.replace("$2^{32-27} - 2 = 2^5 - 2 = 30$", "2^(32-27) - 2 = 32 - 2 = 30")
            raw_exp = raw_exp.replace("\\rightarrow", "➔").replace("\\Rightarrow", "➔")
            raw_exp = raw_exp.replace("\\ge", "≥").replace("\\le", "≤")
            raw_exp = raw_exp.replace("\\in", "∈").replace("\\ll", "«")
            raw_exp = raw_exp.replace("\\times", "×").replace("\\neg", "¬").replace("\\vdash", "⊢")
            raw_exp = raw_exp.replace("$$", "").replace("$", "")
            raw_exp = raw_exp.replace("\\text{", "").replace("}", "")
            raw_exp = raw_exp.replace("\\frac", "").replace("\\vert", "|")
            
            # Handle patterns like "(Val) — (Exp)" or "(Val) - (Exp)"
            match_double = re.match(r'^\(([^)]+)\)\s*[—–-]\s*\((.+)\)\.?$', raw_exp)
            if match_double:
                raw_exp = f"{match_double.group(1)}: {match_double.group(2)}"
            else:
                # If wrapped in single outer parentheses
                if raw_exp.startswith("(") and raw_exp.endswith(")"):
                    raw_exp = raw_exp[1:-1].strip()
                elif raw_exp.startswith("("):
                    # Check if there is a closing paren early like (Val) — Exp
                    match_single = re.match(r'^\(([^)]+)\)\s*[—–-]?\s*(.*)$', raw_exp)
                    if match_single:
                        p1 = match_single.group(1)
                        p2 = match_single.group(2).strip()
                        if p2.startswith("(") and p2.endswith(")"):
                            p2 = p2[1:-1].strip()
                        raw_exp = f"{p1} — {p2}" if p2 else p1
                        
            # Clean any trailing unmatched parens or dots
            raw_exp = raw_exp.strip(" -–—:\t")
            if raw_exp.endswith(")") and raw_exp.count(")") > raw_exp.count("("):
                raw_exp = raw_exp[:-1].strip()
            explanation = raw_exp
            if not explanation:
                explanation = f"Correct option is {ans_char}."
        
        char_to_idx = {'A': 0, 'B': 1, 'C': 2, 'D': 3}
        ans_idx = char_to_idx.get(ans_char, 0)
        
        q_num += 1
        questions.append({
            "id": q_num,
            "sec": current_sec,
            "secTitle": current_sec_title,
            "part": current_part,
            "q": q_text,
            "opts": clean_opts,
            "ans": ans_idx,
            "exp": explanation
        })
        
    print(f"Parsed {len(questions)} questions.")
    
    # Save to c:\Project\uniosun\questions.js
    out_path = r"c:\Project\uniosun\questions.js"
    js_content = f"// UNIOSUN Regularisation Comprehensive CBT Question Bank (200 Questions)\nconst questionBank = {json.dumps(questions, indent=2, ensure_ascii=False)};\n"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print("Wrote questions.js successfully!")

if __name__ == "__main__":
    parse_and_generate()
