import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import './Add.scss';
import axios from 'axios';
import { formSchema } from '../../schema/formSchema';
import { Helmet } from 'react-helmet';

const Add = () => {
const [state, setState] = useState({
url: '',
name: '',
icon: ''
});

const {
register,
handleSubmit,
watch,
formState: { errors },
} = useForm({ resolver: yupResolver(formSchema)});

const addData = () => {
setState({

url: '',
name: '',
icon: ''

})

if (!state.url || !state.name || !state.icon) return;

axios.post('http://localhost:3030/users', state);
getData()
};

const getData = async () => {
axios.get('http://localhost:3030/users');
};

useEffect(() => {
getData();
});
const handleChange = (e) => {
setState({...state, [e.target.name]: e.target.value });
getData();
};

const onSubmit = (data) => {
console.log(data);
addData();
};
console.log(watch('example'));

return (
<>
  <Helmet>
    <title>Add page</title>
    </Helmet>  
<div className='add'>
<form onSubmit={handleSubmit(onSubmit)}>
<input
{...register('url')}
onChange={handleChange}
value={state.url}
name='url'
type='url'
id='url'
/>

{errors.url && <span>{errors.url.message}</span>}

<input
{...register('name')}
onChange={handleChange}
value={state.name}
name='name'
id='name'
/>

{errors.name && <span>{errors.name.message}</span>}

<input
{...register('icon')}
onChange={handleChange}
value={state.icon}
name='icon'
id='icon'
type='url'
/>

{errors.icon && <span>{errors.icon.message}</span>}

<input type='submit' />
</form>
</div>
</>
);
};

export default Add;


