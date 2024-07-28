const PLUGIN_NAME = 'Test Plugin';
// prints output to the dev tools (press f12)
const log = ( value ) => { console.log(`${PLUGIN_NAME} | ${value}`); }

// triggers while the vtt initializes
Hooks.on("init", function () {
    console.log("Test Plugin | I'm alive");
});

// triggers when the vtt is ready
Hooks.on("ready", function () {
    log("I'm ready..");
    // get manifest data of the midi-qol module
    console.log(game.modules.get("midi-qol"));

    // access settings of the midi-qol module
    const midiQOLSettings = game.settings.get("midi-qol", "ConfigSettings");

    log(midiQOLSettings.doReactions);
    midiQOLSettings.doReactions = 'none'; // disables auto reaction for players
    log(midiQOLSettings.doReactions);
    console.log(midiQOLSettings);
});