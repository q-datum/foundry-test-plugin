const PLUGIN_NAME = 'Test Plugin';
const log = ( value ) => { console.log(`${PLUGIN_NAME} | ${value}`); }

Hooks.on("init", function () {
    console.log("Test Plugin | I'm alive");
});

Hooks.on("ready", function () {
    log("I'm ready..");
    console.log(game.modules.get("midi-qol"));

    // let settings = game.settings.get("midi-qol");
    const midiQOLSettings = game.settings.get("midi-qol", "ConfigSettings");
    log(midiQOLSettings.doReactions);
    midiQOLSettings.doReactions = 'none';
    log(midiQOLSettings.doReactions);
    console.log(game.settings);
});