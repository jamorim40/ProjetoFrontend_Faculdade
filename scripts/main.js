import { initializeCadastro } from "./cadastro/cadastroController.js";
import { initializeModal } from "./componentes/modal.js";
import { initializeProjects } from "./projetos/projetosView.js";

initializeCadastro();
initializeProjects();
initializeModal("#modalDemo", "#fecharModal");
