const testimonials = [

    {

        name: "Sophie Johns",
        photoUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "I am extremely satisfied with the quality of the laptops provided by animal. The sleek design and performance exceeded my expectations. I highly recommend animal for anyone in need of a reliable laptop.",

    },

    {

        name: "Samantha Roberts",

        photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I never knew a laptop could be so powerful until I tried animal's latest model. The sleek design and lightning-fast performance make it a must-have for any tech enthusiast. I can't imagine my day without it!",

    },

    {

        name: "Sophia Johns",
        photoUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "I am extremely satisfied with the quality of the laptops provided by animal. The sleek design and performance exceeded my expectations. I highly recommend animal for anyone in need of a reliable laptop.",

    },

    {

        name: "Jamantha Roberts",

        photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I never knew a laptop could be so powerful until I tried animal's latest model. The sleek design and lightning-fast performance make it a must-have for any tech enthusiast. I can't imagine my day without it!",

    },

];

const imgEl=document.querySelector("img");
const textEl=document.querySelector(".text");
const usernameEl=document.querySelector(".username");


let idx=0;


function updateTestimonials() {
  const { name, photoUrl, text } = testimonials[idx];

  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;

  idx = (idx + 1) % testimonials.length;

  setTimeout(updateTestimonials, 3000);
}

updateTestimonials();
