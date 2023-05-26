let testimony = [
{ 
    id: 1,
    Image: "https://i.postimg.cc/Hk5Dg54x/C12-Luke-Evertson-1.jpg", 
    name: `Luke Evertson`,
    discription: `Ethan Lesar, the ultimate Jack-of-all trades. If you need a
    problem solved or a new design, he is the go-to guy. A real hard
    worker and team player, but can lead when he needs to. Any
    company he goes to will benefit greatly from his skills and
    personality`,
   
},
{ 
    id: 2,
    Image: "https://i.postimg.cc/NMdZ4xYN/C12-Cheslyn-Herman-1.jpg",
    name: `Cheslyn Herman`,
    discription: `I have had the pleasure of working alongside your colleague, and
    I can confidently say that they are an exceptional team member.
    Their enthusiasm and passion for their work are contagious, and
    they have a remarkable ability to listen to others' ideas and
    perspectives with an open mind.`
   
},
{ 
    id: 3,
    Image: "https://i.postimg.cc/qqYSfMNy/C12-Timothy-Barry-1.jpg",
    name: `Timothy Barry`,
    discription: `I have had the pleasure of working alongside Ethan and he is a
    great personality to be around. He is a very kind person and
    also very genuine. He has excellent skills in html and css and
    he excels at everything he does. He takes his work seriously and
    doesn't like to mess around when it comes to his work. He works
    extremely well in a team and also by himself. He is overall just
    a great guy to be around.` 
   
},
{ 
    id: 4,
    Image: "https://i.postimg.cc/SQtwYVgR/C12-Liyabona-Mxhalis-1.jpg" ,
    name:`Liyabona Mxhalisa`,
    discription: `Ethan is the new Steve Jobs from the Cape. He is hard working
    and determined to achieve any deadline giving to him. He is Like
    the Batman of coding. His work ethic and passion makes him an
    all around leader. He gives you his knowledge and you gain so
    much more and more inspiration when you around him.`
   
},
{ 
    id: 5,
    Image: "https://i.postimg.cc/fLrK63VK/C12-C-1-Lyle-Brown-2.jpg",
    name:`Lyle Brown`,
    discription: `Ethan is very ambitious. His energy is positively infectious.
    Not afraid to ask questions when he does not understand
    something and he is a great conversationalist. 10/10 person,
    would highly recommend.`
   
},
{ 
    id: 6,
    Image: "https://i.postimg.cc/59ZczysL/mezaan-Copy.jpg", 
    name:`Meezaan Davids`,
    discription: `Ethan is a bright and enthusiastic individual who is new to
    coding but has been steadily improving his skills. He has a
    talent for creating creative and tidy projects that are easy to
    understand. Working with him one on one has been a pleasure.`,
   
}



]
  
let testimonyGroup = document.querySelector('.testimonial');
testimony.forEach((data)=> {
    testimonyGroup.innerHTML += `
    <div class="card bg-black">
    <img
      src="${data.Image}"
      class="img-thumbnail border-success border-5"
      alt="..."
      style="height: 200px; width: 200px"
      loading="lazy"
    />
    <div class="card-body">
      <h3 class="text-success"> ${data.name}</h3>
      <p class="card-text text-white">
      ${data.discription}
       
      </p>
    </div>
  </div>
    `
})


