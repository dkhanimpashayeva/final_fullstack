import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup.string().required(),

  url: yup.string().url().required(),
  icon: yup.string().url().required(),
});