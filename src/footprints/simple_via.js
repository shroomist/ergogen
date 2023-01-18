// Via
// Nets
//		net: the net this via should be connected to

module.exports = {
    params: {
        net: undefined,
        size: 0.6,
        drill: 0.3,
        layer1: "F.Cu",
        layer2: "B.Cu"
    },
    body: p => `
        (via (at ${p.place[0]} ${p.place[1]}) (size ${p.size}) (drill ${p.drill}) (layers "${p.layer1}" "${p.layer2}") (free) (net ${p.net.index}) )
    `
}