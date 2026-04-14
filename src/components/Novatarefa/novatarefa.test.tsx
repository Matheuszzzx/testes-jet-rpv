import { render, screen } from "@testing-library/react";
import { Novatarefa } from "./Novatarefa";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("component Novatarefa", () => {
    it("deve renderizar o input e o botão corretamente na tela", () => {
        render(<Novatarefa onAdicionar={() => {}} />);
        
       
        const input = screen.getByPlaceholderText("Digite a nova tarefa");
        const button = screen.getByRole('button', { name: "Adicionar" });

        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });


    it("deve chamar a função onAdicionar enviando o texto digitado", async () => {
        const funcaoEspia = jest.fn();
        
        render(<Novatarefa onAdicionar={funcaoEspia} />);

        const input = screen.getByPlaceholderText("Digite a nova tarefa");
        const button = screen.getByRole('button', { name: "Adicionar" });

        
        await userEvent.type(input, "Estudar React");
        await userEvent.click(button);

        expect(funcaoEspia).toHaveBeenCalledTimes(1);
        expect(funcaoEspia).toHaveBeenCalledWith("Estudar React");

        expect(input).toHaveValue("");
    });
});