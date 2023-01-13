module.exports = {
    params: {
        class: 'TP',
        side: 'F',
        from: undefined,
        to: undefined
    },
    body: p => `

    (footprint "TPSensorModule_Connector" (layer "${p.side}.Cu")
        (attr smd)

        (descr "Thinkpad T440 TrackPoint Sendor Module Connector")
        (tags "trackpoint")

        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 8.6 unlocked) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "TPSensorModule_Connector" (at 0 10.1 unlocked) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "${p.ref}" (at 0 11.6 unlocked) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))))

        (fp_rect (start 1.35 -4.65) (end -1.45 4.7) (layer "B.CrtYd") (width 0.05) (fill none))
        (fp_rect (start -1.45 -4.65) (end 1.35 4.7) (layer "${p.side}.CrtYd") (width 0.05) (fill none))
        (pad "1" smd roundrect (at 0 -3.675) (size 2.286 1.45) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0)
            (chamfer_ratio 0.3) (chamfer top_left))
        (pad "2" smd rect (at 0 -1.225) (size 2.286 1.45) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask"))
        (pad "3" smd rect (at 0 1.225) (size 2.286 1.45) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask"))
        (pad "4" smd rect (at 0 3.675) (size 2.286 1.45) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask"))

        )

    `
}