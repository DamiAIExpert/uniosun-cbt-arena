// UNIOSUN Regularisation Comprehensive CBT Question Bank (200 Questions)
const questionBank = [
  {
    "id": 1,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "Which layer of the OSI model converts data segments into network packets and handles logical IP addressing and routing?",
    "opts": [
      "Data Link",
      "Transport",
      "Network",
      "Session"
    ],
    "ans": 2,
    "exp": "Network Layer — Layer 3"
  },
  {
    "id": 2,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "What is the Protocol Data Unit (PDU) at the Data Link Layer (Layer 2) of the OSI model?",
    "opts": [
      "Bit",
      "Frame",
      "Packet",
      "Segment"
    ],
    "ans": 1,
    "exp": "Frame"
  },
  {
    "id": 3,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "How many usable host IP addresses are available in a /27 IPv4 subnet (255.255.255.224)?",
    "opts": [
      "32",
      "30",
      "62",
      "14"
    ],
    "ans": 1,
    "exp": "30: 2^(32-27) - 2 = 32 - 2 = 30"
  },
  {
    "id": 4,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "Which protocol resolves a known IPv4 address to an unknown physical MAC address on a local area network?",
    "opts": [
      "RARP",
      "DNS",
      "ARP",
      "DHCP"
    ],
    "ans": 2,
    "exp": "ARP — Address Resolution Protocol"
  },
  {
    "id": 5,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "Which standard TCP port is used by HTTPS for encrypted web traffic?",
    "opts": [
      "80",
      "8080",
      "22",
      "443"
    ],
    "ans": 3,
    "exp": "443"
  },
  {
    "id": 6,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "Which IPv4 address range is reserved as a Class C Private IP block under RFC 1918?",
    "opts": [
      "10.0.0.0 – 10.255.255.255",
      "172.16.0.0 – 172.31.255.255",
      "192.168.0.0 – 192.168.255.255",
      "127.0.0.0 – 127.255.255.255"
    ],
    "ans": 2,
    "exp": "192.168.0.0 – 192.168.255.255"
  },
  {
    "id": 7,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "What is the length of an IPv6 address in bits and hexadecimal groups?",
    "opts": [
      "64 bits, 4 groups",
      "128 bits, 8 groups",
      "32 bits, 4 octets",
      "256 bits, 16 groups"
    ],
    "ans": 1,
    "exp": "128 bits, 8 groups of 4 hexadecimal digits"
  },
  {
    "id": 8,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "Which networking device separates collision domains per port while keeping all connected hosts in the same broadcast domain by default?",
    "opts": [
      "Hub",
      "Repeater",
      "Layer 2 Switch",
      "Router"
    ],
    "ans": 2,
    "exp": "Layer 2 Switch: A Router separates both collision and broadcast domains; a Hub separates neither"
  },
  {
    "id": 9,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "The three-way handshake used by TCP to establish a reliable connection follows which sequence of flags?",
    "opts": [
      "ACK → SYN → FIN",
      "SYN → SYN-ACK → ACK",
      "SYN → ACK → FIN-ACK",
      "PSH → ACK → SYN"
    ],
    "ans": 1,
    "exp": "SYN → SYN-ACK → ACK"
  },
  {
    "id": 10,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "What is the four-step process used by DHCP to dynamically assign an IP address to a client?",
    "opts": [
      "Request, Offer, Ack, Fin",
      "Discover, Offer, Request, Acknowledge (DORA)",
      "Broadcast, Unicast, Multicast, Anycast",
      "Query, Response, Lease, Renew"
    ],
    "ans": 1,
    "exp": "Discover, Offer, Request, Acknowledge — DORA"
  },
  {
    "id": 11,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "Which protocol does the ping utility use to test host reachability across an IP network?",
    "opts": [
      "IGMP",
      "TCP",
      "ICMP",
      "SNMP"
    ],
    "ans": 2,
    "exp": "ICMP — Internet Control Message Protocol"
  },
  {
    "id": 12,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "Which IEEE standard defines Wi-Fi (Wireless Local Area Networks)?",
    "opts": [
      "IEEE 802.3",
      "IEEE 802.11",
      "IEEE 802.15",
      "IEEE 802.1Q"
    ],
    "ans": 1,
    "exp": "IEEE 802.11: 802.3 is Ethernet; 802.1Q is VLAN tagging"
  },
  {
    "id": 13,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "Which routing algorithm is used by OSPF (Open Shortest Path First) to compute the shortest path tree?",
    "opts": [
      "Bellman-Ford Algorithm",
      "Dijkstra’s Shortest Path First Algorithm",
      "Kruskal’s Algorithm",
      "Floyd-Warshall Algorithm"
    ],
    "ans": 1,
    "exp": "Dijkstra’s Algorithm: RIP uses Bellman-Ford distance-vector"
  },
  {
    "id": 14,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "Which service translates multiple private internal IP addresses into a single public IP address before packets leave for the internet?",
    "opts": [
      "VLAN",
      "VPN",
      "NAT / PAT",
      "BGP"
    ],
    "ans": 2,
    "exp": "NAT / PAT — Network/Port Address Translation"
  },
  {
    "id": 15,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "What is the default subnet mask for a Class B IPv4 address?",
    "opts": [
      "255.0.0.0 (/8)",
      "255.255.0.0 (/16)",
      "255.255.255.0 (/24)",
      "255.255.255.128 (/25)"
    ],
    "ans": 1,
    "exp": "255.255.0.0 or /16"
  },
  {
    "id": 16,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "In RESTful API communication, which HTTP method is idempotent and used to completely replace a target resource?",
    "opts": [
      "POST",
      "PATCH",
      "PUT",
      "CONNECT"
    ],
    "ans": 2,
    "exp": "PUT: POST is not idempotent"
  },
  {
    "id": 17,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "What does HTTP status code 403 signify?",
    "opts": [
      "Bad Request",
      "Unauthorized (Unauthenticated)",
      "Forbidden (Server understands request but refuses authorization)",
      "Resource Not Found"
    ],
    "ans": 2,
    "exp": "Forbidden"
  },
  {
    "id": 18,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part A: Computer Networks & Data Communications (Q1–Q18)",
    "q": "Which DNS record type maps a domain name to an IPv6 address?",
    "opts": [
      "A Record",
      "CNAME Record",
      "AAAA Record",
      "MX Record"
    ],
    "ans": 2,
    "exp": "AAAA Record: A maps to IPv4; MX is Mail Exchange"
  },
  {
    "id": 19,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "Which component of the Operating System is responsible for selecting the next process from the ready queue to allocate CPU time?",
    "opts": [
      "Long-term scheduler",
      "Short-term (CPU) scheduler",
      "Linker",
      "Pager"
    ],
    "ans": 1,
    "exp": "Short-term scheduler / Dispatcher"
  },
  {
    "id": 20,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "A situation in which a low-priority process waits indefinitely because higher-priority processes continuously take the CPU is called:",
    "opts": [
      "Deadlock",
      "Starvation (Indefinite Blocking)",
      "Thrashing",
      "Race Condition"
    ],
    "ans": 1,
    "exp": "Starvation: Solved using Aging"
  },
  {
    "id": 21,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "Which technique gradually increases the priority of processes that wait in the system for a long time to prevent starvation?",
    "opts": [
      "Spooling",
      "Aging",
      "Paging",
      "Thrashing"
    ],
    "ans": 1,
    "exp": "Aging"
  },
  {
    "id": 22,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "Which synchronization primitive uses two atomic operations, wait() (P) and signal() (V), to control access to shared resources?",
    "opts": [
      "Spinlock",
      "Semaphore",
      "Socket",
      "Pipe"
    ],
    "ans": 1,
    "exp": "Semaphore"
  },
  {
    "id": 23,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "When two or more threads access shared data concurrently and the final outcome depends on the exact order of execution, this flaw is known as a:",
    "opts": [
      "Context Switch",
      "Race Condition",
      "Page Fault",
      "Memory Leak"
    ],
    "ans": 1,
    "exp": "Race Condition"
  },
  {
    "id": 24,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "In virtual memory management, dividing physical memory into fixed-size blocks and logical memory into blocks of the same size is called:",
    "opts": [
      "Segmentation",
      "Paging (Frames in physical, Pages in logical)",
      "Fragmentation",
      "Swapping"
    ],
    "ans": 1,
    "exp": "Paging"
  },
  {
    "id": 25,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "Which page replacement algorithm replaces the page that will not be used for the longest period of time in the future (serving as a theoretical benchmark)?",
    "opts": [
      "FIFO",
      "LRU (Least Recently Used)",
      "Optimal (OPT / Belady’s)",
      "Clock"
    ],
    "ans": 2,
    "exp": "Optimal Page Replacement"
  },
  {
    "id": 26,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "What is the phenomenon where increasing the number of page frames allocated to a process paradoxically increases the number of page faults in FIFO replacement?",
    "opts": [
      "Moore’s Law",
      "Belady’s Anomaly",
      "Amdahl’s Law",
      "Locality of Reference"
    ],
    "ans": 1,
    "exp": "Belady’s Anomaly"
  },
  {
    "id": 27,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "Which hardware cache sits inside the Memory Management Unit (MMU) to speed up virtual-to-physical address translation?",
    "opts": [
      "L1 Instruction Cache",
      "TLB (Translation Lookaside Buffer)",
      "DMA Controller",
      "Accumulator"
    ],
    "ans": 1,
    "exp": "TLB — Translation Lookaside Buffer"
  },
  {
    "id": 28,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "Wasted memory space that exists inside an allocated fixed-size partition or page because the process is smaller than the block is called:",
    "opts": [
      "External Fragmentation",
      "Internal Fragmentation",
      "Compaction",
      "Buffer Overflow"
    ],
    "ans": 1,
    "exp": "Internal Fragmentation"
  },
  {
    "id": 29,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "Which CPU register holds the memory address of the next instruction to be fetched and executed?",
    "opts": [
      "Instruction Register (IR)",
      "Program Counter (PC)",
      "Memory Buffer Register (MBR)",
      "Stack Pointer (SP)"
    ],
    "ans": 1,
    "exp": "Program Counter — PC"
  },
  {
    "id": 30,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "Which type of memory is volatile, uses transistors and latches (without capacitors), requires no refreshing, and is used for CPU cache?",
    "opts": [
      "DRAM",
      "SRAM (Static RAM)",
      "EEPROM",
      "Flash Memory"
    ],
    "ans": 1,
    "exp": "SRAM: DRAM uses capacitors and requires periodic refresh cycles"
  },
  {
    "id": 31,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "In Linux/UNIX file permissions, what does the octal permission chmod 755 grant?",
    "opts": [
      "Read/Write/Execute for everyone",
      "Owner: rwx (7); Group: r-x (5); Others: r-x (5)",
      "Owner: rwx (7); Group: rw- (6); Others: r-- (4)",
      "Owner only access"
    ],
    "ans": 1,
    "exp": "rwxr-xr-x — Owner full, Group and Others read/execute"
  },
  {
    "id": 32,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part B: Operating Systems & Computer Architecture (Q19–Q32)",
    "q": "When the CPU stops executing the current instruction stream to respond to an hardware signal (e.g., I/O completion) via an ISR, this mechanism is an:",
    "opts": [
      "Polling loop",
      "Interrupt",
      "System Call",
      "Deadlock"
    ],
    "ans": 1,
    "exp": "Interrupt"
  },
  {
    "id": 33,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "In the relational database model, what is the formal term for the number of attributes (columns) in a relation (table)?",
    "opts": [
      "Cardinality",
      "Degree (Arity)",
      "Tuple",
      "Domain"
    ],
    "ans": 1,
    "exp": "Degree: Cardinality is the number of rows/tuples"
  },
  {
    "id": 34,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "Which integrity rule states that no attribute participating in a Primary Key of a base relation is allowed to accept NULL values?",
    "opts": [
      "Referential Integrity",
      "Entity Integrity",
      "Domain Integrity",
      "User-defined Integrity"
    ],
    "ans": 1,
    "exp": "Entity Integrity"
  },
  {
    "id": 35,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "Which integrity constraint requires that a Foreign Key value must either match an existing Primary Key value in the referenced table or be wholly NULL?",
    "opts": [
      "Entity Integrity",
      "Referential Integrity",
      "Transitive Dependency",
      "Functional Dependency"
    ],
    "ans": 1,
    "exp": "Referential Integrity"
  },
  {
    "id": 36,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "What is the key difference between the SQL commands DELETE, TRUNCATE, and DROP?",
    "opts": [
      "They are identical",
      "DELETE is DML (removes specific rows using WHERE, can be rolled back); TRUNCATE is DDL (removes all rows rapidly without logging individual row deletions, keeps table structure); DROP is DDL (deletes both data and table schema completely)",
      "DROP keeps the schema",
      "TRUNCATE deletes columns"
    ],
    "ans": 1,
    "exp": "DELETE is DML; TRUNCATE is DDL wiping rows; DROP is DDL destroying entire table"
  },
  {
    "id": 37,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "In SQL, what is the difference between the WHERE clause and the HAVING clause?",
    "opts": [
      "WHERE filters individual rows before grouping (GROUP BY); HAVING filters aggregated groups after GROUP BY",
      "HAVING is used without SELECT",
      "WHERE supports aggregate functions like SUM() directly",
      "There is no difference"
    ],
    "ans": 0,
    "exp": "WHERE filters rows before grouping; HAVING filters groups after aggregation"
  },
  {
    "id": 38,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "Which SQL JOIN returns all rows from the left table and the matched rows from the right table, filling in NULL where no match exists on the right?",
    "opts": [
      "INNER JOIN",
      "LEFT OUTER JOIN",
      "RIGHT OUTER JOIN",
      "CROSS JOIN"
    ],
    "ans": 1,
    "exp": "LEFT OUTER JOIN"
  },
  {
    "id": 39,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "Which normal form specifically resolves anomalies caused when a relation has multiple overlapping candidate keys?",
    "opts": [
      "1NF",
      "2NF",
      "BCNF (Boyce-Codd Normal Form)",
      "4NF"
    ],
    "ans": 2,
    "exp": "BCNF"
  },
  {
    "id": 40,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "Fourth Normal Form (4NF) is achieved when a relation is in BCNF and contains no:",
    "opts": [
      "Partial dependencies",
      "Transitive dependencies",
      "Multi-valued dependencies",
      "Foreign keys"
    ],
    "ans": 2,
    "exp": "Multi-valued dependencies"
  },
  {
    "id": 41,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "Which data structure is most commonly used by relational database engines (like PostgreSQL and MySQL InnoDB) to implement standard disk-based indexes?",
    "opts": [
      "Singly Linked List",
      "B-Tree / B+ Tree",
      "Binary Heap",
      "Adjacency Matrix"
    ],
    "ans": 1,
    "exp": "B+ Tree"
  },
  {
    "id": 42,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "In distributed systems and NoSQL databases, what does the CAP Theorem state?",
    "opts": [
      "A distributed data store can simultaneously provide at most two of three guarantees: Consistency, Availability, and Partition Tolerance",
      "Cache, API, and Persistence",
      "Concurrency, Atomicity, and Performance",
      "All distributed databases are ACID compliant"
    ],
    "ans": 0,
    "exp": "Consistency, Availability, Partition Tolerance"
  },
  {
    "id": 43,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "In SQL Transaction Control Language (TCL), which command permanently saves all changes made during the current transaction?",
    "opts": [
      "SAVEPOINT",
      "ROLLBACK",
      "COMMIT",
      "GRANT"
    ],
    "ans": 2,
    "exp": "COMMIT"
  },
  {
    "id": 44,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "When Transaction A reads uncommitted data modified by Transaction B, and Transaction B subsequently rolls back, Transaction A has suffered from a:",
    "opts": [
      "Phantom Read",
      "Dirty Read",
      "Non-repeatable Read",
      "Serializable Lock"
    ],
    "ans": 1,
    "exp": "Dirty Read"
  },
  {
    "id": 45,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "Which SQL operator combines the result sets of two queries and automatically removes duplicate rows?",
    "opts": [
      "UNION ALL",
      "UNION",
      "JOIN",
      "INTERSECT ALL"
    ],
    "ans": 1,
    "exp": "UNION: UNION ALL retains duplicates"
  },
  {
    "id": 46,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part C: Database Management Systems (Q33–Q46)",
    "q": "A database VIEW is best described as:",
    "opts": [
      "A physical copy of a table stored on a separate disk",
      "A virtual table whose contents are defined by a stored SQL query",
      "A backup file",
      "A primary key index"
    ],
    "ans": 1,
    "exp": "A virtual table defined by a stored query"
  },
  {
    "id": 47,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "What is the average-case time complexity for looking up an element by key in a well-implemented Hash Table?",
    "opts": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "ans": 2,
    "exp": "O(1) — Constant time"
  },
  {
    "id": 48,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "What is the prerequisite condition for applying the Binary Search algorithm on an array?",
    "opts": [
      "The array must contain only positive integers",
      "The array must be sorted",
      "The array size must be a power of 2",
      "The array must be stored as a linked list"
    ],
    "ans": 1,
    "exp": "The array must be sorted"
  },
  {
    "id": 49,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "Which sorting algorithm divides the input array in half recursively, sorts each half, and combines them using O(n) auxiliary space and guaranteed O(n log n) worst-case time?",
    "opts": [
      "Quick Sort",
      "Merge Sort",
      "Heap Sort",
      "Insertion Sort"
    ],
    "ans": 1,
    "exp": "Merge Sort"
  },
  {
    "id": 50,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "Which sorting algorithm is particularly efficient (O(n) time complexity) when the input array is almost sorted?",
    "opts": [
      "Selection Sort",
      "Insertion Sort",
      "Quick Sort",
      "Radix Sort"
    ],
    "ans": 1,
    "exp": "Insertion Sort"
  },
  {
    "id": 51,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "What is the postfix (Reverse Polish Notation) equivalent of the infix expression A + B * C?",
    "opts": [
      "A B + C *",
      "A B C * +",
      "+ A * B C",
      "A B * C +"
    ],
    "ans": 1,
    "exp": "A B C * +"
  },
  {
    "id": 52,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "In a Binary Tree, Which traversal visits nodes in the order: Root → Left Subtree → Right Subtree?",
    "opts": [
      "In-order",
      "Pre-order",
      "Post-order",
      "Level-order"
    ],
    "ans": 1,
    "exp": "Pre-order Traversal"
  },
  {
    "id": 53,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "What is the maximum number of nodes in a binary tree of height h (where a single root node has height 0, or 2^k - 1 for k levels)?",
    "opts": [
      "2^k - 1",
      "2k",
      "k^2",
      "log2(k)"
    ],
    "ans": 0,
    "exp": "2^k - 1, where k is the number of levels"
  },
  {
    "id": 54,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "An AVL Tree is a self-balancing Binary Search Tree in which the heights of the two child subtrees of any node differ by at most:",
    "opts": [
      "0",
      "1",
      "2",
      "log n"
    ],
    "ans": 1,
    "exp": "1 — Balance factor in {-1, 0, +1"
  },
  {
    "id": 55,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "Which data structure provides the most optimal time complexity (O(1) peek, O(log n) insert/delete) for implementing a Priority Queue?",
    "opts": [
      "Unsorted Array",
      "Binary Heap (Min-Heap or Max-Heap)",
      "Doubly Linked List",
      "Hash Map"
    ],
    "ans": 1,
    "exp": "Binary Heap"
  },
  {
    "id": 56,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "Which two classic algorithms are used to find the Minimum Spanning Tree (MST) of a weighted, connected, undirected graph?",
    "opts": [
      "Dijkstra’s and Bellman-Ford",
      "Kruskal’s and Prim’s",
      "BFS and DFS",
      "A* and Minimax"
    ],
    "ans": 1,
    "exp": "Kruskal’s and Prim’s Algorithms"
  },
  {
    "id": 57,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "For a sparse graph with V vertices and E edges (E << V^2), which graph representation is more space-efficient?",
    "opts": [
      "Adjacency Matrix (O(V^2))",
      "Adjacency List (O(V + E))",
      "Incidence Matrix",
      "2D Array"
    ],
    "ans": 1,
    "exp": "Adjacency List — O(V + E)"
  },
  {
    "id": 58,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "In a recursive function, what happens if the base case is omitted or never reached?",
    "opts": [
      "Compilation Error",
      "Stack Overflow Error (Runtime)",
      "Heap Corruption",
      "Automatic garbage collection"
    ],
    "ans": 1,
    "exp": "Stack Overflow"
  },
  {
    "id": 59,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "Solving complex problems by breaking them into overlapping subproblems and storing (memoizing/tabulating) their results to avoid redundant computation is the hallmark of:",
    "opts": [
      "Greedy Algorithms",
      "Divide and Conquer",
      "Dynamic Programming",
      "Backtracking"
    ],
    "ans": 2,
    "exp": "Dynamic Programming"
  },
  {
    "id": 60,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part D: Data Structures & Algorithms (Q47–Q60)",
    "q": "In Complexity Theory, problems for which no known polynomial-time algorithm exists, Set-verifiable in polynomial time, and to which all other NP problems can be reduced in polynomial time are called:",
    "opts": [
      "P Problems",
      "NP-Complete",
      "O(1) Problems",
      "Halting Problems"
    ],
    "ans": 1,
    "exp": "NP-Complete"
  },
  {
    "id": 61,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part E: Software Engineering & OOP (Q61–Q70)",
    "q": "In Object-Oriented Programming, what is the difference between Method Overloading and Method Overriding?",
    "opts": [
      "Overloading occurs at compile-time (same method name, different parameter signatures in the same class); Overriding occurs at runtime (subclass provides a specific implementation of a method already defined in its parent class)",
      "Overloading requires inheritance",
      "Overriding changes the parameter count",
      "They are identical"
    ],
    "ans": 0,
    "exp": "Overloading: compile-time same name diff params; Overriding: runtime subclass replaces parent implementation"
  },
  {
    "id": 62,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part E: Software Engineering & OOP (Q61–Q70)",
    "q": "In SOLID object-oriented design principles, what does the \"S\" (Single Responsibility Principle) state?",
    "opts": [
      "A class should only be instantiated once",
      "A class should have only one reason to change (one primary responsibility)",
      "Software should run on a single server",
      "Subclasses cannot replace superclasses"
    ],
    "ans": 1,
    "exp": "A class should have only one reason to change"
  },
  {
    "id": 63,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part E: Software Engineering & OOP (Q61–Q70)",
    "q": "Which Gang of Four (GoF) Creational Design Pattern ensures that a class has only one instance and provides a global point of access to it?",
    "opts": [
      "Observer",
      "Factory Method",
      "Singleton",
      "Decorator"
    ],
    "ans": 2,
    "exp": "Singleton Pattern"
  },
  {
    "id": 64,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part E: Software Engineering & OOP (Q61–Q70)",
    "q": "In software architecture, good modular design aims to achieve:",
    "opts": [
      "High Coupling and Low Cohesion",
      "Low (Loose) Coupling and High Cohesion",
      "High Coupling and High Cohesion",
      "Zero Cohesion"
    ],
    "ans": 1,
    "exp": "Low Coupling and High Cohesion: Modules should be independent of each other [low coupling] and focused internally [high cohesion]"
  },
  {
    "id": 65,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part E: Software Engineering & OOP (Q61–Q70)",
    "q": "What is the difference between Black-Box Testing and White-Box Testing?",
    "opts": [
      "Black-box tests functionality based on inputs/outputs without knowing internal code structure; White-box tests internal logic, branches, and code paths directly",
      "Black-box is done only by developers",
      "White-box requires no source code",
      "Black-box is unit testing only"
    ],
    "ans": 0,
    "exp": "Black-box focuses on external I/O; White-box inspects internal control flow and paths"
  },
  {
    "id": 66,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part E: Software Engineering & OOP (Q61–Q70)",
    "q": "Testing conducted after modifying software to ensure that new changes have not broken existing, previously working functionality is called:",
    "opts": [
      "Smoke Testing",
      "Regression Testing",
      "Alpha Testing",
      "Penetration Testing"
    ],
    "ans": 1,
    "exp": "Regression Testing"
  },
  {
    "id": 67,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part E: Software Engineering & OOP (Q61–Q70)",
    "q": "What is the distinction between Alpha Testing and Beta Testing?",
    "opts": [
      "Alpha testing is performed at the developer’s site by internal teams/QA; Beta testing is performed by real end-users in their own production-like environment prior to general release",
      "Beta comes before Alpha",
      "Alpha is automated only",
      "Beta is unit testing"
    ],
    "ans": 0,
    "exp": "Alpha: internal dev team; Beta: real end users in realistic setting"
  },
  {
    "id": 68,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part E: Software Engineering & OOP (Q61–Q70)",
    "q": "In UML (Unified Modeling Language), which diagram captures the dynamic interactions between objects arranged in a time sequence?",
    "opts": [
      "Class Diagram",
      "Sequence Diagram",
      "Component Diagram",
      "Deployment Diagram"
    ],
    "ans": 1,
    "exp": "Sequence Diagram"
  },
  {
    "id": 69,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part E: Software Engineering & OOP (Q61–Q70)",
    "q": "In Git version control, which command downloads commits, files, and refs from a remote repository into your local repo without automatically merging them into your current working branch?",
    "opts": [
      "git pull",
      "git fetch",
      "git clone",
      "git push"
    ],
    "ans": 1,
    "exp": "git fetch: git pull = git fetch + git merge"
  },
  {
    "id": 70,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part E: Software Engineering & OOP (Q61–Q70)",
    "q": "In software requirements engineering, system response time, throughput, security, and scalability are classified as:",
    "opts": [
      "Functional Requirements",
      "Non-Functional Requirements (Quality Attributes)",
      "User Stories",
      "Use Cases"
    ],
    "ans": 1,
    "exp": "Non-Functional Requirements"
  },
  {
    "id": 71,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part F: Cybersecurity, AI & Cloud Computing (Q71–Q80)",
    "q": "Which web application vulnerability occurs when untrusted user input is directly concatenated into a database query string, allowing an attacker to manipulate the query structure?",
    "opts": [
      "Cross-Site Request Forgery (CSRF)",
      "SQL Injection (SQLi) — mitigated via Parameterized Queries / Prepared Statements",
      "DDoS",
      "ARP Spoofing"
    ],
    "ans": 1,
    "exp": "SQL Injection"
  },
  {
    "id": 72,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part F: Cybersecurity, AI & Cloud Computing (Q71–Q80)",
    "q": "What is the key difference between Encryption and Cryptographic Hashing (e.g., SHA-256, bcrypt)?",
    "opts": [
      "Encryption is a two-way reversible function (using a key); Hashing is a one-way irreversible mathematical function used to verify data integrity or store passwords",
      "Hashing uses a private key to decrypt",
      "Encryption produces a fixed-length digest regardless of input size",
      "SHA-256 is symmetric encryption"
    ],
    "ans": 0,
    "exp": "Encryption is 2-way reversible; Hashing is 1-way irreversible"
  },
  {
    "id": 73,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part F: Cybersecurity, AI & Cloud Computing (Q71–Q80)",
    "q": "Manipulating people psychologically into divulging confidential information or credentials (e.g., via phishing or pretexting) is known as:",
    "opts": [
      "Brute-force attack",
      "Social Engineering",
      "Zero-day exploit",
      "Packet sniffing"
    ],
    "ans": 1,
    "exp": "Social Engineering"
  },
  {
    "id": 74,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part F: Cybersecurity, AI & Cloud Computing (Q71–Q80)",
    "q": "In Cloud Computing, providing virtualized hardware resources (VMs, raw storage, virtual networks) where the user manages the OS, runtime, and applications (e.g., AWS EC2, DigitalOcean Droplets) is:",
    "opts": [
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "IaaS (Infrastructure as a Service)",
      "FaaS"
    ],
    "ans": 2,
    "exp": "IaaS — Infrastructure as a Service"
  },
  {
    "id": 75,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part F: Cybersecurity, AI & Cloud Computing (Q71–Q80)",
    "q": "How do Docker containers differ from traditional Virtual Machines (VMs)?",
    "opts": [
      "Containers share the host OS kernel and isolate application processes at the OS level (lightweight); VMs virtualize hardware via a Hypervisor and run a full guest OS per instance",
      "Containers require a Type-1 Hypervisor",
      "VMs start up in milliseconds",
      "Docker cannot run on Linux"
    ],
    "ans": 0,
    "exp": "Containers share host OS kernel; VMs run full guest OS over hypervisor"
  },
  {
    "id": 76,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part F: Cybersecurity, AI & Cloud Computing (Q71–Q80)",
    "q": "In Machine Learning, clustering customers into segments using K-Means on unlabeled data is an example of:",
    "opts": [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Semi-supervised Transfer"
    ],
    "ans": 1,
    "exp": "Unsupervised Learning"
  },
  {
    "id": 77,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part F: Cybersecurity, AI & Cloud Computing (Q71–Q80)",
    "q": "In a binary classification Confusion Matrix, how is Precision mathematically defined?",
    "opts": [
      "TP / (TP + FP)",
      "TP / (TP + FN)",
      "(TP + TN) / (TP + TN + FP + FN)",
      "FP / (FP + TN)"
    ],
    "ans": 0,
    "exp": "Precision = TP / (TP + FP); Recall = TP / (TP + FN)"
  },
  {
    "id": 78,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part F: Cybersecurity, AI & Cloud Computing (Q71–Q80)",
    "q": "In Deep Learning, which problem occurs during backpropagation when gradients become exceedingly small in early layers, preventing weights from updating effectively in deep networks (mitigated by ReLU and Residual connections)?",
    "opts": [
      "Overfitting",
      "Vanishing Gradient Problem",
      "K-Fold Leakage",
      "Tokenization"
    ],
    "ans": 1,
    "exp": "Vanishing Gradient Problem"
  },
  {
    "id": 79,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part F: Cybersecurity, AI & Cloud Computing (Q71–Q80)",
    "q": "Which technique randomly disables a fraction of neurons during each training step of a Neural Network to prevent co-adaptation and reduce overfitting?",
    "opts": [
      "Batch Normalization",
      "Dropout Regularization",
      "Max Pooling",
      "Gradient Clipping"
    ],
    "ans": 1,
    "exp": "Dropout"
  },
  {
    "id": 80,
    "sec": "IT",
    "secTitle": "Information Technology & Computing",
    "part": "Part F: Cybersecurity, AI & Cloud Computing (Q71–Q80)",
    "q": "Which Deep Learning architecture introduced the Self-Attention mechanism and serves as the foundational backbone of modern Large Language Models (LLMs)?",
    "opts": [
      "Recurrent Neural Network (RNN)",
      "Transformer Architecture (\"Attention Is All You Need\")",
      "LeNet CNN",
      "Hopfield Network"
    ],
    "ans": 1,
    "exp": "Transformer Architecture"
  },
  {
    "id": 81,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "On what exact date did the National Universities Commission (NUC) grant the operational license to Osun State University?",
    "opts": [
      "September 21, 2007",
      "December 21, 2006",
      "August 27, 2006",
      "May 29, 2007"
    ],
    "ans": 1,
    "exp": "December 21, 2006"
  },
  {
    "id": 82,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "Osun State University was licensed as the ___ State University and the ___ University overall in the Nigerian University System.",
    "opts": [
      "20th State, 60th overall",
      "30th State, 80th overall",
      "36th State, 90th overall",
      "25th State, 70th overall"
    ],
    "ans": 1,
    "exp": "30th State University and 80th University in Nigeria"
  },
  {
    "id": 83,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "Under which Osun State Governor was the Osun State University Law passed in 2006?",
    "opts": [
      "Chief Bisi Akande",
      "Prince Olagunsoye Oyinlola",
      "Ogbeni Rauf Aregbesola",
      "Senator Isiaka Adeleke"
    ],
    "ans": 1,
    "exp": "Prince Olagunsoye Oyinlola"
  },
  {
    "id": 84,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "When did the pioneer batch of students formally commence academic activities at UNIOSUN?",
    "opts": [
      "December 2006",
      "September 2007",
      "January 2008",
      "October 2005"
    ],
    "ans": 1,
    "exp": "September 2007"
  },
  {
    "id": 85,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "What is the official motto of Osun State University?",
    "opts": [
      "Knowledge for Service",
      "Living Spring of Knowledge and Culture",
      "For Learning and Culture",
      "Excellence and Integrity"
    ],
    "ans": 1,
    "exp": "Living Spring of Knowledge and Culture: Note: \"For Learning and Culture\" is OAU Ile-Ife; don't mix them up in the CBT!"
  },
  {
    "id": 86,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "Who was the Pioneer Vice-Chancellor of Osun State University (2007–2012)?",
    "opts": [
      "Prof. Bashir Okesina",
      "Prof. Sola Akinrinade",
      "Prof. Labode Popoola",
      "Prof. Odunayo Clement Adebooye"
    ],
    "ans": 1,
    "exp": "Prof. Sola Akinrinade"
  },
  {
    "id": 87,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "Who served as the 2nd Substantive Vice-Chancellor of UNIOSUN (2013–2016)?",
    "opts": [
      "Prof. Bashir Okesina",
      "Prof. Labode Popoola",
      "Prof. Jelili Alamu",
      "Prof. Ganiyu Olatunde"
    ],
    "ans": 0,
    "exp": "Prof. Bashir Okesina"
  },
  {
    "id": 88,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "Who served as the 3rd Substantive Vice-Chancellor of UNIOSUN (2016–2021)?",
    "opts": [
      "Prof. Labode Popoola",
      "Prof. Sola Akinrinade",
      "Prof. Clement Adebooye",
      "Prof. Wale Oladipo"
    ],
    "ans": 0,
    "exp": "Prof. Labode Popoola"
  },
  {
    "id": 89,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "Who was the Pioneer Chancellor of Osun State University?",
    "opts": [
      "Apostle Folorunso Alakija",
      "Late Oba Okunade Sijuwade (Ooni of Ife)",
      "Oba Adeyeye Enitan Ogunwusi",
      "Dr. (Mrs.) Victoria Samson"
    ],
    "ans": 1,
    "exp": "Late Oba Okunade Sijuwade, Olubuse II, Ooni of Ife"
  },
  {
    "id": 90,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "Who served as the Pioneer Pro-Chancellor and Chairman of the Governing Council of UNIOSUN?",
    "opts": [
      "Prof. Peter Okebukola, OFR",
      "Mallam Yusuf Ali, SAN",
      "Prof. Wale Oladipo",
      "Prof. Gabriel Olawoyin"
    ],
    "ans": 0,
    "exp": "Prof. Peter Okebukola, OFR"
  },
  {
    "id": 91,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "What anniversary milestone is Osun State University celebrating on December 21, 2026?",
    "opts": [
      "15th Anniversary",
      "20th Anniversary (Two Decades of Establishment: 2006–2026)",
      "25th Silver Jubilee",
      "10th Anniversary"
    ],
    "ans": 1,
    "exp": "20th Anniversary — 2006 to 2026"
  },
  {
    "id": 92,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part A: UNIOSUN History, Legal Backing & Identity (Q81–Q92)",
    "q": "On what date is UNIOSUN’s annual Foundation Day / Convocation traditionally celebrated?",
    "opts": [
      "August 27",
      "September 21",
      "October 1",
      "May 29"
    ],
    "ans": 1,
    "exp": "September 21"
  },
  {
    "id": 93,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Who is the Statutory Visitor to Osun State University?",
    "opts": [
      "The Minister of Education",
      "The Executive Governor of Osun State (Senator Ademola Jackson Nurudeen Adeleke)",
      "The Pro-Chancellor",
      "The NUC Executive Secretary"
    ],
    "ans": 1,
    "exp": "The Executive Governor of Osun State, Senator Ademola Adeleke"
  },
  {
    "id": 94,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Who is the current Chancellor of Osun State University?",
    "opts": [
      "Dr. (Mrs.) Victoria Olufunmilayo Samson (Mama BOVAS — 3rd Chancellor, succeeding Apostle Folorunso Alakija)",
      "Chief (Mrs.) Nike Akande",
      "Chief Adebisi Akande",
      "Oba Adeyeye Ogunwusi"
    ],
    "ans": 0,
    "exp": "Dr. Mrs. Victoria Olufunmilayo Samson — 3rd Chancellor, Mama BOVAS"
  },
  {
    "id": 95,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Who is the current Pro-Chancellor and Chairman of the Governing Council of UNIOSUN?",
    "opts": [
      "Mallam Yusuf Ali, SAN",
      "Prof. Wale Oladipo",
      "Prof. Peter Okebukola",
      "Chief Tunde Ponle"
    ],
    "ans": 1,
    "exp": "Prof. Wale Oladipo"
  },
  {
    "id": 96,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Who is the current (4th Substantive) Vice-Chancellor of Osun State University?",
    "opts": [
      "Prof. Labode Popoola",
      "Prof. Odunayo Clement Adebooye",
      "Prof. Adetunji Kehinde",
      "Prof. Morufu Olayiwola"
    ],
    "ans": 1,
    "exp": "Prof. Odunayo Clement Adebooye"
  },
  {
    "id": 97,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "What is the academic discipline of the current Vice-Chancellor, Prof. Odunayo Clement Adebooye?",
    "opts": [
      "Computer Science",
      "Agronomy / Plant Physiology",
      "Chemical Engineering",
      "Macroeconomics"
    ],
    "ans": 1,
    "exp": "Agronomy / Plant Physiology"
  },
  {
    "id": 98,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Who is the current Deputy Vice-Chancellor (Academic, Research, Innovation and Partnerships — ARIP) of UNIOSUN?",
    "opts": [
      "Prof. Adetunji Lawrence Kehinde",
      "Prof. Morufu O. Olayiwola",
      "Prof. Anthony Kola-Olusanya",
      "Prof. Caleb Akanbi"
    ],
    "ans": 0,
    "exp": "Prof. Adetunji Lawrence Kehinde"
  },
  {
    "id": 99,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Who is the current Deputy Vice-Chancellor (Administration and Development) of UNIOSUN?",
    "opts": [
      "Prof. Morufu O. Olayiwola",
      "Prof. Adetunji L. Kehinde",
      "Prof. Janet Olaitan",
      "Prof. Amos Popoola"
    ],
    "ans": 0,
    "exp": "Prof. Morufu O. Olayiwola"
  },
  {
    "id": 100,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Who is the current (3rd Substantive) Registrar and Secretary to Council/Senate of UNIOSUN?",
    "opts": [
      "Mr. Gafar Adebayo Shittu",
      "Mrs. Atinuke Abosede Oguntunde",
      "Mr. Julius Olusakin Faniran",
      "Mrs. Olubunmi Olayinka"
    ],
    "ans": 1,
    "exp": "Mrs. Atinuke Abosede Oguntunde"
  },
  {
    "id": 101,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Who is the current (3rd Substantive) University Bursar of UNIOSUN?",
    "opts": [
      "Alhaji Fatai Lasisi",
      "Mr. Muideen Akintayo Lasisi",
      "Mr. Bamidele Toye",
      "Dr. Olugbenga Adewuyi"
    ],
    "ans": 1,
    "exp": "Mr. Muideen Akintayo Lasisi"
  },
  {
    "id": 102,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Who is the current (3rd Substantive) University Librarian of UNIOSUN?",
    "opts": [
      "Dr. Olugbenga Wale Adewuyi",
      "Mrs. Tinuade Adewale",
      "Prof. Wasiu Lawal",
      "Mr. Muideen Lasisi"
    ],
    "ans": 0,
    "exp": "Dr. Olugbenga Wale Adewuyi"
  },
  {
    "id": 103,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Which statutory organ of the University is the highest policy-making and governing body in charge of finances, property, and staff appointments/regularisation?",
    "opts": [
      "The Senate",
      "The Governing Council",
      "The Congregation",
      "The Convocation"
    ],
    "ans": 1,
    "exp": "The Governing Council"
  },
  {
    "id": 104,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Which statutory organ is the supreme academic authority responsible for regulating teaching, research, examinations, and the award of degrees?",
    "opts": [
      "The Governing Council",
      "The University Senate",
      "The Registry",
      "The Bursary"
    ],
    "ans": 1,
    "exp": "The University Senate"
  },
  {
    "id": 105,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Which statutory body comprises all graduate members of the University staff (both academic and administrative/technical staff holding degrees)?",
    "opts": [
      "The Senate",
      "The Congregation",
      "The Convocation",
      "ASUU"
    ],
    "ans": 1,
    "exp": "The Congregation"
  },
  {
    "id": 106,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "Which statutory ceremony/body brings together the Chancellor, Council, Senate, and all graduates (Alumni) for the conferment of degrees?",
    "opts": [
      "Matriculation",
      "Convocation",
      "Inaugural Lecture",
      "Congregation"
    ],
    "ans": 1,
    "exp": "Convocation"
  },
  {
    "id": 107,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part B: Current UNIOSUN Principal Officers & Statutory Organs (Q93–Q107)",
    "q": "At the Campus/College level in UNIOSUN, what is the title of the administrative and academic head of a College?",
    "opts": [
      "Rector",
      "Provost",
      "Registrar",
      "Director"
    ],
    "ans": 1,
    "exp": "Provost: While a Faculty within a College is headed by a Dean, and a Department by an HOD"
  },
  {
    "id": 108,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part C: Multi-Campus Structure & College Distribution (Q108–Q117)",
    "q": "How many Colleges and established geopolitical zone Campuses does UNIOSUN operate?",
    "opts": [
      "5 Colleges across 5 Campuses",
      "7 Colleges across 6 geopolitical Campuses (with new expansion sites such as Ede bringing structural references to 7)",
      "10 Colleges across 4 Campuses",
      "4 Colleges across 6 Campuses"
    ],
    "ans": 1,
    "exp": "7 Colleges across the 6 geopolitical Campuses / 7 with expansion"
  },
  {
    "id": 109,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part C: Multi-Campus Structure & College Distribution (Q108–Q117)",
    "q": "Which two Colleges (plus the Faculty of Computing & IT) are hosted on the Main Campus in Osogbo?",
    "opts": [
      "College of Law and College of Agriculture",
      "College of Science, Engineering & Technology (SET) and College of Health Sciences",
      "College of Education and College of Humanities",
      "College of Management and College of Law"
    ],
    "ans": 1,
    "exp": "College of Science, Engineering & Technology and College of Health Sciences"
  },
  {
    "id": 110,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part C: Multi-Campus Structure & College Distribution (Q108–Q117)",
    "q": "In which town/campus is the UNIOSUN College of Management and Social Sciences located?",
    "opts": [
      "Ikire",
      "Okuku",
      "Ejigbo",
      "Ifetedo"
    ],
    "ans": 1,
    "exp": "Okuku Campus"
  },
  {
    "id": 111,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part C: Multi-Campus Structure & College Distribution (Q108–Q117)",
    "q": "In which town/campus is the UNIOSUN College of Humanities and Culture located?",
    "opts": [
      "Ikire",
      "Ipetu-Ijesa",
      "Ejigbo",
      "Okuku"
    ],
    "ans": 0,
    "exp": "Ikire Campus"
  },
  {
    "id": 112,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part C: Multi-Campus Structure & College Distribution (Q108–Q117)",
    "q": "In which town/campus is the UNIOSUN College of Agriculture located?",
    "opts": [
      "Ejigbo",
      "Ifetedo",
      "Okuku",
      "Osogbo"
    ],
    "ans": 0,
    "exp": "Ejigbo Campus"
  },
  {
    "id": 113,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part C: Multi-Campus Structure & College Distribution (Q108–Q117)",
    "q": "In which town/campus is the UNIOSUN College of Law located?",
    "opts": [
      "Ipetu-Ijesa",
      "Ifetedo",
      "Ikire",
      "Ede"
    ],
    "ans": 1,
    "exp": "Ifetedo Campus"
  },
  {
    "id": 114,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part C: Multi-Campus Structure & College Distribution (Q108–Q117)",
    "q": "In which town/campus is the UNIOSUN College of Education located?",
    "opts": [
      "Ipetu-Ijesa",
      "Ejigbo",
      "Okuku",
      "Ifetedo"
    ],
    "ans": 0,
    "exp": "Ipetu-Ijesa Campus"
  },
  {
    "id": 115,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part C: Multi-Campus Structure & College Distribution (Q108–Q117)",
    "q": "On which street/area in Osogbo is the UNIOSUN Main Campus located?",
    "opts": [
      "Oke-Fia",
      "Oke-Baale",
      "Abere",
      "Lameco"
    ],
    "ans": 1,
    "exp": "Oke-Baale, Osogbo"
  },
  {
    "id": 116,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part C: Multi-Campus Structure & College Distribution (Q108–Q117)",
    "q": "In the UNIOSUN Vision Statement, what type of graduates does the university explicitly aim to produce?",
    "opts": [
      "Civil servants only",
      "Entrepreneurial graduates capable of impacting positively on their environment while being globally competitive",
      "Theoretical researchers only",
      "Sportsmen"
    ],
    "ans": 1,
    "exp": "Entrepreneurial and globally competitive graduates"
  },
  {
    "id": 117,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part C: Multi-Campus Structure & College Distribution (Q108–Q117)",
    "q": "Where is the Department of Information Technology / Faculty of Computing and Information Technology (FCIT) situated?",
    "opts": [
      "Okuku Campus",
      "Osogbo Main Campus",
      "Ikire Campus",
      "Ejigbo Campus"
    ],
    "ans": 1,
    "exp": "Osogbo Main Campus"
  },
  {
    "id": 118,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "On what date was Osun State created, and from which state was it carved out?",
    "opts": [
      "May 27, 1967 from Western Region",
      "August 27, 1991 from old Oyo State",
      "October 1, 1996 from Ondo State",
      "February 3, 1976 from Oyo State"
    ],
    "ans": 1,
    "exp": "August 27, 1991 — carved out of old Oyo State"
  },
  {
    "id": 119,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "Which Nigerian Head of State created Osun State?",
    "opts": [
      "Gen. Murtala Muhammed",
      "Gen. Ibrahim Badamasi Babangida",
      "Gen. Sani Abacha",
      "Gen. Yakubu Gowon"
    ],
    "ans": 1,
    "exp": "General Ibrahim Badamasi Babangida"
  },
  {
    "id": 120,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "How many Local Government Areas (LGAs) and Area Offices are in Osun State?",
    "opts": [
      "20 LGAs",
      "30 LGAs (and 1 Area Office: Ife East Area Office, Modakeke)",
      "33 LGAs",
      "18 LGAs"
    ],
    "ans": 1,
    "exp": "30 Local Government Areas + 1 Area Office"
  },
  {
    "id": 121,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "How many Senatorial Districts, Federal Constituencies, and State House of Assembly seats does Osun State have?",
    "opts": [
      "3 Senatorial Districts, 9 Federal Constituencies, 26 State Assembly seats",
      "3 Senatorial, 10 Federal, 30 State seats",
      "4 Senatorial, 8 Federal, 24 State seats",
      "3 Senatorial, 6 Federal, 26 State seats"
    ],
    "ans": 0,
    "exp": "3 Senatorial Districts, 9 Federal Constituencies, 26 State House of Assembly seats"
  },
  {
    "id": 122,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "Who was the first Military Administrator of Osun State (August 1991 – January 1992)?",
    "opts": [
      "Col. Theophilus Bamigboye",
      "Col. Leo Segun Ajiborisha",
      "Col. Anthony Obi",
      "Navy Cmdr. Anthony Udofia"
    ],
    "ans": 1,
    "exp": "Col. Leo Segun Ajiborisha"
  },
  {
    "id": 123,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "Who was the first Civilian Executive Governor of Osun State (January 1992 – November 1993)?",
    "opts": [
      "Chief Adebisi Akande",
      "Senator Isiaka Adetunji Adeleke",
      "Prince Olagunsoye Oyinlola",
      "Alhaji Isiaka Oyetola"
    ],
    "ans": 1,
    "exp": "Senator Isiaka Adetunji Adeleke"
  },
  {
    "id": 124,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "Who was the first Fourth Republic Civilian Governor of Osun State (1999–2003)?",
    "opts": [
      "Chief Adebisi Akande",
      "Prince Olagunsoye Oyinlola",
      "Ogbeni Rauf Aregbesola",
      "Senator Ademola Adeleke"
    ],
    "ans": 0,
    "exp": "Chief Adebisi Akande"
  },
  {
    "id": 125,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "Who is the current Deputy Governor of Osun State?",
    "opts": [
      "Mr. Benedict Alabi",
      "Prince Kola Adewusi",
      "Mrs. Titi Laoye-Tomori",
      "Otunba Iyiola Omisore"
    ],
    "ans": 1,
    "exp": "Prince Kola Adewusi"
  },
  {
    "id": 126,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "Who is the current Speaker of the 8th Osun State House of Assembly?",
    "opts": [
      "Rt. Hon. Timothy Owoeye",
      "Rt. Hon. Adewale Olumide Egbedun",
      "Rt. Hon. Najeem Salaam",
      "Rt. Hon. Mojeed Alabi"
    ],
    "ans": 1,
    "exp": "Rt. Hon. Adewale Olumide Egbedun"
  },
  {
    "id": 127,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "Who is the current Chief Judge of Osun State?",
    "opts": [
      "Hon. Justice Oyebola Adepele Ojo",
      "Hon. Justice Adewale Ojo",
      "Hon. Justice Gloria Oladoke",
      "Hon. Justice Kudirat Kekere-Ekun"
    ],
    "ans": 0,
    "exp": "Hon. Justice Oyebola Adepele Ojo"
  },
  {
    "id": 128,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "Who are the current Secretary to the State Government (SSG), Chief of Staff (CoS), and Head of Service (HoS) in Osun State?",
    "opts": [
      "SSG: Hon. Teslim Igbalaye; CoS: Alhaji Kazeem Akinleye; HoS: Elder Samuel Ayanleye Aina",
      "SSG: Kazeem Akinleye; CoS: Teslim Igbalaye",
      "SSG: Dipo Eluwole; CoS: Festus Oyebade",
      "SSG: Kolapo Alimi; CoS: Olawale Rasheed"
    ],
    "ans": 0,
    "exp": "SSG: Hon. Teslim Igbalaye; CoS: Alhaji Kazeem Akinleye; HoS: Elder Samuel Ayanleye Aina"
  },
  {
    "id": 129,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "Which landmark in Osogbo was inscribed as a UNESCO World Heritage Site in 2005?",
    "opts": [
      "Olumirin Waterfalls",
      "Osun-Osogbo Sacred Grove",
      "Oranmiyan Staff",
      "Kiriji War Memorial"
    ],
    "ans": 1,
    "exp": "Osun-Osogbo Sacred Grove"
  },
  {
    "id": 130,
    "sec": "UNIOSUN",
    "secTitle": "UNIOSUN & Osun State Fact Sheet",
    "part": "Part D: Osun State Profile, History & Governance (Q118–Q130)",
    "q": "In which town and Local Government Area of Osun State is the famous Olumirin Waterfalls located?",
    "opts": [
      "Erin-Ijesha (Oriade LGA)",
      "Ile-Ife (Ife Central LGA)",
      "Ikirun (Ifelodun LGA)",
      "Ila-Orangun (Ila LGA)"
    ],
    "ans": 0,
    "exp": "Erin-Ijesha in Oriade Local Government Area"
  },
  {
    "id": 131,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "What are the three statutory core mandates (triad) of a university lecturer?",
    "opts": [
      "Lecturing, Grading, Invigilating",
      "Teaching, Research, and Community Service",
      "Administration, Politics, Unionism",
      "Publishing, Consulting, Travelling"
    ],
    "ans": 1,
    "exp": "Teaching, Research, and Community Service"
  },
  {
    "id": 132,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "What is the fundamental distinction between a secondary school teacher and a university lecturer?",
    "opts": [
      "A lecturer does not assess students",
      "A teacher primarily transmits established curriculum knowledge, whereas a lecturer generates new knowledge through original research and facilitates independent critical inquiry",
      "A teacher only uses textbooks",
      "Lecturers do not need lesson plans"
    ],
    "ans": 1,
    "exp": "Teacher transmits established curriculum; Lecturer generates new knowledge through research and facilitates independent inquiry"
  },
  {
    "id": 133,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "What is the difference between Pedagogy and Andragogy?",
    "opts": [
      "Pedagogy is the method/practice of teaching children/dependent learners; Andragogy (popularized by Malcolm Knowles) is the theory and practice of educating self-directed adult learners (such as university students)",
      "Andragogy is for primary schools",
      "Pedagogy is only for practical labs",
      "They are antonyms"
    ],
    "ans": 0,
    "exp": "Pedagogy = child learning; Andragogy = adult self-directed learning"
  },
  {
    "id": 134,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "What does the NUC acronym CCMAS stand for?",
    "opts": [
      "Comprehensive Course Manual for Academic Staff",
      "Core Curriculum and Minimum Academic Standards",
      "Central Committee on Minimum Academic Standards",
      "Core Competence in Modern Academic Studies"
    ],
    "ans": 1,
    "exp": "Core Curriculum and Minimum Academic Standards"
  },
  {
    "id": 135,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "Which previous curriculum framework did the NUC replace with CCMAS?",
    "opts": [
      "NBTE",
      "BMAS (Benchmark Minimum Academic Standards)",
      "UBE",
      "WAEC"
    ],
    "ans": 1,
    "exp": "BMAS — Benchmark Minimum Academic Standards"
  },
  {
    "id": 136,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "Under the NUC CCMAS framework, how is the curriculum percentage split between the NUC national core and the individual University’s local/peculiar innovation?",
    "opts": [
      "50% NUC / 50% University",
      "70% NUC National Core / 30% University Local Peculiarity",
      "80% NUC / 20% University",
      "100% NUC"
    ],
    "ans": 1,
    "exp": "70% NUC National Core / 30% University Local Peculiarity"
  },
  {
    "id": 137,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "According to NUC minimum academic standards, what is the minimum class/lecture attendance percentage a student must achieve to be eligible to sit for a semester examination?",
    "opts": [
      "50%",
      "60%",
      "75%",
      "90%"
    ],
    "ans": 2,
    "exp": "75% Minimum Attendance"
  },
  {
    "id": 138,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "In the Nigerian university credit system, 1 Credit Unit of a lecture-based course typically represents how many contact hours per week for one semester (15 weeks)?",
    "opts": [
      "1 hour of lecture per week for 15 weeks (15 contact hours total)",
      "3 hours per day",
      "5 hours per week",
      "10 hours per semester"
    ],
    "ans": 0,
    "exp": "1 hour per week for 15 weeks = 15 contact hours; for practical labs, 3 hours per week = 1 Credit Unit"
  },
  {
    "id": 139,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "What is the statutory NUC qualification treated as the minimum benchmark for career progression as a substantive Career Lecturer in the Nigerian University System?",
    "opts": [
      "B.Sc. only",
      "PGD",
      "Ph.D. (Doctor of Philosophy) in the relevant discipline",
      "HND"
    ],
    "ans": 2,
    "exp": "Ph.D."
  },
  {
    "id": 140,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "What is the standard hierarchy of academic ranks in Nigerian universities from lowest to highest?",
    "opts": [
      "Graduate Assistant → Assistant Lecturer → Lecturer II → Lecturer I → Senior Lecturer → Reader (Associate Professor) → Professor",
      "Lecturer I → Lecturer II → Reader → Senior Lecturer",
      "Assistant Lecturer → Senior Lecturer → Lecturer I",
      "Fellow → Dean → Provost"
    ],
    "ans": 0,
    "exp": "GA → AL → LII → LI → SL → Reader/Assoc. Prof. → Professor"
  },
  {
    "id": 141,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "What does the doctrine of In Loco Parentis mean in higher education administration?",
    "opts": [
      "Teaching in Latin",
      "\"In the place of a parent\" — the legal and moral responsibility of the university and its staff to guide, protect, and look after the welfare/discipline of students",
      "Local community service",
      "Parental Association meetings"
    ],
    "ans": 1,
    "exp": "\"In the place of a parent\""
  },
  {
    "id": 142,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "In Outcome-Based Education (OBE), what is a Learning Outcome?",
    "opts": [
      "The list of topics the lecturer intends to read out",
      "A clear, measurable statement of what a student will know, understand, or be able to do by the end of a course or module",
      "The pass mark of an exam",
      "The textbook bibliography"
    ],
    "ans": 1,
    "exp": "Clear, measurable statement of what a student will know, understand, or do by end of course"
  },
  {
    "id": 143,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "In Vygotsky’s constructivist learning theory, providing temporary structured support to students as they learn a difficult new concept and gradually removing it as they gain independence is called:",
    "opts": [
      "Conditioning",
      "Instructional Scaffolding (within the Zone of Proximal Development — ZPD)",
      "Rote Memorization",
      "Summative Grading"
    ],
    "ans": 1,
    "exp": "Instructional Scaffolding within ZPD"
  },
  {
    "id": 144,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "What is the primary purpose of the Peer Review / External Examination system for final-year undergraduate (400L/500L) and postgraduate exams?",
    "opts": [
      "To delay graduation",
      "Quality assurance, moderation of questions/marking schemes, and ensuring parity of academic standards across universities",
      "Generating revenue",
      "Replacing the HOD"
    ],
    "ans": 1,
    "exp": "Quality assurance, moderation of questions/marking schemes, and ensuring parity of academic standards"
  },
  {
    "id": 145,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part A: Academic Responsibilities, Teaching vs. Lecturing & NUC Standards (Q131–Q145)",
    "q": "Who serves as the Chief Examiner of an academic Department in a university?",
    "opts": [
      "The Course Representative",
      "The Head of Department (HOD)",
      "The University Bursar",
      "The Student Affairs Officer"
    ],
    "ans": 1,
    "exp": "The Head of Department — HOD; Vice-Chancellor is Chief Examiner of the University"
  },
  {
    "id": 146,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "Who proposed the original 1956 Taxonomy of Educational Objectives, and what are its three primary domains?",
    "opts": [
      "Benjamin Bloom — Cognitive (Head/Knowledge), Affective (Heart/Attitude), Psychomotor (Hand/Skills)",
      "B.F. Skinner — Visual, Auditory, Kinesthetic",
      "Jean Piaget — Sensory, Concrete, Formal",
      "Sigmund Freud — Id, Ego, Superego"
    ],
    "ans": 0,
    "exp": "Benjamin Bloom: Cognitive, Affective, Psychomotor"
  },
  {
    "id": 147,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "In the Revised Bloom’s Cognitive Taxonomy (Anderson & Krathwohl, 2001), what is the correct ascending order from lowest to highest cognitive skill?",
    "opts": [
      "Remembering → Understanding → Applying → Analyzing → Evaluating → Creating",
      "Creating → Evaluating → Applying → Remembering",
      "Understanding → Remembering → Analyzing",
      "Applying → Remembering → Creating"
    ],
    "ans": 0,
    "exp": "Remembering → Understanding → Applying → Analyzing → Evaluating → Creating"
  },
  {
    "id": 148,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "When an IT lecturer watches a student physically crimp an RJ-45 Ethernet cable or wire an ESP32 microcontroller on a breadboard, which learning domain is primarily being assessed?",
    "opts": [
      "Cognitive",
      "Affective",
      "Psychomotor Domain",
      "Epistemological"
    ],
    "ans": 2,
    "exp": "Psychomotor Domain — physical/manual/technical manipulation skills"
  },
  {
    "id": 149,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "When a university declares at convocation that its graduates are being awarded degrees because they have been found \"worthy in Character and in Learning\", \"Character\" corresponds to which domain?",
    "opts": [
      "Cognitive",
      "Affective Domain (values, ethics, attitudes, emotional maturity)",
      "Psychomotor",
      "Quantitative"
    ],
    "ans": 1,
    "exp": "Affective Domain — values, ethics, attitudes, emotional maturity"
  },
  {
    "id": 150,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "An assessment given at the very beginning of a course to identify students' prior baseline knowledge and prerequisite gaps is called:",
    "opts": [
      "Summative Assessment",
      "Diagnostic Assessment",
      "Ipsative Assessment",
      "Terminal Assessment"
    ],
    "ans": 1,
    "exp": "Diagnostic Assessment"
  },
  {
    "id": 151,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "Continuous Assessment (CA) tests, mid-semester coding labs, quizzes, and interactive class feedback used to monitor learning progress during the semester are examples of:",
    "opts": [
      "Summative Assessment",
      "Formative Assessment (Assessment FOR Learning)",
      "Normative Ranking",
      "Entrance Screening"
    ],
    "ans": 1,
    "exp": "Formative Assessment — Assessment FOR Learning"
  },
  {
    "id": 152,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "The end-of-semester examination (typically weighted at 60% or 70%) used to evaluate overall student mastery and assign final course grades is:",
    "opts": [
      "Formative Assessment",
      "Summative Assessment (Assessment OF Learning)",
      "Diagnostic Assessment",
      "Informal Observation"
    ],
    "ans": 1,
    "exp": "Summative Assessment — Assessment OF Learning"
  },
  {
    "id": 153,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "What is the difference between Criterion-Referenced Assessment and Norm-Referenced Assessment?",
    "opts": [
      "Criterion-referenced measures a student's performance against a fixed, predetermined standard/cut-off (e.g., scoring >= 50% or >= 70% for an 'A'); Norm-referenced compares and ranks a student against peers (grading on a bell curve/percentile)",
      "Norm-referenced has a fixed pass mark for all",
      "Criterion-referenced allows only 5% to pass",
      "They are identical"
    ],
    "ans": 0,
    "exp": "Criterion-referenced measures against fixed standard; Norm-referenced ranks against peer distribution"
  },
  {
    "id": 154,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "If an examination paper actually tests the specific course objectives and syllabus topics it was designed to measure, the examination has high:",
    "opts": [
      "Content/Construct Validity",
      "Reliability only",
      "Speed",
      "Skewness"
    ],
    "ans": 0,
    "exp": "Content/Construct Validity"
  },
  {
    "id": 155,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "What is the purpose of preparing a Marking Scheme and Table of Specifications (Test Blueprint) before setting and grading an examination?",
    "opts": [
      "To make the exam harder",
      "To ensure balanced topic coverage across cognitive levels (blueprint) and guarantee objectivity, fairness, and consistency during grading (marking scheme)",
      "To help students cheat",
      "To avoid teaching"
    ],
    "ans": 1,
    "exp": "To ensure balanced topic coverage across cognitive levels and guarantee objectivity and consistency"
  },
  {
    "id": 156,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "On a standard 5.00 Grading Scale in Nigerian universities, what letter grade and grade point correspond to a raw score of 64%?",
    "opts": [
      "A (5 points)",
      "B (4 points — 60% to 69%)",
      "C (3 points — 50% to 59%)",
      "D (2 points — 45% to 49%)"
    ],
    "ans": 1,
    "exp": "Grade B = 4.00 points; 60% to 69%"
  },
  {
    "id": 157,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "What is the difference between GPA and CGPA?",
    "opts": [
      "GPA (Grade Point Average) is calculated for a single semester (Total Grade Points / Total Credit Units); CGPA (Cumulative Grade Point Average) is calculated across all semesters completed from admission to date",
      "CGPA is for one semester only",
      "GPA does not use credit units",
      "They are always equal"
    ],
    "ans": 0,
    "exp": "GPA is single semester average; CGPA is cumulative across all completed semesters"
  },
  {
    "id": 158,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "Calculate the Semester GPA of a student who took two 3-unit courses (scoring an 'A' in one and a 'C' in the other) and one 2-unit course (scoring a 'B'):",
    "opts": [
      "3.50",
      "4.00",
      "4.25",
      "3.75"
    ],
    "ans": 1,
    "exp": "4.00 — Quality Points: (3x5) + (3x3) + (2x4) = 15+9+8 = 32. Total Units = 8. 32/8 = 4.00"
  },
  {
    "id": 159,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "On a 5.00 CGPA scale, a graduating student with a CGPA of 2.85 falls into which degree classification?",
    "opts": [
      "Second Class Upper (2:1)",
      "Second Class Lower (2:2 — 2.40 to 3.49)",
      "Third Class (1.50 to 2.39)",
      "First Class (4.50 to 5.00)"
    ],
    "ans": 1,
    "exp": "Second Class Lower — 2:2; range 2.40 to 3.49"
  },
  {
    "id": 160,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part B: Bloom’s Taxonomy, Learning Domains & Assessment (Q146–Q160)",
    "q": "In the Flipped Classroom pedagogical model, how is instructional time structured?",
    "opts": [
      "Students review lecture materials/videos prior to class, and in-class contact time is dedicated to active problem-solving, coding labs, and interactive discussion",
      "Students grade the lecturer",
      "Lectures are held only at night",
      "There are no assessments"
    ],
    "ans": 0,
    "exp": "Students review instructional materials before class; contact hours used for active problem solving"
  },
  {
    "id": 161,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part C: Research Ethics & Academic Integrity (Q161–Q170)",
    "q": "In research ethics, what is the difference between Data Fabrication and Data Falsification?",
    "opts": [
      "Fabrication is making up non-existent data/results and recording them; Falsification is manipulating research materials, equipment, or processes, or altering/omitting existing data so the research is not accurately represented",
      "Fabrication is legal",
      "Falsification is proper citation",
      "Both mean peer review"
    ],
    "ans": 0,
    "exp": "Fabrication is inventing fake data; Falsification is manipulating/altering real data or results"
  },
  {
    "id": 162,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part C: Research Ethics & Academic Integrity (Q161–Q170)",
    "q": "Re-using substantial portions of one's own previously published text or data in a new publication without proper citation or disclosure is an ethical violation known as:",
    "opts": [
      "Literature Review",
      "Self-Plagiarism (Text Recycling)",
      "Open Access",
      "Copyright Transfer"
    ],
    "ans": 1,
    "exp": "Self-Plagiarism / Text Recycling / Duplicate Publication"
  },
  {
    "id": 163,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part C: Research Ethics & Academic Integrity (Q161–Q170)",
    "q": "Adding a senior colleague or acquaintance as a co-author on a research paper when they made no substantial intellectual contribution to the study is called:",
    "opts": [
      "Ghost Authorship",
      "Gift / Honorary (Guest) Authorship",
      "Corresponding Authorship",
      "Blind Review"
    ],
    "ans": 1,
    "exp": "Gift / Honorary Authorship: Whereas omitting someone who wrote the paper is Ghost Authorship"
  },
  {
    "id": 164,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part C: Research Ethics & Academic Integrity (Q161–Q170)",
    "q": "Which core principle of human-subject research ethics requires that participants fully understand the study's purpose, risks, and benefits and voluntarily agree to participate before data collection begins?",
    "opts": [
      "Double-Blind Testing",
      "Informed Consent",
      "Statistical Significance",
      "P-Hacking"
    ],
    "ans": 1,
    "exp": "Informed Consent"
  },
  {
    "id": 165,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part C: Research Ethics & Academic Integrity (Q161–Q170)",
    "q": "Which university committee must review and approve any research proposal involving human participants, clinical data, or animal subjects before benchwork begins?",
    "opts": [
      "Senate Business Committee",
      "Institutional Review Board (IRB) / Research Ethics Committee",
      "Students' Disciplinary Committee",
      "Tenders Board"
    ],
    "ans": 1,
    "exp": "Institutional Review Board / Research Ethics Committee"
  },
  {
    "id": 166,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part C: Research Ethics & Academic Integrity (Q161–Q170)",
    "q": "In scholarly publishing, what is a Predatory Journal?",
    "opts": [
      "A high-impact Nature journal",
      "An exploitative publishing model that charges Article Processing Charges (APCs) to authors without providing legitimate peer review, editorial quality control, or recognized indexing",
      "A journal with a low acceptance rate",
      "Any university journal"
    ],
    "ans": 1,
    "exp": "Exploitative publishing charging APCs without legitimate peer review or recognized indexing"
  },
  {
    "id": 167,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part C: Research Ethics & Academic Integrity (Q161–Q170)",
    "q": "Which two major international citation and abstract databases are most widely recognized by NUC and global ranking bodies (like THE) for indexing high-impact scholarly journals?",
    "opts": [
      "Wikipedia and ResearchGate",
      "Scopus (Elsevier) and Web of Science / Clarivate (SCI/SSCI)",
      "Google Drive and Dropbox",
      "Scribd and Academia.edu"
    ],
    "ans": 1,
    "exp": "Scopus and Web of Science"
  },
  {
    "id": 168,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part C: Research Ethics & Academic Integrity (Q161–Q170)",
    "q": "What does an academic's h-index (proposed by Jorge Hirsch) measure?",
    "opts": [
      "Only the total number of papers written",
      "Both productivity and citation impact: a scholar with an index of h has published h papers each of which has been cited in other papers at least h times",
      "The cost of research grants",
      "Years of teaching experience"
    ],
    "ans": 1,
    "exp": "Both productivity and citation impact: h papers cited at least h times"
  },
  {
    "id": 169,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part C: Research Ethics & Academic Integrity (Q161–Q170)",
    "q": "What is Double-Blind Peer Review?",
    "opts": [
      "Reviewers know the author's name",
      "Both the reviewers and the authors remain anonymous to each other throughout the review process to eliminate bias",
      "Two editors read the title only",
      "The paper is published without review"
    ],
    "ans": 1,
    "exp": "Both reviewers and authors remain anonymous to each other to prevent bias"
  },
  {
    "id": 170,
    "sec": "PEDAGOGY",
    "secTitle": "Pedagogy, Higher Education & Ethics",
    "part": "Part C: Research Ethics & Academic Integrity (Q161–Q170)",
    "q": "In Nigeria, which federal agency provides major intervention funds for physical infrastructure, staff PhD/postdoc training, and National Research Fund (NRF) grants in public tertiary institutions?",
    "opts": [
      "NELFUND",
      "TETFund (Tertiary Education Trust Fund)",
      "PTDF",
      "CBN"
    ],
    "ans": 1,
    "exp": "TETFund — Tertiary Education Trust Fund"
  },
  {
    "id": 171,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part A: National & Educational Current Affairs (Q171–Q180)",
    "q": "Who is the current Minister of Education and the Minister of State for Education in Nigeria?",
    "opts": [
      "Minister: Dr. Maruf Tunji Alausa; Minister of State: Prof. Suwaiba Said Ahmad",
      "Prof. Tahir Mamman and Dr. Yusuf Sununu",
      "Mallam Adamu Adamu and Chukwuemeka Nwajiuba",
      "Prof. Ishaq Oloyede and Sonny Echono"
    ],
    "ans": 0,
    "exp": "Dr. Maruf Tunji Alausa & Prof. Suwaiba Said Ahmad"
  },
  {
    "id": 172,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part A: National & Educational Current Affairs (Q171–Q180)",
    "q": "Who is the current Executive Secretary of the National Universities Commission (NUC)?",
    "opts": [
      "Prof. Abubakar Adamu Rasheed",
      "Prof. Abdullahi Yusufu Ribadu",
      "Chris Maiyaki",
      "Prof. Peter Okebukola"
    ],
    "ans": 1,
    "exp": "Prof. Abdullahi Yusufu Ribadu"
  },
  {
    "id": 173,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part A: National & Educational Current Affairs (Q171–Q180)",
    "q": "Who are the current heads of JAMB, TETFund, and NELFUND?",
    "opts": [
      "JAMB: Prof. Ishaq Oloyede; TETFund: Arc. Sonny Echono; NELFUND: Mr. Akintunde Sawyerr",
      "JAMB: Dibu Ojerinde; TETFund: Bogoro",
      "JAMB: Ribadu; TETFund: Alausa",
      "JAMB: Sawyerr; NELFUND: Oloyede"
    ],
    "ans": 0,
    "exp": "JAMB: Prof. Ishaq Oloyede; TETFund: Arc. Sonny Echono; NELFUND: Mr. Akintunde Sawyerr"
  },
  {
    "id": 174,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part A: National & Educational Current Affairs (Q171–Q180)",
    "q": "Who is the current Minister of Communications, Innovation and Digital Economy, and who is the DG of NITDA?",
    "opts": [
      "Minister: Dr. Bosun Tijani; NITDA DG: Kashifu Inuwa Abdullahi",
      "Minister: Isa Pantami; NITDA DG: Cleopas Angaye",
      "Minister: Tunji Alausa; NITDA DG: Aminu Maida",
      "Minister: Wale Edun; NITDA DG: Bosun Tijani"
    ],
    "ans": 0,
    "exp": "Minister: Dr. Bosun Tijani; NITDA DG: Kashifu Inuwa Abdullahi"
  },
  {
    "id": 175,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part A: National & Educational Current Affairs (Q171–Q180)",
    "q": "Who is the current Chief Justice of Nigeria (CJN)?",
    "opts": [
      "Hon. Justice Olukayode Ariwoola",
      "Hon. Justice Kudirat Motonmori Olatokunbo Kekere-Ekun",
      "Hon. Justice Aloma Mariam Mukhtar",
      "Hon. Justice Kayode Eso"
    ],
    "ans": 1,
    "exp": "Hon. Justice Kudirat Kekere-Ekun"
  },
  {
    "id": 176,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part A: National & Educational Current Affairs (Q171–Q180)",
    "q": "Who are the presiding officers of Nigeria’s 10th National Assembly?",
    "opts": [
      "Senate President: Sen. Godswill Akpabio; Speaker of House of Reps: Rt. Hon. Tajudeen Abbas",
      "Senate President: Ahmad Lawan; Speaker: Femi Gbajabiamila",
      "Senate President: Bukola Saraki; Speaker: Yakubu Dogara",
      "Senate President: Barau Jibrin; Speaker: Benjamin Kalu"
    ],
    "ans": 0,
    "exp": "Senate President: Godswill Akpabio; Speaker: Tajudeen Abbas"
  },
  {
    "id": 177,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part A: National & Educational Current Affairs (Q171–Q180)",
    "q": "Who is the current Governor of the Central Bank of Nigeria (CBN)?",
    "opts": [
      "Godwin Emefiele",
      "Olayemi Cardoso",
      "Sanusi Lamido Sanusi",
      "Folashodun Shonubi"
    ],
    "ans": 1,
    "exp": "Olayemi Cardoso"
  },
  {
    "id": 178,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part A: National & Educational Current Affairs (Q171–Q180)",
    "q": "Who are the current Chief of Defence Staff (CDS) and Inspector General of Police (IGP) in Nigeria?",
    "opts": [
      "CDS: General Olufemi Oluyede; IGP: Kayode Egbetokun",
      "CDS: Lucky Irabor; IGP: Usman Baba",
      "CDS: Tukur Buratai; IGP: Ibrahim Idris",
      "CDS: Nuhu Ribadu; IGP: Waidi Shaibu"
    ],
    "ans": 0,
    "exp": "CDS: Gen. Olufemi Oluyede; IGP: Kayode Egbetokun"
  },
  {
    "id": 179,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part A: National & Educational Current Affairs (Q171–Q180)",
    "q": "Who wrote the lyrics and who composed the music for Nigeria’s reinstated National Anthem, \"Nigeria, We Hail Thee\"?",
    "opts": [
      "Lyrics: Lillian Jean Williams; Music: Frances Benda",
      "Lyrics & Music: Benedict Odiase",
      "Wole Soyinka and Fela Sowande",
      "Taiwo Akinkunmi"
    ],
    "ans": 0,
    "exp": "Lyrics: Lillian Jean Williams; Music: Frances Benda: Benedict Odiase composed \"Arise, O Compatriots\"; Taiwo Akinkunmi designed the National Flag"
  },
  {
    "id": 180,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part A: National & Educational Current Affairs (Q171–Q180)",
    "q": "Who is the current Secretary-General of the United Nations (UN), and which Nigerian serves as the Deputy Secretary-General?",
    "opts": [
      "SG: António Guterres; Deputy SG: Amina J. Mohammed",
      "SG: Ban Ki-moon; Deputy SG: Ngozi Okonjo-Iweala",
      "SG: Kofi Annan; Deputy SG: Akinwumi Adesina",
      "SG: Tedros Adhanom; Deputy SG: Amina Mohammed"
    ],
    "ans": 0,
    "exp": "SG: António Guterres; Deputy SG: Amina J. Mohammed: Note: Dr. Ngozi Okonjo-Iweala is DG of the World Trade Organization [WTO]"
  },
  {
    "id": 181,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part B: Quantitative Reasoning & Applied Arithmetic (Q181–Q190)",
    "q": "A candidate needs at least 50% to pass a regularisation CBT of 60 questions. If the candidate correctly answers 75% of the first 40 questions, how many of the remaining 20 questions must they get right to achieve an overall score of 70%?",
    "opts": [
      "10",
      "12",
      "14",
      "15"
    ],
    "ans": 1,
    "exp": "12: Target = 70% of 60 = 42 questions. Already scored = 75% of 40 = 30. Needed = 42 - 30 = 12"
  },
  {
    "id": 182,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part B: Quantitative Reasoning & Applied Arithmetic (Q181–Q190)",
    "q": "If Lecturer A can grade a batch of scripts in 6 hours and Lecturer B can grade the same batch in 3 hours, how long will it take both of them working together at their respective rates?",
    "opts": [
      "1.5 hours",
      "2 hours",
      "2.5 hours",
      "4.5 hours"
    ],
    "ans": 1,
    "exp": "2 hours: 1/6 + 1/3 = 3/6 = 1/2 => 2 hours"
  },
  {
    "id": 183,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part B: Quantitative Reasoning & Applied Arithmetic (Q181–Q190)",
    "q": "The ratio of male to female students in an IT class is 5:3. If there are 120 students in total, how many female students are in the class?",
    "opts": [
      "40",
      "45",
      "75",
      "60"
    ],
    "ans": 1,
    "exp": "45: 3/(5+3) * 120 = 3/8 * 120 = 3 * 15 = 45"
  },
  {
    "id": 184,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part B: Quantitative Reasoning & Applied Arithmetic (Q181–Q190)",
    "q": "A laptop’s price is first increased by 20% and later discounted by 20%. Compared to the original price, the final price is:",
    "opts": [
      "Unchanged (0%)",
      "4% lower",
      "4% higher",
      "2% lower"
    ],
    "ans": 1,
    "exp": "4% lower: 100 * 1.20 = 120; 120 * 0.80 = 96 => 4% decrease"
  },
  {
    "id": 185,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part B: Quantitative Reasoning & Applied Arithmetic (Q181–Q190)",
    "q": "A staff bus travels from the Osogbo campus to the Ikire campus, a distance of 90 km, at an average speed of 60 km/h. How many minutes does the journey take?",
    "opts": [
      "60 minutes",
      "90 minutes",
      "100 minutes",
      "120 minutes"
    ],
    "ans": 1,
    "exp": "90 minutes / 1.5 hours: Time = 90 / 60 = 1.5 hours = 90 minutes"
  },
  {
    "id": 186,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part B: Quantitative Reasoning & Applied Arithmetic (Q181–Q190)",
    "q": "What is the Simple Interest on a research equipment loan of ₦500,000 for 3 years at an annual interest rate of 8%?",
    "opts": [
      "₦80,000",
      "₦120,000",
      "₦150,000",
      "₦40,000"
    ],
    "ans": 1,
    "exp": "₦120,000: I = (P * R * T) / 100 = (500000 * 8 * 3)/100 = ₦120,000"
  },
  {
    "id": 187,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part B: Quantitative Reasoning & Applied Arithmetic (Q181–Q190)",
    "q": "Find the next number in the sequence: 2, 6, 12, 20, 30, 42, ___",
    "opts": [
      "52",
      "56",
      "54",
      "60"
    ],
    "ans": 1,
    "exp": "56: Differences increase by 2: +4, +6, +8, +10, +12, +14 -> 42 + 14 = 56; or n*(n+1)"
  },
  {
    "id": 188,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part B: Quantitative Reasoning & Applied Arithmetic (Q181–Q190)",
    "q": "In a Faculty of 50 lecturers, 30 teach Python, 25 teach Java, and 10 teach both Python and Java. How many lecturers teach neither Python nor Java?",
    "opts": [
      "0",
      "5",
      "10",
      "15"
    ],
    "ans": 1,
    "exp": "5: |P union J| = 30 + 25 - 10 = 45. Neither = 50 - 45 = 5"
  },
  {
    "id": 189,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part B: Quantitative Reasoning & Applied Arithmetic (Q181–Q190)",
    "q": "The mean score of 4 students is 65. When a 5th student’s score is added, the mean rises to 68. What did the 5th student score?",
    "opts": [
      "75",
      "80",
      "78",
      "82"
    ],
    "ans": 1,
    "exp": "80: 5 * 68 - 4 * 65 = 340 - 260 = 80"
  },
  {
    "id": 190,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part B: Quantitative Reasoning & Applied Arithmetic (Q181–Q190)",
    "q": "Solve for x in the exponential equation: 2^(2x - 1) = 32",
    "opts": [
      "2",
      "3",
      "4",
      "5"
    ],
    "ans": 1,
    "exp": "3: 32 = 2^5 => 2x - 1 = 5 => 2x = 6 => x = 3"
  },
  {
    "id": 191,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part C: Verbal Reasoning & Logical Deduction (Q191–Q200)",
    "q": "Choose the word most nearly SIMILAR in meaning (Synonym) to PRAGMATIC:",
    "opts": [
      "Idealistic",
      "Practical / Realistic",
      "Dogmatic",
      "Ambiguous"
    ],
    "ans": 1,
    "exp": "Practical / Realistic"
  },
  {
    "id": 192,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part C: Verbal Reasoning & Logical Deduction (Q191–Q200)",
    "q": "Choose the word most nearly SIMILAR in meaning (Synonym) to UBIQUITOUS:",
    "opts": [
      "Scarce",
      "Omnipresent (Present everywhere)",
      "Obscure",
      "Antiquated"
    ],
    "ans": 1,
    "exp": "Omnipresent"
  },
  {
    "id": 193,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part C: Verbal Reasoning & Logical Deduction (Q191–Q200)",
    "q": "Choose the word most nearly OPPOSITE in meaning (Antonym) to CANDID:",
    "opts": [
      "Frank",
      "Deceptive / Guarded",
      "Outspoken",
      "Sincere"
    ],
    "ans": 1,
    "exp": "Deceptive / Guarded"
  },
  {
    "id": 194,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part C: Verbal Reasoning & Logical Deduction (Q191–Q200)",
    "q": "Choose the word most nearly OPPOSITE in meaning (Antonym) to MITIGATE:",
    "opts": [
      "Alleviate",
      "Aggravate / Exacerbate",
      "Soften",
      "Assuage"
    ],
    "ans": 1,
    "exp": "Aggravate / Exacerbate"
  },
  {
    "id": 195,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part C: Verbal Reasoning & Logical Deduction (Q191–Q200)",
    "q": "Analogy: ALGORITHM : CODE :: BLUEPRINT : ___",
    "opts": [
      "Architect",
      "Building",
      "Paper",
      "Foundation"
    ],
    "ans": 1,
    "exp": "Building: An algorithm is the abstract plan implemented as code; a blueprint is the plan realized as a building"
  },
  {
    "id": 196,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part C: Verbal Reasoning & Logical Deduction (Q191–Q200)",
    "q": "Analogy: PLAGIARISM : SCHOLARSHIP :: COUNTERFEITING : ___",
    "opts": [
      "Banking",
      "Currency / Minting",
      "Auditing",
      "Inflation"
    ],
    "ans": 1,
    "exp": "Currency / Minting"
  },
  {
    "id": 197,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part C: Verbal Reasoning & Logical Deduction (Q191–Q200)",
    "q": "Grammar Agreement: \"Neither the Head of Department nor the course lecturers ___ aware of the venue change yesterday.\"",
    "opts": [
      "was",
      "were",
      "is",
      "has been"
    ],
    "ans": 1,
    "exp": "were: With \"Neither... nor\", the verb agrees with the closer subject [\"lecturers\" — plural] and past tense [\"yesterday\"]"
  },
  {
    "id": 198,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part C: Verbal Reasoning & Logical Deduction (Q191–Q200)",
    "q": "Logical Deduction: \"If a candidate scores at least 50%, they advance to the oral interview. Tunde did not advance to the oral interview.\" Which conclusion MUST be true?",
    "opts": [
      "Tunde scored 50%",
      "Tunde scored less than 50%",
      "The CBT server crashed",
      "Tunde arrived late"
    ],
    "ans": 1,
    "exp": "Tunde scored less than 50% — Modus Tollens"
  },
  {
    "id": 199,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part C: Verbal Reasoning & Logical Deduction (Q191–Q200)",
    "q": "Odd-One-Out: Which of the following does NOT belong with the others?",
    "opts": [
      "PostgreSQL",
      "MySQL",
      "Express.js",
      "Oracle DB"
    ],
    "ans": 2,
    "exp": "Express.js — Express.js is a Node.js framework; others are RDBMS — ."
  },
  {
    "id": 200,
    "sec": "APTITUDE",
    "secTitle": "General Aptitude, Current Affairs & Logic",
    "part": "Part C: Verbal Reasoning & Logical Deduction (Q191–Q200)",
    "q": "Seating Logic: Five lecturers (P, Q, R, S, T) sit in a row facing North. R is at the exact center. P is immediately to the left of R, and T is at the far right end. If S is not at the far left end, who is sitting at the far left end?",
    "opts": [
      "P",
      "Q",
      "S",
      "R"
    ],
    "ans": 1,
    "exp": "Q — Left to right: Q - P - R - S - T — ."
  }
];
