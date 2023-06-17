module.exports = {
    params: {
        class: 'TP',
        side: 'F',
        from: undefined,
        to: undefined
    },
    body: p => `

    (footprint "TPSensorModule" (layer "${p.side}.Cu")
        (attr through_hole)

        (descr "Thinkpad T440 TrackPoint Sensor Module")
        (tags "trackpoint")

        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text value "TPSensorModule" (at 0 35.56 unlocked) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "${p.ref}" (at 0 38.1 unlocked) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))))

        (fp_circle (center 0 0) (end 3.6 0) (layer "Edge.Cuts") (width 0.1) (fill none))
        (fp_poly (pts
            (xy 4.6 -6.6)
            (xy 11.6 -6.6)
            (xy 11.6 6.6)
            (xy 4.6 6.6)
            (xy 4.6 11.5)
            (xy -7.7 11.5)
            (xy -7.7 -11.5)
            (xy 4.6 -11.5)
            ) (layer "User.2") (width 0.1) (fill none))
        (pad "" thru_hole circle (at 0 -9.5 90) (size 2.7 2.7) (drill 2.1) (layers *.Cu *.Mask "Dwgs.User") (clearance 0.3))
        (pad "" thru_hole circle (at 0 9.5 90) (size 2.7 2.7) (drill 2.1) (layers *.Cu *.Mask "Dwgs.User")(clearance 0.3))
        )


    `
}