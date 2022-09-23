var component1 = {
    template: '<div>Shooter</div>',
props: ["text"]
};
var component2 = {
    template: '<div>Sandbox</div>',
};
var component3 = {
    template: '<div>Battle Royale</div>',
};
var component4 = {
    template: '<div>Strategy</div>',
};
var component5 = {
    template: '<div>MOBA</div>',
};

var app = new Vue({
    el: '#app',
    components: {
        component1,
        component2,
        component3,
        component4,
        component5,
    },
});

var active1 = {
    template: '<div>100{{ text }}</div>',
props: ['text'],
};
var active2 = {
    template: '<div>95{{ text }}</div>',
    props: ["text"],
};
var active3 = {
    template: '<div>50{{ text }}</div>',
    props: ["text"],
};
var active4 = {
    template: '<div>45{{ text }}</div>',
    props: ["text"],
};
var active5 = {
    template: '<div>35{{ text }}</div>',
    props: ["text"],
};
var active6 = {
    template: '<div>30{{ text }}</div>',
    props: ["text"],
};
var active7 = {
    template: '<div>27{{ text }}</div>',
    props: ["text"],
};
var active8 = {
    template: '<div>15{{ text }}</div>',
    props: ["text"],
};
var active9 = {
    template: '<div>8{{ text }}</div>',
    props: ["text"],
};
var active10 = {
    template: '<div>6{{ text }}</div>',
    props: ["text"],
};

var appA = new Vue({
    el: '#app',
    components: {
        active1,
        active2,
        active3,
        active4,
        active5,
        active6,
        active7,
        active8,
        active9,
        active10,
    }
});