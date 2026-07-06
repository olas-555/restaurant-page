export default function loadContact() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const phone = document.createElement("p");
    phone.textContent = "📞 Phone: +234 800 123 4567";

    const email = document.createElement("p");
    email.textContent = "📧 Email: hello@bellaitalia.com";

    const address = document.createElement("p");
    address.textContent =
        "📍 Address: 123 Pizza Street, Lagos, Nigeria";

    const hours = document.createElement("p");
    hours.textContent =
        "🕒 Opening Hours: Monday - Sunday, 10:00 AM - 10:00 PM";

 const contactCard = document.createElement("div");
contactCard.classList.add("contact-card");

contactCard.appendChild(phone);
contactCard.appendChild(email);
contactCard.appendChild(address);
contactCard.appendChild(hours);

content.appendChild(heading);
content.appendChild(contactCard);
}