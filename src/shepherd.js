let tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
        exitOnEsc: true,
        cancelIcon: {
            enabled: true,
        },
    }, 
});

tour.addStep({
    id: "step1",
    title: " 🌱 SeedLink: Where nature meets home! ",
    text: "Seed link is a web application which lets you to explore a diverse range of plants available at nearby nurseries and gardens 🌿. You can buy it, or reasearch about it. That's it?? Naah, explore the app to learn more! 🪴",
    buttons: [
        {
          text: "Next",
          action() {
            return this.next();
          },
        },
      ],
    });

tour.addStep({
  id: "step2",
  title: "🔍 Search for Plants",
  text: "This Search Bar is so powerful! Just search whatever name coming to your mind... and Kaboom 💥, that plant will be in your sights! You can search plants by their botanical names too!!! 😱",
  attachTo: {
    element: ".form-control",
    on: "right",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step3",
  title: "⚒️ Our Services!",
  text: "Listen from our past customers. Wait, I don't have one. Be that first! All the services listed are so true 💯. Don't believe? **Shop Now** 🛍️",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".about",
    on: "right",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step3-",
  title: "🛒 Shopping Made Easy",
  text: "You are just a single click far away!👆 Tap Tap!!! 📼 ",
  attachTo: {
    element: ".button--link",
    on: "bottom",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step4",
  title: "✅ Our Most Soldable Shop Items ",
  text: "Pnce upon a time, a legend name Rohan 🧑‍🔬 said, Plants bring Harmony 🕊️, Love 💘, and your Loved ones 💏! Are you ready to bring some love at your place? 💖🫂",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".center",
    on: "bottom",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step5",
  title: "❓ Have Questions like??? ",
  text: "Why are gnats flying around my plant? 🪲",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".last",
    on: "right",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step5-",
  title: "🧑‍🏫 Yes, We have answers to all your Questions...",
  text: "\"Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.\" Your issue is our issue. ✒️",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".last_answer",
    on: "bottom",
  },
  beforeShowPromise: function() {
    return new Promise(function(resolve) {
        // Using JS To click on an element
        document.querySelector(".questions__description").click();
        resolve();
    });
},
buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step6",
  title: "🙋‍♂️ I know you have a lot to ask!",
  text: "Many ppl hestitate to ask. But you don't need to show hesitation in SeedLink. Write your query and hit the submit button! ✅",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: "#submit_button",
    on: "right",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step7",
  title: "📰 Don't Forget to subscribe our Weekly Newsletter",
  text: "We promise, we'll not spam. All the information shared will be related to plants only and no product advertisement 👌",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".footer__subscribe",
    on: "right",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step8",
  title: "⌚ Now it's your time ",
  text: "Explore the app at your own place 🎉. I'm pretty sure, you'll like it! And don't forget to follow us on socials provided in the right of the screen. 🥳",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".container",
    on: "bottom",
  },
  buttons: [
    {
      text: "Complete",
      action() {
        return this.next();
      },
    },
  ],
});

tour.start();