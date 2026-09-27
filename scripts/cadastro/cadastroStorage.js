const STORAGE_KEY = "cadastroInstitutoEsperanca";

export function saveCadastro(cadastro) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cadastro));
}

export function loadCadastro() {
    const dadosSalvos = localStorage.getItem(STORAGE_KEY);

    if (!dadosSalvos) {
        return null;
    }

    try {
        return JSON.parse(dadosSalvos);
    } catch (error) {
        console.error("Não foi possível recuperar o cadastro salvo.", error);
        return null;
    }
}
