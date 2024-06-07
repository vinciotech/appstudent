
export   function Skin ( p ) {
    
    return <div>
    {p.user && p.user.username ? (
        <div>
          <p>Benvenuto, {p.user.username}!</p>         
          <button  onClick={p.logout}>Logout </button>
        </div> ) : (  
        <div>
           <p>Per favore, esegui il login.</p> 
           <button  onClick={p.login}>Login </button>
        </div>
        )
    }
 </div>   
 
}
