import { loadCadastro, saveCadastro } from "./cadastroStorage.js";
import {
    clearFeedback,
    fillCadastroForm,
    getCadastroFormElements,
    readCadastroForm,
    showSuccess
} from "./cadastroView.js";
import {
    attachCadastroFormatters,
    normalizeCadastroFields
} from "./cadastroFormatters.js";

export function initializeCadastro() {
    const elements = getCadastroFormElements();

    if (!elements.form) {
        return;
    }

    attachCadastroFormatters(elements.form);

    const cadastroSalvo = loadCadastro();

    if (cadastroSalvo) {
        fillCadastroForm(elements.form, cadastroSalvo);
        normalizeCadastroFields(elements.form);
    }

    elements.form.addEventListener("submit", (event) => {
        event.preventDefault();

        normalizeCadastroFields(elements.form);

        if (!elements.form.checkValidity()) {
            elements.form.reportValidity();
            return;
        }

        const cadastro = readCadastroForm(elements.form);
        saveCadastro(cadastro);
        elements.form.reset();
        showSuccess(elements);
    });

    elements.form.addEventListener("reset", () => {
        clearFeedback(elements);
    });

    elements.fecharModal.addEventListener("click", () => {
        elements.modal.hidden = true;
    });
}
