export function Skin(p) {
  console.log(p.open);
  return (
    p.open && (
      <div className='modal-container'>
        <div className='modal-form'>
          <form onSubmit={p.doSubmit}>
            <label>
              Username:
              <input type='text' name='nome' id='nome' value={p.dialogValue} onChange={p.doChange} />
            </label>
            <br />
            <button type='button' onClick={() => p.doConfirm()}>
              Conferma
            </button>
            <button type='button' onClick={() => p.doCancel()}>
              Annulla
            </button>
          </form>
        </div>
      </div>
    )
  );
}
