import ZodForm from "./components/Form";
import ReactHookForm from "./components/Form-ReactHookForm";
import FormUseRef from "./components/Form-UseRef";
import FormUseState from "./components/Form-UseState";

export default function App() {
  return (
    <div>
      <div className="mb-3 border border-primary p-3">
        <FormUseRef />
      </div>

      <div className="mb-3 border border-warning p-3">
        <FormUseState />
      </div>

      <div className="mb-3 border border-info p-3">
        <ReactHookForm />
      </div>

      <div className="mb-3 border border-success p-3">
        <ZodForm />
      </div>
    </div>
  );
}
