import { useForm, Controller } from 'react-hook-form';
import styles from '../style';
import FormElement from './FormElement';

const CTA = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '', 
      message: '',
    }

  })

  const onSubmit = data => console.log(data);

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Probieren Sie jetzt unseren Service aus!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Zufriedenstellender Service, nur einen Klick entfernt</p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Telefon: +49 17677873261, +49 17656563465 <br className="sm:block hidden"/> E-Mail: info@hegeba.de <br className="sm:block hidden"/> Adresse: Wederstr. 77, Berlin, 12347, Germany</p>
      </div>

      <div className="flex-1 flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller 
            name="name"
            control={control}
            rules={{ required: true }}
            render={( { field } ) => (
              <FormElement 
                type="text"
                label="Name"
                placeholder="Namen hier eingeben..."
                fieldRef={field}
                hasError={errors.name?.type === 'required'}
              />
            )}
          /> 
          <Controller 
            name="email"
            control={control}
            rules={{ required: true }}
            render={( { field } ) => (
              <FormElement 
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
      </div>
    </section>
  )
}

export default CTA;