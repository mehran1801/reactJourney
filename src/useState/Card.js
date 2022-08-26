import React,{useState} from 'react'

export function Card() {
   
      const [formState, setFormState] = useState({});

      const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      return (
        <form>
          <input
            value={formState.firstName ||''}
            onChange={handleChange}
            name="firstName"
            type="text"
          />
          <input
            value={formState.password ||''}
            onChange={handleChange}
            type="password"
            name="password"
          />
        </form>
      );
    }

