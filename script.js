document.addEventListener("DOMContentLoaded", function () {
	const button = document.querySelector(".btn");
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

			h2s.forEach((h2, index) => {
				const id = `section-${index}`;
				h2.setAttribute("id", id);

				const li = document.createElement("li");
				li.style.marginBottom = "10px";

				const a = document.createElement("a");
				a.href = `#${id}`;
				a.textContent = `📌 ${h2.textContent}`;

				// New modern style for links
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
			listDiv.appendChild(section);
		} else {
			listDiv.innerHTML = "";
		}
	});
});
