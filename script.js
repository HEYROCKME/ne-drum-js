let sequencer = document.getElementById("step-sequencer")
let sequencerSteps = 16


const createSequencer = (steps) => {



    for (let i = 0; i < steps; i++) {
        let step = document.createElement('input')
        step.setAttribute("type", "checkbox")
        step.setAttribute("id", `step-${i}`)
        
        sequencer.appendChild(step)
    }
}

createSequencer(sequencerSteps)



console.log(sequencer)
