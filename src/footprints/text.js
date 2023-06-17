module.exports = {
    params: {
        layer: 'F.SilkS',
        text: '',
        h_size: 1,
        v_size: 1,
        thickness: 0.15,
        justify: '',
        style: '' // bold/italic
    },
    body: p => {
        justify = p.justify && `(justify ${p.justify})` || '';
        style = p.style && `${p.style}` || '';
        return `
            (gr_text "${p.text}" ${p.at} (layer ${p.layer})
                (effects (font (size ${p.h_size} ${p.v_size}) (thickness ${p.thickness}) ${style}) ${justify})
            )
        `
    }
}
