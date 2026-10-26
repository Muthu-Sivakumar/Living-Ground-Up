// use .querySeelctor
// use .class, tag, or #id formats
const user_page = document.querySelector(".user-page");
user_page.addEventListener("click", () => {
	console.log("moving pages");
	window.location.href = "/_shared/user-page/user-page.html";
});
