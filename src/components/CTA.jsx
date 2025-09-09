import { useForm, Controller } from 'react-hook-form';
import styles from '../style';
import FormElement from './FormElement';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const CTA = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '', 
      message: '',
    }
  });

  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = () => {
    emailjs
      .sendForm('service_axm33id', 'template_eq1d5uw', form.current, {
        publicKey: 'IUhLgDO51FgnlojYE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true); // Set success state to true upon successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="cta-section" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Probieren Sie jetzt unseren Service aus!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Zufriedenstellender Service, nur einen Klick entfernt</p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Telefon: +49 17680722201, +49 00000000000 <br className="sm:block hidden"/> E-Mail: info@jojo.de <br className="sm:block hidden"/> Adresse: Neuköln 12051, Berlin, Germany</p>
      </div>

      <div className="flex-1 flex flex-col">
        {!success ? (
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <Controller 
              name="user_name"
              control={control}
              rules={{ required: true }}
              render={( { field } ) => (
                <FormElement
                  name="user_name" 
                  type="text"
                  label="Name"
                  placeholder="Namen hier eingeben..."
                  fieldRef={field}
                  hasError={errors.name?.type === 'required'}
                />
              )}
            /> 
            <Controller 
              name="user_email"
              control={control}
              rules={{ required: true }}
              render={( { field } ) => (
                <FormElement
                  name="user_email"
                  type="email"
                  label="Email"
                  placeholder="Email hier eingeben...."
                  fieldRef={field}
                  hasError={errors.email?.type === 'required'}
                />
              )}
            /> 
            <Controller 
              name="message"
              control={control}
              rules={{ required: true }}
              render={( { field } ) => (
                <FormElement 
                  name = "message"
                  type="textarea"
                  label="Nachricht"
                  placeholder="Nachricht hier eingeben..."
                  fieldRef={field}
                  hasError={errors.message?.type === 'required'}
                />
              )}
            />
            <button type="submit" className={`mt-10 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`} >
              Absenden
            </button>
          </form>
        ) : (
          <div>
            <p className="text-green-500">Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
