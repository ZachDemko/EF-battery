//We randomly define if the user should focus on orange or blue squares, to counterbalance
var stims = jsPsych.randomization.shuffle([["orange", "stim1"], ["blue", "stim2"]]);
var message_correct = "<b><div style='color:green; font-size:30px'>Correct!</div></b>";
var message_incorrect = "<b><div style='color:red; font-size:30px''>Incorrect</div></b>";

//We define the practice stimuli
var practice_stimuli_block = [];

//Go condition
for (var i = 0; i < go_stimuli_block_practice; i++){
    practice_stimuli_block.push({
        stimulus: "<div class = centerbox><div id=" + stims[0][1] + "></div></div>",
        stimulus_after_key_press: "<div class = centerbox><div id=" + stims[0][1] + "-responded></div></div>",
        data: {
            trial_id: "Practice",
            condition: "Go",
            correct_response: " "
        },
        timeout_message: message_incorrect,
        key_answer: " "
    });
};

//No-go condition
for (var i = 0; i < go_stimuli_block_practice; i++){
    practice_stimuli_block.push({
        stimulus: "<div class = centerbox><div id=" + stims[1][1] + "></div></div>",
        stimulus_after_key_press: "<div class = centerbox><div id=" + stims[1][1] + "-responded></div></div>",
        data: {
            trial_id: "Practice",
            condition: "No-Go",
            correct_response: "NO_KEYS"
        },
        timeout_message: message_correct,
        key_answer: "NO_KEYS"
    });
};

var practice_trials = jsPsych.randomization.repeat(practice_stimuli_block, blocks_practice);

var main_stimuli_block = [];

//Go stimuli
for (var i = 0; i < go_stimuli_block_main; i++){
    main_stimuli_block.push({
        stimulus: "<div class = centerbox><div id=" + stims[0][1] + "></div></div>",
        stimulus_after_key_press: "<div class = centerbox><div id=" + stims[0][1] + "-responded></div></div>",
        data: {
            trial_id: "Task",
            condition: "Go",
            correct_response: " "
        },
        key_answer: " "
    });
};

//No-go stimuli
for (var i = 0; i < no_go_stimuli_block_main; i++){
    main_stimuli_block.push({
        stimulus: "<div class = centerbox><div id=" + stims[1][1] + "></div></div>",
        stimulus_after_key_press: "<div class = centerbox><div id=" + stims[1][1] + "-responded></div></div>",
        data: {
            trial_id: "Task",
            condition: "No-Go",
            correct_response: "NO_KEYS"
        },
        key_answer: "NO_KEYS"
    });
};

var main_trials = jsPsych.randomization.repeat(main_stimuli_block, blocks_main);