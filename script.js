// script.js

const projects = {

  about: {

    type: "single",

    title: "About",

    description: `
      Alec Pla is an interdisciplinary artist and game developer at the intersection of installation art, immersive media, and game design, with a particular interest in emerging technologies and the challenges and opportunities they present.<br><br>

His debut VR experience Performative Salvation premiered in 2026 and featured at events including Portland Festival of Cinema, Animation & Technology, Atlanta Film festival, Maryland Film Festival CineTech, and NewImages in Paris, where he was invited to speak on the themes of AI and oppression featured in his work.<br><br> 

Alec's career in technology + art began in late 2021 when, after overseeing retail demo creation for the Meta Quest 2 launch, he left to pursue extended reality (XR) development full time, teaching himself to code while creating XR prototypes via the Unity game engine.<br><br> 

A long time lover of narrative gaming and interactive art, he began focusing on artistic work full time in late 2023 as part of Gray Area's cultural incubator in San Francisco working on an XR project around movement, dance, musical co-creation.<br><br> 

Alec continues to work on a variety of new projects. He lives in San Diego, California.<br><br>
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
      Performative Salvation is an interactive VR film in which the audience participant is interrogated by a disgruntled, newly-conscious godlike AI debating whether humanity is salvageable.<br><br>

By answering the AI’s questions on humanity's existential challenges (with a touch of dark humor), it explores whether a relentless, nearly performative optimism is a necessary delusion helping us counter our self-destructive inclinations, and a more hopeful alternative to defeatism.<br><br>


A solo project, Performative Salvation was created in Unity game engine and is playable on Meta Quest hardware, utilizing hand tracking, hand gesture interpretation, voice input, and text-to-speech. <br><br>

Player responses are routed to OpenAI's API, where a custom prompt analyzes them for the level of "optimism". These analyses are routed back to the game runtime, affecting the AI character's response (and its likelihood to "spare" the Earth at the end..) <br><br>

Runtime: 6 mins

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

    title: "XR Prototyping",

projects: [

    {
      title: "Palette: Hand Tracked Inventory System",

      description: `
        Palette is an original file management system for hand tracking, created for an in-progress music app.<br><br> 

The system is fully functional, allowing import of multiple media types into a local "mod" folder on the headset's hard drive. The demo also features media player control concepts. <br><br>

This was a rewarding exercise in imagining an inventory system with XR-native media controls. <br><br>

It aims to fill a need for a "palette" style inventory system for certain creativity applications in XR.<br><br>

Applications could be decorating a room, housing 3D models, music files, or any other object. 
 
      `,

      media: [
        {
           type: "youtube",
    	   embed: "https://www.youtube.com/embed/otCM9KF3WDU",
    	   size: "large"
        },

        {
           type: "youtube",
    	   embed: "https://www.youtube.com/embed/DXRhE_RTlOU",
    	   size: "large"
        },
      ]
    },

    {
      title: "Loci: Language Learning Memory Palace",

      description: `
        Loci aims to make language learning fun by letting users place virtual objects and flashcards in their rooms. <br><br>

As the sole game engine developer on the project, I implemented all interactions, sounds, and programmed the experience. A fully hand-tracked experience, it also features a pointing minigame that recognizes if you are pointing at the correct object announced by the computer.<br><br>

My most notable challenge was having to develop a novel solution to for dynamic spatial anchors. This allowed the virtual objects to be moved by the user during play,  remaining there between play sessions. When you return, all your objects are exactly where you left them.<br><br>

Created with a small team of artists, Loci was a submission for Meta's Presence Platform hackathon, 2024.<br><br>

<a href="https://devpost.com/software/language-learning-memory-palace"
     target="_blank"
     rel="noopener noreferrer">
     Devpost Page
  </a> <br><br>
<a href="https://github.com/alexp66/MRHackathon_LanguageApp"
     target="_blank"
     rel="noopener noreferrer">
     GitHub
  </a> 
      `,

      media: [        
	{
	   type: "youtube",
    	   embed: "https://www.youtube.com/embed/oyx1LnARqRs",
    	   size: "large"
	},
	{
          type: "image",
          src: "images/project2/project2/1.jpg",
          size: "large"
        },
	{
          type: "image",
          src: "images/project2/project2/2.jpg",
          size: "large"
        },

      ]
    },

  ]

},

  project3: {

    type: "multi",

    title: "Game Development",

    projects: [

    {
      title: "Generative AI Character Dialogue Trees in Unity",

      description: `
       An early iteration of <i>Performative Salvation</i>, featured 3 AI characters with distinct personalities who could generate voice responses to the players questions or statements in real time. I eventually decided the responses felt too <i>AI</i>, and decided to remove the feature and write the voice lines myself in a more simplified experience. That being said, I am interested to revisit this system someday with more refined LLM models.<br><br> 

The primary challenge was allowing for free-flowing yet "on-rails" conversation. This relies on asking the AI model not only for an in-character reponse, but for an analysis of how the player's last input affects the "goals" of the interaction (the branches of the dialogue tree, if you will).<br><br> 

Using tools such as OpenAI and many more, it is feasible to train and process user intents and entities embedded in each  message. Using these inferred intents and entities, you can programmatically adjust your subsequent prompts to the ChatGPT model to return a flavor of response that fits your desired narrative path. (and the more detailed the path, the better. quite the rabbit hole)<br><br>


<a href="Using Generative Text AIs to Create Roleplaying Characters & NPCs.html"
target="_blank"
   rel="noopener noreferrer">
  Read Blog Post
</a>      `,

      media: [
        {
          type: "image",
          src: "images/project3/project1/1.png",
          size: "medium"
        },
	{
          type: "image",
          src: "images/project3/project1/2.png",
          size: "medium"
        },

      ]
    },
    
     {
      title: "Dynamic Spatial Anchors",

      description: `
        During the development of <i>Loci</i>, I had to develop a novel solution to for dynamic spatial anchors. This allowed the virtual objects to be moved by the user during play,  remaining there between play sessions. When you return, all your objects are exactly where you left them.<br><br>

Once a Meta spatial anchor is created, it can't be moved. This solution deletes and re-adds a GameObject's associated SpatialAnchor, as well as re-serializes the list of anchors IDs.<br><br>

<a href="https://github.com/alexp66/Dynamic-Spatial-Anchors-for-Meta-SDK-Unity"
     target="_blank"
     rel="noopener noreferrer">
     Github Link
  </a> 
      `,

      media: [
        {
          type: "image",
          src: "images/project3/project3/1.jpg",
          size: "small"
        },
	{
          type: "image",
          src: "images/project3/project3/2.jpg",
          size: "small"
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
