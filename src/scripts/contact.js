// A Contact component that displays a person's name, phone number, and address.
const contact = {
    displayContactInfo(subject) {
        let contactArticle = document.createElement("article");
        contactArticle.setAttribute("id", `contact--${subject.id}`);

        let contactNameEl = document.createElement("h2");
        contactNameEl.textContent = subject.name;

        let contactPhoneEl = document.createElement("p");
        contactPhoneEl.textContent = subject.phoneNumber;

        let contactAddressEl = document.createElement("p");
        contactAddressEl.textContent = subject.address;
    }
}