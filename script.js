// 編輯名字功能
const editButton = document.getElementById("edit-button");
const nameDisplay = document.getElementById("name-display");
const nameInput = document.getElementById("name-input");

let isEditing = false;

editButton.addEventListener("click", () => {
    if (isEditing) {
        nameDisplay.innerHTML = `${nameInput.value || "Angus Chou"} <button id="edit-button">edit</button>`;
        nameDisplay.style.display = "block";
        nameInput.style.display = "none";
    } else {
        nameInput.value = nameDisplay.textContent.trim();
        nameDisplay.style.display = "none";
        nameInput.style.display = "block";
    }
    isEditing = !isEditing;
});

// 新增音樂功能
const addButton = document.getElementById("add-button");
const musicForm = document.getElementById("music-form");
const submitButton = document.getElementById("submit-button");
const musicContainer = document.getElementById("music-container");

addButton.addEventListener("click", () => {
    musicForm.style.display = "block";
});

submitButton.addEventListener("click", () => {
    const musicLink = document.getElementById("music-link").value.trim();
    const musicName = document.getElementById("music-name").value.trim();

    if (musicLink && musicName) {
        const musicItem = document.createElement("div");
        musicItem.className = "music-item";
        musicItem.innerHTML = `
            <a href="${musicLink}" target="_blank">
                <img src="youtube.jpg" alt="${musicName}">
            </a>
            <p>${musicName}</p>
        `;
        musicContainer.appendChild(musicItem);

        // 清空表單並隱藏
        document.getElementById("music-link").value = "";
        document.getElementById("music-name").value = "";
        musicForm.style.display = "none";
    } else {
        alert("請填寫完整資訊！");
    }
});
