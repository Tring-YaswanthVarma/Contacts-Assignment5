const input = require("prompt-sync")();

class Node
{
    constructor(name, phoneNumber, email)
    {
        this.name = name
        this.phoneNumber = phoneNumber
        this.email = email
        this.nextNode = null;
    }
}
class Contacts
{
    abc = new Array(20).fill(null);

    addContact(name, phoneNumber, email)
    {
        let index = parseInt(phoneNumber.charAt(0)) + parseInt(phoneNumber.charAt(1))+ parseInt(phoneNumber.charAt(phoneNumber.length - 2))+parseInt(phoneNumber.charAt(phoneNumber.length - 1)) % 20
        if (this.abc[index] == null)
        {
            this.abc[index] = new LinkedList();
        }
        this.abc[index].addElement(name, phoneNumber, email);
    }

    deleteContact(phoneNumber)
    {
        let index = parseInt(phoneNumber.charAt(0)) + parseInt(phoneNumber.charAt(1))+ parseInt(phoneNumber.charAt(phoneNumber.length - 2))+parseInt(phoneNumber.charAt(phoneNumber.length - 1)) % 20
        if (this.abc[index] != null)
        {
            this.abc[index].deleteElement(phoneNumber)
        }
        else
        {
            console.log("The element you want to delete is not present in the Contacts.")
        }
    }
    searchContact(phoneNumber)
    {
        let index = parseInt(phoneNumber.charAt(0)) + parseInt(phoneNumber.charAt(1))+ parseInt(phoneNumber.charAt(phoneNumber.length - 2))+parseInt(phoneNumber.charAt(phoneNumber.length - 1)) % 20
        if (this.abc[index] != null)
        {
            this.abc[index].searchElement(phoneNumber)
        }
        else
        {
            console.log("The element you are searching is not found.")
        }
    }
    printContacts()
    {
        function checkNull(ele) {
            return ele == null
        }
        this.abc.forEach(ele =>
        {
            if (ele != null)
            {
                console.log(ele);
            }
        })
        if (this.abc.every(checkNull)) {
            console.log("There are no contacts to show.")
        }
    }
}

class LinkedList
{
    rootNode = null;
    count = 0;

    addElement(name, phoneNumber, email)
    {
        let newNode = new Node(name, phoneNumber, email);
        if (this.rootNode == null)
        {
            this.rootNode = newNode;
        } else
        {
            newNode.nextNode = this.rootNode;
            this.rootNode = newNode;
        }
        this.count += 1;
    }

    deleteElement(phoneNumber)
    {
        let flag = 0
        if (this.rootNode.phoneNumber == phoneNumber)
        {
            this.rootNode = this.rootNode.nextNode;
            console.log("Element deleted succesfully.")
        }
        else
        {
            let temp = this.rootNode
            while (temp.nextNode != null)
            {
                if (temp.nextNode.phoneNumber == phoneNumber)
                {
                    temp.nextNode = temp.nextNode.nextNode
                    flag = 1
                    console.log("Element deleted succesfully.")
                    break
                }
                temp = temp.nextNode
            }
            if (flag == 0)
            {
                console.log("The element you want to delete is not present in the Contacts. Inside linkedlist")
            }
        }
        this.count -= 1;
    }

    searchElement(phoneNumber)
    {
        let flag = 0
        let temp = this.rootNode
        while (temp != null)
        {
            if (temp.phoneNumber == phoneNumber)
            {
                console.log("Name : " + temp.name + "\nPhone NUmber : " + temp.phoneNumber + "\nEmail : " + temp.email);
                flag = 1
                break
            }
            temp = temp.nextNode
        }
        if (flag == 0)
        {
            console.log("The element you are searching is not found. Inside linkedlist")
        }
    }

    printElements()
    {
        let temp = this.rootNode;
        if (temp == null)
        {
            console.log("Is empty!")
        } else
        {
            while (temp != null)
            {
                console.log(temp.data)
                temp = temp.nextNode;
            }
        }
    }
}

let c = new Contacts()
while (true)
{
    console.log("1. Add a Contact \n2. Delete a Contact\n 3. Search a Contact\n 4. Print contacts\n 5. Exit");
    let choice = input("Enter your choice : ")
    if (choice == 1)
    {
        let name = input("Enter name : ")
        let phoneNumber = input("Enter Phone number : ")
        let email = input("Enter email : ")
        c.addContact(name, phoneNumber, email)
        console.log("Contact added succesfully")
    } else if (choice == 2)
    {
        let phoneNumber = input("Enter phone number of the contact you want to delete : ")
        c.deleteContact(phoneNumber)
    } else if (choice == 3)
    {
        let phoneNumber = input("Enter phone number of the contact you want to search : ")
        c.searchContact(phoneNumber)
    } else if (choice == 4)
    {
        c.printContacts();
    } else
    {
        break
    }
}




