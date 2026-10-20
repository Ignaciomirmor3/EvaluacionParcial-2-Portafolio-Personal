
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contacto from "./Contacto";

describe("Componente de Contacto", () => {
  it("Debe mostrar el título, y los campos de texto.", () => {
    render(<Contacto />);

    expect(
      screen.getByRole("heading", { name: "Contacto" })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Correo")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Mensaje")).toBeInTheDocument();
  });

  it("Debe mostrar error al enviar sin nombre.", () => {
    render(<Contacto />);

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "ERROR: Debe ingresar su nombre."
    );
  });

  it("Debe mostrar error si es que no se ingresa nada en los campos obligatorios.", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Pedro Perez" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "ERROR: Debe ingresar todos los datos necesarios."
    );
  });

  it("Debe mostrar error al faltar el email y mensaje.", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Pedro Perez" },
    });

    fireEvent.change(screen.getByLabelText("Correo"), {
      target: { value: "" },
    });

    fireEvent.change(screen.getByLabelText("Mensaje"), {
      target: { value: "" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "ERROR: Debe ingresar todos los datos necesarios."
    );
  });

  it("Debe mostrar error si se ingresa un correo inválido", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Pedro Perez" },
    });

    fireEvent.change(screen.getByLabelText("Correo"), {
      target: { value: "correo-malo" },
    });

    fireEvent.change(screen.getByLabelText("Mensaje"), {
      target: { value: "ABC 123 Hola Hola Hola" },
    });

    const formulario = screen
      .getByLabelText("Nombre")
      .closest("form");

    fireEvent.submit(formulario);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "ERROR: Correo invalido. Compruebe e ingreselo nuevamente."
    );
  });
  
  it("Debe mostrar un mensaje al enviar todos los datos exitosamente.", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Pedro Perez" },
    });

    fireEvent.change(screen.getByLabelText("Correo"), {
      target: { value: "pedrito@email.com" },
    });

    fireEvent.change(screen.getByLabelText("Mensaje"), {
      target: { value: "ABC ABC 123 123 Hola" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar" })
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      "Formulario enviado."
    );

    expect(screen.getByLabelText("Nombre")).toHaveValue("");
    expect(screen.getByLabelText("Correo")).toHaveValue("");
    expect(screen.getByLabelText("Mensaje")).toHaveValue("");
  });

});
