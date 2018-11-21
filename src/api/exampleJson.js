// states is a list of states, each of which looks like something
// the server might send back
 let states = [];

// working is a state that the code below mutates.
// we save copies of working into the states list
let working = {droplets: []};

// save deep copies the working state into the states list
function save() {
    states.push(JSON.parse(JSON.stringify(working)));
}

// start with no droplets
save();

// add droplet 0
working.droplets.push({
    id: 0,
    location: {y: 0, x: 0},
    dimensions: {y: 1, x: 1},
    volume: 1.0,
});
save();

// move droplet 0 around some
working.droplets[0].location = {y: 0, x: 1};
save();
working.droplets[0].location = {y: 0, x: 2};
save();
working.droplets[0].location = {y: 0, x: 3};
save();
working.droplets[0].location = {y: 0, x: 2};
save();
working.droplets[0].location = {y: 0, x: 1};
save();
working.droplets[0].location = {y: 0, x: 0};
save();

// add droplet 1
working.droplets.push({
    id: 1,
    location: {y: 3, x: 3},
    dimensions: {y: 1, x: 1},
    volume: 1.0,
});
save();

// make the droplets approach each other
working.droplets[0].location = {y: 1, x: 0};
working.droplets[1].location = {y: 2, x: 3};
save();
working.droplets[0].location = {y: 1, x: 1};
working.droplets[1].location = {y: 1, x: 3};
save();

// replace droplets 0 and 1 with a new one
working.droplets = [{
    id: 2,
    location: {y: 1, x: 1},
    // note that the dimension and volume have changed, the
    // droplet is now larger.
    dimensions: {y: 1, x: 2},
    volume: 2.0,
}];
save();

// move droplet 2 around a little
working.droplets[0].location = {y: 1, x: 1};
save();
working.droplets[0].location = {y: 1, x: 2};
save();
working.droplets[0].location = {y: 2, x: 2};
save();
working.droplets[0].location = {y: 2, x: 1};
save();
working.droplets[0].location = {y: 1, x: 1};
save();

console.log(states); 