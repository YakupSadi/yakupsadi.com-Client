const id_loop = document.querySelector( '#loop' ).querySelectorAll( 'span' )

let i = 1


function loop()
{
    if( i < id_loop.length )
    {
        id_loop[ i ].style.animationName = 'move_up'

        if( i != 0 )
        {
            id_loop[ i - 1 ].style.animationName = 'move_upper'
        }

        i++
    }
    else
    {
        id_loop[ i - 1 ].style.animationName = 'move_upper'
        id_loop[ 0 ].style.animationName     = 'move_up'

        i = 1
    }
}
setInterval( loop, 2000 )