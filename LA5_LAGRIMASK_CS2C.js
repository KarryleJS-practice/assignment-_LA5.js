// Hash Function Queueing System
let customerTable = {};
const hashFunction = (name) => {
    return name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 10;
};

const maxCustomers = 5;
const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Populate customer hash table
for (let i = 0; i < maxCustomers; i++) {
    let name = prompt("Enter your name to join the queue:");
    if (!name) {
        alert("Name cannot be empty.");
        continue;
    }

    let hashIndex = hashFunction(name);
    customerTable[hashIndex] = name;
    console.log(`${name} has been added with hash index ${hashIndex}.`);
    alert(`${name} has been added with hash index ${hashIndex}.`);
}

// Process the hash table
while (Object.keys(customerTable).length > 0) {
    console.log("Current Hash Table:", customerTable);

    let number = parseInt(prompt(`Enter the hash index to be serviced:`));
    if (isNaN(number) || !(number in customerTable)) {
        alert("Invalid hash index. Please try again.");
        continue;
    }

    let servicedCustomer = customerTable[number];
    delete customerTable[number];
    console.log(`Serviced: ${servicedCustomer}`);
    alert(`Serviced: ${servicedCustomer}`);
}

// If hash table is empty
console.log("The hash table is now empty.");
alert("The hash table is now empty.");
