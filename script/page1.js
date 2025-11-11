const content = document.querySelector(".page-content");

function showPage(name) {
    content.innerHTML = pages[name];
}

document.querySelectorAll(".left-bar button").forEach(btn => {
    btn.addEventListener("click", () => {
        showPage(btn.dataset.page);
    });
});

const pages = {
    about:    "<h1>About This Theme</h1><p>你的说明内容...</p>",
    why:      "<h1>Why I Choose This Theme?</h1><p>你的说明内容...</p>",
    features: "<h1>Theme Features</h1><p>你的说明内容...</p>",
    message:  "<h1>Message from Creator</h1><p>你的说明内容...</p>",
    image:    "<h1>Tool and Sourse</h1><p>你的说明内容...</p>",
    
    profile:  "<h1>KennyCS</h1><p>你的自我介绍内容...</p>"
};

showPage("about");