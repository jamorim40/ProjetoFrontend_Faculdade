const fields = [
    "nome",
    "email",
    "nascimento",
    "cpf",
    "telefone",
    "cep",
    "endereco",
    "cidade",
    "estado"
];

export function getCadastroFormElements() {
    return {
        form: document.querySelector("#cadastroForm"),
        feedback: document.querySelector("#formFeedback"),
        toast: document.querySelector("#cadastroToast"),
        modal: document.querySelector("#cadastroModal"),
        fecharModal: document.querySelector("#fecharCadastroModal")
    };
}

export function readCadastroForm(form) {
    const cadastro = Object.fromEntries(
        fields.map((field) => [field, form.elements[field].value])
    );

    const participacao = form.querySelector(
        'input[name="participacao"]:checked'
    );

    cadastro.participacao = participacao ? participacao.value : "";
    return cadastro;
}

export function fillCadastroForm(form, cadastro) {
    fields.forEach((field) => {
        form.elements[field].value = cadastro[field] || "";
    });

    const participacao = form.querySelector(
        `input[name="participacao"][value="${cadastro.participacao || ""}"]`
    );

    if (participacao) {
        participacao.checked = true;
    }
}

export function showSuccess(elements) {
    elements.feedback.textContent =
        "Cadastro recebido com sucesso! Em breve entraremos em contato.";
    elements.feedback.className =
        "form-feedback alert alert-success visible";
    elements.toast.hidden = false;
    elements.modal.hidden = false;
    elements.feedback.scrollIntoView({ behavior: "smooth", block: "center" });
}

export function clearFeedback(elements) {
    elements.feedback.classList.remove("visible");
    elements.feedback.textContent = "";
    elements.toast.hidden = true;
    elements.modal.hidden = true;
}
