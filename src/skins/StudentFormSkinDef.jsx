
export function Skin( p ) {
    function isView() {
        return (p.windowState==='view');
    }
    function isNew() {
        return (p.windowState==='new');
    }
    
    function isMod() {
        return (p.windowState==='mod');
    }

const contClass = (isNew() ? "modal-":"")+"container";
const formClass = (isNew() ? "modal-":"")+"form";

return ( 
    <div className={contClass} >
        <div className={formClass} >
            <form onSubmit={p.doSubmit}>

            <label >Nome:<input type="text" name="nome" id="nome" value={p.formData.nome} onChange={p.doChange}/></label><br />
            <label >Cognome:<input type="text" name="cognome" id="cognome" value={p.formData.cognome} onChange={p.doChange} /></label> <br />
            <label >et&agrave;:<input type="text" name="eta" id="eta" value={p.formData.eta}  onChange={p.doChange} /></label><br />
            <label >email:<input type="email" name="email" id="email" value={p.formData.email}  onChange={p.doChange} /></label><br />
            <label >data nascita:<input type="date" name="dataNascita" id="dataNascita" value={p.formData.dataNascita}  onChange={p.doChange} /></label><br />
             {isView() && <button type="button" onClick={() => p.doModify() }>Modifica</button>}
            {isView() && <button type="button" onClick={() => p.doDelete() }>Elimina</button>}
            {isNew() && <button type="submit" >Salva e chiudi</button>}
            {isMod() && <button type="submit" >Salva</button>}
            {!isView() && <button type="button" onClick={() => p.doClose() }>Annulla</button>}
            </form>
        </div>
    </div>

);
}