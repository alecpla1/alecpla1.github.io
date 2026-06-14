// script.js

const projects = {

  about: {

    type: "single",

    title: "About",

    description: `
      Alec Pla works at the intersection of visual art, technology, and immersive media. He is based in California.
    `,

    media: [
      {
	type: "image",
    	src: "images/about/1.jpg",
    	size: "mini"
      },
    ]
  },

  project1: {

    type: "single",

    title: "Performative Salvation (2026)",

    description: `
      "A darkly comic VR séance with a killer self-help AI, where optimism means survival and defeatism brings the laser closer."<br><br>

Performative Salvation is an interactive, LLM-enhanced VR film in which the player (in the role of a space-station crew member overlooking Earth) is interrogated by a godlike AI debating whether humanity is salvageable.<br><br>

Through answering the AI’s questions about humanity's existential challenges, the world will either be saved, or indifference will prevail.<br><br>

With a touch of dark humor, this work asks whether a relentless, nearly performative optimism is a necessary delusion helping us counter our self-destructive inclinations, and a more hopeful alternative to defeatism.<br><br>


A solo project, Performative Salvation was created in Unity game engine and has screened at film festivals in the US and Europe.
<br>


    `,


    media: [

      {
	type: "image",
    	src: "images/project1/1.png",
    	size: "poster"
      },
{
    	type: "youtube",
    	embed: "https://www.youtube.com/embed/y7BsT45Kaj8",
    	size: "large"
      },

      {
	type: "image",
    	src: "images/project1/2.png",
    	size: "large"
      },      
    ]
  },

  project2: {

    type: "multi",

    title: "Project Two",

projects: [

    {
      title: "Coming soon",

      description: `
        Coming soon
      `,

      media: [
        {
          type: "",
          src: "images/project2/21.png",
          size: "large"
        },

        {
          type: "",
          src: "images/project2/22.png",
          size: "large"
        },
      ]
    },

    {
      title: "Coming soon",

      description: `
        Coming soon
      `,

      media: [
        {
          type: "",
          src: "images/project2/prototypeB.jpg",
          size: "medium"
        }
      ]
    }

  ]

},

  project3: {

    type: "multi",

    title: "Project Three",

    projects: [

    {
      title: "Coming soon",

      description: `
        Coming soon
      `,

      media: [
        {
          type: "",
          src: "images/project2/prototypeA.jpg",
          size: "medium"
        }
      ]
    },

    {
      title: "Coming soon",

      description: `
        Coming soon
      `,

      media: [
        {
          type: "",
          src: "images/project2/prototypeB.jpg",
          size: "medium"
        }
      ]
    }

  ]

},

cv: {

    type: "standard",

    title: "CV",

    description: `
    <h3>EXHIBITIONS</h3> <p>
<div class="big-text-for-exhibition-work">    
     <em>Performative Salvation</em><br>
</div>
<div class="cv-entry-exhibition">
     NewImages Festival, XR Development Market Official Selection, Paris, France, 2026<br>
     Portland Festival of Cinema, Animation & Technology (VR Showcase), Portland, OR, 2026<br>
     Atlanta Film Festival, Official Selection (VR Showcase), Atlanta, GA, 2026<br>
     Maryland Film Festival, Official Selection (CineTech), Baltimore, MD, 2026<br>
     Poppy Jasper International Film Festival, Official Selection (VR), Morgan Hill, CA, 2026<br>
     Shapeshift Festival, Official Selection (VR), Sofia, Bulgaria, 2026<br>   
</div>
    </p>

    <h3>PANELS/TALKS/RECOGNITIONS</h3> 
<div class="cv-entry-panel">  
     "Trained to Oppress: When AI Learns Power Too Well" (Panel), NewImages Festival, Paris, France, April 2026<br>
     Gray Area Cultural Incubator, 2023 Cohort, San Francisco, CA
</div>
    </p>
    
<h3>EDUCATION</h3> 
    <p>
<div class="cv-entry-education">
     <em>Copenhagen Business School</em><br>
     MSc International Business and Politics, 2016
</div>
    </p>
    <p>
<div class="cv-entry-education">
     <em>SOAS University of London</em><br>
     Independent Study, 2010-2011
</div>
    </p>
<div class="cv-entry-education">
     <em>University of Wisconsin-Whitewater</em><br>
     BBA International Business, 2012
</div>
    </p>

<h3>CERTIFICATIONS & SKILLS</h3> <p>
<div class="cv-entry-skill">
     <em>XR Development in Unity</em>, Circuit Stream, 2021<br>
     <em>Advanced XR Development in Unity</em>, XR Bootcamp, 2022<br>
     <em>C# Programming in Unity</em>, Circuit Stream, 2022<br>
</div>
</p>

    `,

    media: [

      {
	type: "",
    	src: "",
    	size: ""
      },
    ]
  },

blog: {

    type: "single",

    title: "Blog",

    description: `
      Coming Soon
    `,

    media: [
      {
	type: "",
    	src: "images/about/1.jpg",
    	size: "mini"
      },
    ]
  },

};

const textContainer =
  document.getElementById("project-text");

const gallery =
  document.getElementById("gallery");

const navItems =
  document.querySelectorAll(".nav-item");

function renderProject(projectKey) {

  const project = projects[projectKey];

    if (project.type === "multi") {

       renderMultiProject(project);

      } else if (project.type === "single") {

       renderSingleProject(project);

      } else if (project.type === "standard") {
      
      renderStandardProject(project);
      }

/* ACTIVE NAV */

  navItems.forEach(item => {

    item.classList.remove("active");

    if (item.dataset.project === projectKey) {

      item.classList.add("active");
    }
  });
}

function renderSingleProject(project) {

  // gallery.innerHTML = "";

  let galleryHTML = "";

  project.media.forEach(item => {

    if (item.type === "image") {

      galleryHTML += `
        <img
          src="${item.src}"
          class="gallery-image ${item.size}">
      `;
    }

    if (item.type === "youtube") {

      galleryHTML += `
        <iframe
          src="${item.embed}"
          class="gallery-video ${item.size}"
          allowfullscreen>
        </iframe>
      `;
    }

  });

  textContainer.innerHTML = `

    <div class="single-project-layout">

      <div class="single-project-text">

        <h2 class="project-title">
          ${project.title}
        </h2>

        <div class="project-description">
          ${project.description}
        </div>

      </div>

      <div class="single-project-gallery">

        ${galleryHTML}

      </div>

    </div>
  `;

  // gallery.innerHTML = "";


  document.querySelector(".content")
    .scrollTo({
      top: 0,
      behavior: "smooth"
    });
}

function renderMultiProject(project) {

  let pageHTML = '';

  project.projects.forEach(item => {

    let mediaHTML = '';

    item.media.forEach(media => {

      if (media.type === "image") {

        mediaHTML += `
          <img
            src="${media.src}"
            class="gallery-image ${media.size}">
        `;
      }

      if (media.type === "youtube") {

        mediaHTML += `
          <iframe
            src="${media.embed}"
            class="gallery-video ${media.size}"
            allowfullscreen>
          </iframe>
        `;
      }

    });

    pageHTML += `

      <div class="multi-project">

        <div class="multi-project-text">

          <h2 class="multi-project-title">
            ${item.title}
          </h2>

          <div class="multi-project-description">
            ${item.description}
          </div>

        </div>

        <div class="multi-project-gallery">

          ${mediaHTML}

        </div>

      </div>
    `;
  });

  textContainer.innerHTML = `

    <div class="multi-project-page">

      ${pageHTML}

    </div>

  `;

  // gallery.innerHTML = "";

  document.querySelector(".content")
    .scrollTo({
      top: 0,
      behavior: "smooth"
    });
}

function renderStandardProject(project) {

  textContainer.innerHTML = `

    <h2 class="project-title">
      ${project.title}
    </h2>

    <div class="project-description">
      ${project.description}
    </div>

  `;

  document.querySelector(".content")
    .scrollTo({
      top: 0,
      behavior: "smooth"
    });
}

/* NAV EVENTS */

document
  .querySelectorAll("[data-project]")
  .forEach(item => {

  item.addEventListener("click", () => {

    renderProject(item.dataset.project);
  });
});

/* INITIAL */

renderProject("project1");