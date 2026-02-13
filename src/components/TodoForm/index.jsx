import { Button } from "../Button";
import { TextInput } from "../TextInput";
import "./todo-form.style.css";

export function TodoForm({ onSubmit, defaultValue }) {
  return (
    <form action={onSubmit} className="todo-form">
      <TextInput
        placeholder="Digitre o item que deseja adicionar"
        name="description"
        required
        defaultValue={defaultValue}
      />
      <Button>Salvar item</Button>
    </form>
  );
}
