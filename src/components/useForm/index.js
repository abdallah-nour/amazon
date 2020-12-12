import { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { db, auth } from '../../firebase'

const useForm = (initInputs, cb) => {
  const history = useHistory();
  const [inputs, setInputs] = useState(initInputs || {});

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    cb();
  }
  return [inputs, handleChange, handleSubmit];
}
export default useForm;
