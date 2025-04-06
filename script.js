document.addEventListener("DOMContentLoaded", function () {
	const button = document.querySelector(".burger-menu");
	const listDiv = document.getElementById("h2-list");

	button.addEventListener("click", () => {
		listDiv.classList.toggle("show-list");

		if (listDiv.classList.contains("show-list")) {
			const h2s = document.querySelectorAll(".container h2");
			listDiv.innerHTML = "";

			const section = document.createElement("div");
			section.classList.add("section");

			const ul = document.createElement("ul");
			ul.style.listStyle = "none";
			ul.style.padding = "0";
			ul.style.marginBottom = "20px"; // Add space before contact link

			h2s.forEach((h2, index) => {
				const id = `section-${index}`;
				h2.setAttribute("id", id);

				const li = document.createElement("li");
				li.style.marginBottom = "10px";

				const a = document.createElement("a");
				a.href = `#${contact}`;
				a.textContent = `📌 ${h2.textContent}`;

				// Style for navigation links
				a.style.display = "inline-block";
				a.style.padding = "10px 15px";
				a.style.background = "#2c3e50";
				a.style.color = "#ecf0f1";
				a.style.borderRadius = "8px";
				a.style.textDecoration = "none";
				a.style.fontWeight = "bold";
				a.style.transition = "background 0.3s ease";

				// Hover effect
				a.addEventListener("mouseover", () => (a.style.background = "#34495e"));
				a.addEventListener("mouseout", () => (a.style.background = "#2c3e50"));

				li.appendChild(a);
				ul.appendChild(li);
			});

			section.appendChild(ul);

			// Add contact link container
			const contactDiv = document.createElement("div");
			contactDiv.style.marginTop = "20px";
			contactDiv.style.paddingTop = "20px";
			contactDiv.style.borderTop = "1px solid #34495e";

			// Create contact link
			const contactLink = document.createElement("a");
			contactLink.href = "#contact"; // Or your actual contact page/section
			contactLink.textContent = "📧 Contact Us";

			// Style for contact link (different color to distinguish)
			contactLink.style.display = "inline-block";
			contactLink.style.padding = "10px 15px";
			contactLink.style.background = "#16a085";
			contactLink.style.color = "#ecf0f1";
			contactLink.style.borderRadius = "8px";
			contactLink.style.textDecoration = "none";
			contactLink.style.fontWeight = "bold";
			contactLink.style.transition = "background 0.3s ease";

			// Hover effect for contact link
			contactLink.addEventListener(
				"mouseover",
				() => (contactLink.style.background = "#1abc9c")
			);
			contactLink.addEventListener(
				"mouseout",
				() => (contactLink.style.background = "#16a085")
			);

			contactDiv.appendChild(contactLink);
			section.appendChild(contactDiv);
			listDiv.appendChild(section);
		} else {
			listDiv.innerHTML = "";
		}
	});
});
