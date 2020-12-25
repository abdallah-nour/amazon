import { useState } from 'react';

const useForm = (initInputs, cb) => {
  const [inputs, setInputs] = useState(initInputs || {});

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    cb(inputs.email, inputs.password, inputs.name);
  }
  return [inputs, handleChange, handleSubmit];
}
export default useForm;
