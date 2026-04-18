// Explore button scroll
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("msg");

  if(name === "" || email === ""){
    msg.innerHTML = "Please fill all fields";
    msg.style.color = "red";
  } else {
    msg.innerHTML = "Form submitted successfully";
    msg.style.color = "green";
  }
});

// Static Latest Posts
let posts = document.getElementById("posts");

let data = [
  "Learn HTML Basics",
  "Master CSS Design",
  "JavaScript for Beginners",
  "Responsive Web Layout",
  "API Integration Project"
];

data.forEach(post => {
  let li = document.createElement("li");
  li.innerText = post;
  posts.appendChild(li);
});