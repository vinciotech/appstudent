export function Skin ( p ) {
    
    return (
        <div> 
            <button  onClick={() => p.handleChangeTheme('Def')}>Default Theme </button>
            <button  onClick={() => p.handleChangeTheme('Mui')}>Mui Theme </button>
            <button  onClick={() => p.handleChangeTheme('Def')}>Normal Theme </button>
            <p>il tema corrente è: {p.theme}</p>
        </div>    
    );

}