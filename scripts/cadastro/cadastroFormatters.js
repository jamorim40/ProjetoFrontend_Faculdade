function onlyDigits(value) {
    return value.replace(/\D/g, "");
}

export function formatCpf(value) {
    const digits = onlyDigits(value).slice(0, 11);

    if (digits.length <= 3) {
        return digits;
    }

    if (digits.length <= 6) {
        return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    }

    if (digits.length <= 9) {
        return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    }

    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

export function formatTelefone(value) {
    const digits = onlyDigits(value).slice(0, 11);

    if (digits.length <= 2) {
        return digits.length ? `(${digits}` : "";
    }

    const areaCode = digits.slice(0, 2);
    const number = digits.slice(2);
    const prefixLength = digits.length === 11 ? 5 : 4;

    if (number.length <= prefixLength) {
        return `(${areaCode}) ${number}`;
    }

    return `(${areaCode}) ${number.slice(0, prefixLength)}-${number.slice(prefixLength)}`;
}

export function formatCep(value) {
    const digits = onlyDigits(value).slice(0, 8);

    if (digits.length <= 5) {
        return digits;
    }

    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

export function normalizeCadastroFields(form) {
    form.elements.cpf.value = formatCpf(form.elements.cpf.value);
    form.elements.telefone.value = formatTelefone(form.elements.telefone.value);
    form.elements.cep.value = formatCep(form.elements.cep.value);
}

export function attachCadastroFormatters(form) {
    const formatters = {
        cpf: formatCpf,
        telefone: formatTelefone,
        cep: formatCep
    };

    Object.entries(formatters).forEach(([field, formatter]) => {
        form.elements[field].addEventListener("input", (event) => {
            event.target.value = formatter(event.target.value);
        });
    });
}
