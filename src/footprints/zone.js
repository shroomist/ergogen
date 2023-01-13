module.exports = {
  params: {
    class: 'TRACE',
    side: "F",
    points: [[0,0], [100,0], [100,-100], [0,-100]],
    width: 0.2,
    net: undefined,
  },
  body: p => {

    return (`
        (zone (net ${p.net.index}) (net_name "${p.net.name}") (layer "${p.side}.Cu") (hatch edge 0.508)
            (connect_pads (clearance 0.508))
            (min_thickness 0.254) (filled_areas_thickness no)
            (fill (thermal_gap 0.508) (thermal_bridge_width 0.508))
            (polygon
                (pts
                    (xy ${p.points[0][0]} ${p.points[0][1]})
                    (xy ${p.points[1][0]} ${p.points[1][1]})
                    (xy ${p.points[2][0]} ${p.points[2][1]})
                    (xy ${p.points[3][0]} ${p.points[3][1]})
                )
            )
        )
    `)
  }
}



