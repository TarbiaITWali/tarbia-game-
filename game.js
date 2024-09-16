/ Game data: decisions, paths, and endings
const story = {
    0: {
        text: "You find yourself in a dark, abandoned house. The air is thick, and you hear faint whispers. What do you do?",
        choices: [
            "Investigate the whispers",
            "Search for a light source",
            "Leave the house",
            "Go upstairs"
        ],
        next: [1, 2, 3, 4]
    },
    1: {
        text: "The whispers grow louder. You follow them to a locked door. The handle feels cold. What do you do?",
        choices: [
            "Try to open the door",
            "Knock on the door",
            "Turn back",
            "Listen closely"
        ],
        next: [5, 6, 3, 7]
    },
    2: {
        text: "You find an old flashlight. It flickers weakly. What do you do?",
        choices: [
            "Turn it on",
            "Search for batteries",
            "Keep it off",
            "Leave the room"
        ],
        next: [8, 9, 3, 4]
    },
    3: {
        text: "You decide to leave the house, but something feels wrong. You see shadows moving in the fog. What do you do?",
        choices: [
            "Run away quickly",
            "Walk calmly",
            "Go back inside",
            "Call for help"
        ],
        next: [10, 11, 0, 12]
    },
    4: {
        text: "You ascend the creaky stairs. There's a door at the end of the hall. You hear faint scratching sounds. What do you do?",
        choices: [
            "Approach the door",
            "Call out",
            "Leave quietly",
            "Investigate the scratching"
        ],
        next: [13, 6, 3, 14]
    },
    // Endings
    5: { ending: true, text: "The door opens to reveal nothing but darkness. As you step forward, you fall into the abyss. You’re never seen again." },
    6: { ending: true, text: "You knock on the door, but there's no response. Suddenly, a hand grabs you from behind. Everything goes black." },
    7: { ending: true, text: "Listening closely, you realize the whispers are your own voice, echoing back at you. You're trapped in a loop forever." },
    8: { ending: true, text: "You turn on the flashlight, but it explodes in your hands, plunging you into eternal darkness." },
    9: { ending: true, text: "Searching for batteries, you find a hidden passage leading to an underground bunker. You are safe... for now." },
    10: { ending: true, text: "You run away into the fog, but you can never escape the shadows that follow. You're doomed to wander forever." },
    11: { ending: true, text: "You walk calmly, but the shadows catch up. They're not evil—just lost souls guiding you to safety. You survive the night." },
    12: { ending: true, text: "Calling for help, your voice echoes back, distorting into a demonic tone. You’re consumed by the darkness." },
    13: { ending: true, text: "You open the door at the end of the hall and find a way out of the house. You've escaped!" },
    14: { ending: true, text: "Investigating the scratching, you find an old diary. Reading it, you unleash an ancient curse that haunts you forever." }
};

let currentStep = 0;

function makeChoice(choice) {
    const nextStep = story[currentStep].next[choice - 1];
    if (story[nextStep].ending) {
        document.getElementById("story-text").textContent = story[nextStep].text;
        document.getElementById("choices").style.display = "none";
        document.getElementById("end-message").textContent = "The End";
        document.getElementById("end-message").style.display = "block";
    } else {
        currentStep = nextStep;
        updateStory();
    }
}

function updateStory() {
    const step = story[currentStep];
    document.getElementById("story-text").textContent = step.text;
    document.getElementById("choice1").textContent = step.choices[0];
    document.getElementById("choice2").textContent = step.choices[1];
    document.getElementById("choice3").textContent = step.choices[2];
    document.getElementById("choice4").textContent = step.choices[3];
}

// Initialize the first step of the game
updateStory();/ Game data: decisions, paths, and endings
const story = {
    0: {
        text: "You find yourself in a dark, abandoned house. The air is thick, and you hear faint whispers. What do you do?",
        choices: [
            "Investigate the whispers",
            "Search for a light source",
            "Leave the house",
            "Go upstairs"
        ],
        next: [1, 2, 3, 4]
    },
    1: {
        text: "The whispers grow louder. You follow them to a locked door. The handle feels cold. What do you do?",
        choices: [
            "Try to open the door",
            "Knock on the door",
            "Turn back",
            "Listen closely"
        ],
        next: [5, 6, 3, 7]
    },
    2: {
        text: "You find an old flashlight. It flickers weakly. What do you do?",
        choices: [
            "Turn it on",
            "Search for batteries",
            "Keep it off",
            "Leave the room"
        ],
        next: [8, 9, 3, 4]
    },
    3: {
        text: "You decide to leave the house, but something feels wrong. You see shadows moving in the fog. What do you do?",
        choices: [
            "Run away quickly",
            "Walk calmly",
            "Go back inside",
            "Call for help"
        ],
        next: [10, 11, 0, 12]
    },
    4: {
        text: "You ascend the creaky stairs. There's a door at the end of the hall. You hear faint scratching sounds. What do you do?",
        choices: [
            "Approach the door",
            "Call out",
            "Leave quietly",
            "Investigate the scratching"
        ],
        next: [13, 6, 3, 14]
    },
    // Endings
    5: { ending: true, text: "The door opens to reveal nothing but darkness. As you step forward, you fall into the abyss. You’re never seen again." },
    6: { ending: true, text: "You knock on the door, but there's no response. Suddenly, a hand grabs you from behind. Everything goes black." },
    7: { ending: true, text: "Listening closely, you realize the whispers are your own voice, echoing back at you. You're trapped in a loop forever." },
    8: { ending: true, text: "You turn on the flashlight, but it explodes in your hands, plunging you into eternal darkness." },
    9: { ending: true, text: "Searching for batteries, you find a hidden passage leading to an underground bunker. You are safe... for now." },
    10: { ending: true, text: "You run away into the fog, but you can never escape the shadows that follow. You're doomed to wander forever." },
    11: { ending: true, text: "You walk calmly, but the shadows catch up. They're not evil—just lost souls guiding you to safety. You survive the night." },
    12: { ending: true, text: "Calling for help, your voice echoes back, distorting into a demonic tone. You’re consumed by the darkness." },
    13: { ending: true, text: "You open the door at the end of the hall and find a way out of the house. You've escaped!" },
    14: { ending: true, text: "Investigating the scratching, you find an old diary. Reading it, you unleash an ancient curse that haunts you forever." }
};

let currentStep = 0;

function makeChoice(choice) {
    const nextStep = story[currentStep].next[choice - 1];
    if (story[nextStep].ending) {
        document.getElementById("story-text").textContent = story[nextStep].text;
        document.getElementById("choices").style.display = "none";
        document.getElementById("end-message").textContent = "The End";
        document.getElementById("end-message").style.display = "block";
    } else {
        currentStep = nextStep;
        updateStory();
    }
}

function updateStory() {
    const step = story[currentStep];
    document.getElementById("story-text").textContent = step.text;
    document.getElementById("choice1").textContent = step.choices[0];
    document.getElementById("choice2").textContent = step.choices[1];
    document.getElementById("choice3").textContent = step.choices[2];
    document.getElementById("choice4").textContent = step.choices[3];
}

// Initialize the first step of the game
updateStory();
