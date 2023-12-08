document.addEventListener( 'alpine:init', () => {

    Alpine.store( 'dataStore', {

        desc    : [],
        lines   : [],
        items   : [],
        about   : [],
        works   : [],
        images  : [],
        infoOpt : [],
        infoSts : [],
        infoInp : [],


        getData()
        {
            this.item(),
            this.line(),
            this.infoWnM(),
            this.infoDesc(),
            this.infoAbout(),
            this.portfolio(),
            this.infoImages()
        },


        async infoDesc()
        {
            await fetch( 'http://localhost:3000/api/v1/infoDesc' )
            .then( res => res.json() )
            .then( res => {

                this.desc = res.data[ 0 ]
            })
        },

        async infoWnM()
        {
            await fetch( 'http://localhost:3000/api/v1/infoWnM' )
            .then( res => res.json() )
            .then( res => {

                const stsValues = Object.values( res.data[ 0 ].data[ 0 ] ).map( item => item.opt.endsWith( '</svg>' ) )
                this.infoSts    = stsValues

                const optValues = Object.values( res.data[ 0 ].data[ 0 ] ).map( item => item.opt )
                this.infoOpt    = optValues

                const inpValues = Object.values( res.data[ 0 ].data[ 0 ] ).map( item => item.inp )
                this.infoInp    = inpValues
            })
        },

        async infoAbout()
        {
            await fetch( 'http://localhost:3000/api/v1/infoAbout' )
            .then( res => res.json() )
            .then( res => {

                this.about = res.data[ 0 ].about[ 0 ]
            })
        },

        async infoImages()
        {
            await fetch( 'http://localhost:3000/api/v1/infoImages' )
            .then( res => res.json() )
            .then( res => {

                this.images = res.data[ 0 ]
            })
        },

        async portfolio()
        {
            await fetch( 'http://localhost:3000/api/v1/portfolio' )
            .then( res => res.json() )
            .then( res => {

                this.works = res.data
            })
        },

        async item()
        {
            await fetch( 'http://localhost:3000/api/v1/skills/item' )
            .then( res => res.json() )
            .then( res => {

                this.items = res.data
            })
        },

        async line()
        {
            await fetch( 'http://localhost:3000/api/v1/skills/line' )
            .then( res => res.json() )
            .then( res => {

                this.lines = res.data
            })
        },
    })
})