const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
        navMenu = document.querySelector(".nav-menu");

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')
      navMenu.classList.toggle('show-menu') // This will also toggle the submenu when the main menu is clicked. Add a class to your submenu to hide it when the main menu is clicked.

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','right-section')

/*const students = [
  {
    name: "Adeoye Temitope A.",
    matricNo: "20223585",
    department: "Computer Science",
    college: "College of Physical Sciences",
    level: "300",
    email: "adeoyeta@funaab.edu.ng",
    gender: "Male",
    image: "images/smart.webp"
  }, {
    name: "Robinson Cherish O.",
    matricNo: "20223656",
    department: "Computer Science",
    college: "College of Physical Sciences",
    level: "300",
    email: "robinsonco@funaab.edu.ng",
    gender: "Male",
    image: "images/international1.jpg"
  }
]

let profileHTML = "";

students.forEach((student) => {
  profileHTML += `
    <div class="w-[440px] h-[450px] border-2 border-green-900 py-8 px-7 text-center bg-black">
      <div class="student-name font-bold text-3xl bg-white py-2 rounded-md">
        ${student.name}
      </div>

      <div class="flex w-full relative justify-center mt-3">
        <p style="transform: rotate(90deg); border-top-left-radius: 10px; border-top-right-radius: 10px;" class="absolute left-0 top-19 bg-red-700 py-2 px-2 text-white font-semibold">Under-graduate</p>
        <img src="${student.image}" alt="" width="300px">
      </div>

      <p class="mt-3 font-bold text-2xl bg-green-800 py-3" content></p>
      <p class="mt-3 font-semibold text-2xl text-white"> Email: ${student.email}</p>

    </div>

    <div class="max-w-7xl mt-6 font-bold text-2xl ">
      <p>DEPARTMENT: <span class="font-semibold text-[18px]">${student.department}</span></p>
      <p>COLLEGE: <span class="font-semibold text-[18px]">${student.college}</span></p>
      <P>GENDER: <span class="font-semibold text-[18px]">${student.gender}</span></P>
    </div>
  `
});

document.querySelector(".profile-details").innerHTML = profileHTML;

function profile() {
  
}*/