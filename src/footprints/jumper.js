module.exports = {
    params: {
      designator: 'J',
	    side: 'F',
      from: undefined,
      to: undefined
    },
    body: p => {
        const justify = p.side == 'B' ? '(justify mirror)' : ''
        return `
        (footprint "PCM12SMTR" (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer ${p.side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value Jumper (at 0 -7.3) (layer ${p.side}.Fab) (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value Jumper (at 0 2 270) (layer ${p.side}.SilkS) (effects (font (size 1 1) (thickness 0.15)) ${justify} ))

        ${'' /* pins */}
        (pad 1 smd rect (at -0.50038 0 ${p.rot}) (size 0.635 1.143) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask)
        (clearance 0.1905) ${p.from.str})
        (pad 2 smd rect (at 0.50038 0 ${p.rot}) (size 0.635 1.143) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask)
        (clearance 0.1905) ${p.to.str}))
    `
    }
}