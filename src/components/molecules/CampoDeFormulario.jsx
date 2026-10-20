import CampoDeTexto from "../atoms/CampoDeTexto";

function CampoDeFormulario({id, tag, valor, onChange, placeholder,
    tipo = "text", multilinea = false, inputRef, maxLength, rows
}) {
    return(
        <div className="campoformulario">
            <label htmlFor={id}>
                {tag}
            </label>

            {multilinea ? (
                <textarea id={id}
                ref={inputRef}
                value={valor}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                rows={rows}
                />
            ) : (
                <CampoDeTexto id={id}
                type={tipo}
                value={valor}
                onChange={onChange}
                placeholder={placeholder}
                inputRef={inputRef}
                maxLength={maxLength}
                />
            )}
        </div>
    );
}

export default CampoDeFormulario