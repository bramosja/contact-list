const contactCollection = {
    // retrieve contacts from the json database
    getContact() {
        return fetch("http://localhost8088/contacts")
        .then(response => response.json())
    },
    // adds new contact information to the existing json database
    addContact(newContact) {
        return fetch("http://localhost8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        })
    }
}