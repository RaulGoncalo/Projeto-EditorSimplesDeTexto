let optionsButtons = document.querySelectorAll(".option-button");
let optionsButtonsFormat = document.querySelectorAll(".format");
let optionsButtonsAlign = document.querySelectorAll(".align");
let optionsButtonsSpacing = document.querySelectorAll(".spacing");
let optionsButtonsList = document.querySelectorAll(".list");
let textArea = document.querySelector(".text-area");

function toggleActiveButtons(button) {
	if (
		button.classList.contains("align") ||
		button.classList.contains("list")
	) {
		if (button.classList.contains("active")) {
			button.classList.remove("active");
		} else {
			if (button.classList.contains("align")) {
				optionsButtonsAlign.forEach((buttonsAlign) => {
					if (buttonsAlign.classList.contains("active")) {
						buttonsAlign.classList.remove("active");
						document.execCommand("removeFormat", false, null);
					}
				});
			}

			if (button.classList.contains("list")) {
				optionsButtonsList.forEach((buttonsAlign) => {
					if (buttonsAlign.classList.contains("active")) {
						buttonsAlign.classList.remove("active");
						document.execCommand("removeFormat", false, null);
						textArea.style.paddingLeft = "1rem";
					}
				});

				textArea.style.paddingLeft = "2rem";
			}

			button.classList.add("active");
		}
	} else {
		if (button.classList.contains("active")) {
			button.classList.remove("active");
		} else {
			button.classList.add("active");
		}
	}
}

optionsButtons.forEach((button) => {
	button.addEventListener("click", () => {
		toggleActiveButtons(button);
		document.execCommand(button.id, false, null);
	});
});

optionsButtonsSpacing.forEach((button) => {
	button.addEventListener("click", () => {
		document.execCommand(button.id, false, null);
	});
});

textArea.addEventListener("keyup", (e) => {
	if (e.target.textContent === "") {
		optionsButtons.forEach((button) => {
			e.target.innerHTML = "";
			button.classList.remove("active");
		});
		textArea.style.padding = "1rem";
	}
});
