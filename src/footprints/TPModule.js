module.exports = {
    params: {
        class: 'TP',
        side: 'F',
        from: undefined,
        to: undefined
    },
    body: p => `

    (footprint "TPModule" (layer "${p.side}.Cu")
        (attr smd)

        (descr "Thinkpad T440 TrackPoint Module")
        (tags "trackpoint")

        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 8.7 unlocked) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "TPModule" (at 0 10.2 unlocked) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "${p.ref}" (at 0 11.7 unlocked) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))))

        (fp_rect (start 1.5 -6) (end -1.5 6) (layer "B.CrtYd") (width 0.05) (fill none))
        (fp_rect (start -1.5 -6) (end 1.5 6) (layer "${p.side}.CrtYd") (width 0.05) (fill none))
        (pad "1" smd roundrect (at 0 -5) (size 2.3 1.6) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask"))
        (pad "2" smd roundrect (at 0 -2.5) (size 2.3286 1.6) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask"))
        (pad "3" smd roundrect (at 0 0) (size 2.3 1.6) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask"))
        (pad "4" smd roundrect (at 0 2.5) (size 2.3 1.6) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask"))
        (pad "5" smd roundrect (at 0 5) (size 2.3 1.6) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask"))
        )


    `
}