import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  errors: {},
  submitted: false
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value, errors: { ...state.errors, [action.field]: "" } };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SUBMIT_SUCCESS":
      return { ...initialState, submitted: true };
    default:
      return state;
  }
};

const validate = (formData) => {
  let newErrors = {};
  if (!formData.name.trim()) newErrors.name = "Le nom est requis";
  if (!formData.email.trim()) {
    newErrors.email = "L'email est requis";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "L'email est invalide";
  }
  if (!formData.message.trim()) newErrors.message = "Le message est requis";
  return newErrors;
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "UPDATE_FIELD", field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(state);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Données envoyées :", state);
      dispatch({ type: "SUBMIT_SUCCESS" });
    } else {
      dispatch({ type: "SET_ERRORS", errors: validationErrors });
    }
  };

  return (
    <div>
      <h2>Contactez-nous</h2>
      {state.submitted && <p>Votre message a été envoyé avec succès !</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          {state.errors.name && <p>{state.errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          {state.errors.email && <p>{state.errors.email}</p>}
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={state.message}
            onChange={handleChange}
          ></textarea>
          {state.errors.message && <p>{state.errors.message}</p>}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
